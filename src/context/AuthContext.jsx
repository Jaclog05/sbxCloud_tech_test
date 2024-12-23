import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({children}) {
  const [ authState, setAuthState ] = useState({
		isAuthenticated: false,
		user: null,
		token: null,
	});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (token) {
      const loggedUser = users.find((user) => user.token === token);
      setAuthState({
        isAuthenticated: true,
        user: loggedUser || null,
        token: token,
      });
      // Opcional: Aquí puedes cargar información del usuario con el token
    }
  }, []);

	const login = async (username, password) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const localUser = users.find(
        (user) => user.name === username && user.password === password
      );

      if (localUser) {
        console.log('localUser = ', localUser)
        localStorage.setItem("token", localUser.token);
        localStorage.setItem("userName", localUser.name);
        setAuthState({
          isAuthenticated: true,
          user: localUser,
          token: localUser.token,
        });
        return;
      }
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("userName", data.username);
        const localToken = localStorage.getItem("token")
        setAuthState({
          isAuthenticated: !!localToken,
          user: data,
          token: localToken,
        });
      }
    } catch (error) {
      console.error("login error:", error);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
      token: null,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
  };

	return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

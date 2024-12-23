import React, {useState} from 'react'
import { useAuthContext } from '../../context/authContext';
import { useNavigate, Link } from 'react-router';
import cocktailLogo from "../../assets/cocktail_logo.svg";
import styles from './Login.module.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuthContext();
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    await login(username, password)
    if(localStorage.getItem("token")){
      navigate('/')
    }else{
      setError('Invalid username or password');
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.logoDiv}>
          <img src={cocktailLogo} alt="Cocktail Logo" className={styles.logo} />
          <h3>SbxCloud Cocktails</h3>
        </div>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
          className={styles.input}
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          className={styles.input}
        />
        <input type="submit" className={styles.button} value="Submit"/>
        {error && <p className={styles.error}>{error}</p>}
      </form>
      <p>Don't have an account yet? <Link to='/sign_up'>Register here</Link></p>
    </div>
  )
}

export default Login
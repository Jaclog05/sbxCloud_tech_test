import { createContext, useState, useContext } from "react";

export const CocktailContext = createContext(null);

export function CocktailProvider({children}) {
  const [ searchTerm, setSearchTerm ] = useState("");
	const [ filterCategoryValue, setFilterCategoryValue] = useState("")

  function handleChange(e) {
    setSearchTerm(e.target.value)
  };

	function handleChangeFilterCategory(e) {
		setFilterCategoryValue(e.target.value)
	}

    return (
			<CocktailContext.Provider value={{ searchTerm, handleChange, filterCategoryValue, handleChangeFilterCategory }}>
				{children}
			</CocktailContext.Provider>
    );
}

export function useCocktailContext() {
  return useContext(CocktailContext);
}

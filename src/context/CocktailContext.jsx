import { createContext, useState, useContext, useEffect } from "react";

export const CocktailContext = createContext(null);

export function CocktailProvider({children}) {
  const [ searchTerm, setSearchTerm ] = useState("");
	const [ filterCategoryValue, setFilterCategoryValue] = useState("")
  const [data, setData] = useState({
    cocktailsList: null,
    ingredientsList: null
  })

  useEffect(() => {
    fetchIngredients();
  }, [])

  useEffect(() => {
    fetchCocktails();
  }, [filterCategoryValue, searchTerm])


  const fetchIngredients = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    const res = await response.json()
    setData((prevData) => {
      return {
        ...prevData,
        ingredientsList: res.drinks
      }
    })
  }

  const fetchCocktails = async () => {
    let apiUrl;
    if(searchTerm.trim() !== '') {
      apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    } else if(filterCategoryValue.length) {
      apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filterCategoryValue}`;
    } else {
      apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
    }

    const response = await fetch(apiUrl);
    const data = await response.json();
    setData((prevData) => {
      return {
        ...prevData,
        cocktailsList: data.drinks
      }
    });
  }

    return (
			<CocktailContext.Provider
        value={{
          searchTerm,
          setSearchTerm,
          filterCategoryValue,
          setFilterCategoryValue,
          data
        }}
      >
				{children}
			</CocktailContext.Provider>
    );
}

export function useCocktailContext() {
  return useContext(CocktailContext);
}

import React, {useEffect, useState} from 'react'
import { Link } from 'react-router'
import CocktailCard from '../../components/cocktailCard/cocktailCard'
import { useCocktailContext } from '../../context/CocktailContext';
import styles from './Home.module.css';
import DropDownMenu from '../../components/dropDownMenu/DropDownMenu';
import cocktailsCategories from '../../data/cocktailsCategories.json';

function Home() {

  const [cocktailsList, setCocktailsList] = useState(null)
  const [ingredientsList, setIngredientsList] = useState(null)
  const {searchTerm, filterCategoryValue} = useCocktailContext();

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')

      .then(response => response.json())
      .then(res => setIngredientsList(res.drinks))
  }, [])

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchTerm.trim() === '') {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        const data = await response.json();
        setCocktailsList(data.drinks);
      } else {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();
        setCocktailsList(data.drinks);
      }
    };

    fetchSearchResults();
  }, [searchTerm])

  useEffect(() => {
    if(filterCategoryValue.length){
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filterCategoryValue}`)

      .then(response => response.json())
      .then(res => setCocktailsList(res.drinks))
    }
  }, [filterCategoryValue])

  return (
    <div>
      <section className={styles.filters}>
        <DropDownMenu
          value={filterCategoryValue}
          options={cocktailsCategories}
        />
      </section>
      <section className={styles.container}>
        <div className={styles.ingredients}>
          <h4>Ingredients List</h4>
          {
            ingredientsList ? (
              ingredientsList.map(ingredient => (
                <Link key={ingredient.strIngredient1} to={`ingredient/${ingredient.strIngredient1}`}>
                  <h5>{ingredient.strIngredient1}</h5>
                </Link>
              ))
            ) : (
              <h1 className={styles.loading}>Loading Ingredients...</h1>
          )}
        </div>
        <div className={styles.grid}>
          {cocktailsList ? (
            typeof cocktailsList == 'string' ? (
              <h1 className={styles.noDataText}>{cocktailsList} ❌</h1>
            ) : (
              cocktailsList.map(cocktail => (
                <Link className={styles.link} key={cocktail.idDrink} to={`cocktail/${cocktail.idDrink}`}>
                  <CocktailCard
                    name={cocktail.strDrink}
                    image={cocktail.strDrinkThumb}
                  />
                </Link>
              ))
            )
          ) : (
            <h1 className={styles.loading}>Loading Cocktails</h1>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
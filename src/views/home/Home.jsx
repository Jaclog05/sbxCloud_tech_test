import React from 'react'
import { Link } from 'react-router'
import CocktailCard from '../../components/cocktailCard/cocktailCard'
import { useCocktailContext } from '../../context/CocktailContext';
import styles from './Home.module.css';
import DropDownMenu from '../../components/dropDownMenu/DropDownMenu';
import cocktailsCategories from '../../data/cocktailsCategories.json';

function Home() {

  const {data, filterCategoryValue} = useCocktailContext();

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
            data.ingredientsList ? (
              data.ingredientsList.map(ingredient => (
                <Link key={ingredient.strIngredient1} to={`ingredient/${ingredient.strIngredient1}`}>
                  <h5>{ingredient.strIngredient1}</h5>
                </Link>
              ))
            ) : (
              <h1 className={styles.loading}>Loading Ingredients...</h1>
          )}
        </div>
        <div className={styles.grid}>
          {data.cocktailsList ? (
            typeof data.cocktailsList == 'string' ? (
              <h1 className={styles.noDataText}>{data.cocktailsList} ❌</h1>
            ) : (
              data.cocktailsList.map(cocktail => (
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
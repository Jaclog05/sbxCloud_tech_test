import React from 'react'
import { useCocktailContext } from '../../context/CocktailContext';
import styles from './Home.module.css';
import DropDownMenu from '../../components/dropDownMenu/DropDownMenu';
import cocktailsCategories from '../../data/cocktailsCategories.json';
import CocktailGrid from '../../components/CocktailGrid';
import IngredientsSection from '../../components/IngredientsSection';

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
          <IngredientsSection
            ingredientsList={data.ingredientsList}
          />
        </div>
        <div className={styles.grid}>
          <CocktailGrid
            cocktailsList={data.cocktailsList}
          />
        </div>
      </section>
    </div>
  )
}

export default Home
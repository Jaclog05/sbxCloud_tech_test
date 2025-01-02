import React from 'react'
import styles from '../views/home/Home.module.css'
import CocktailCard from './cocktailCard/CocktailCard'
import { Link } from 'react-router'

function CocktailGrid({cocktailsList}) {
	if(!cocktailsList) return <h1 className={styles.loading}>Loading Cocktails</h1>
	if(typeof cocktailsList == 'string') return <h1 className={styles.noDataText}>{cocktailsList} ❌</h1>

  return (
    <>
			{
				cocktailsList.map(cocktail => (
					<Link
						className={styles.link}
						key={cocktail.idDrink}
						to={`cocktail/${cocktail.idDrink}`}
					>
						<CocktailCard
							name={cocktail.strDrink}
							image={cocktail.strDrinkThumb}
						/>
					</Link>
				))
			}
    </>
  )
}

export default CocktailGrid
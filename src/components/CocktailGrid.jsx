import React from 'react'
import styles from '../views/home/Home.module.css'
import CocktailCard from './cocktailCard/CocktailCard'
import LoadingSpinner from '../assets/loading_spinner.svg'
import { Link } from 'react-router'

function CocktailGrid({cocktailsList}) {
	if(!cocktailsList) return <img src={LoadingSpinner} alt="Loading Spinner" className={styles.loading} />
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
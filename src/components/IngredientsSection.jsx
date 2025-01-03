import React from 'react'
import { Link } from 'react-router'
import styles from '../views/home/Home.module.css'
import LoadingSpinner from '../assets/loading_spinner.svg'

function IngredientsSection({ingredientsList}) {

	if(!ingredientsList) return <img src={LoadingSpinner} alt="Loading Spinner" className={styles.loading} />

  return (
    <>
      {
				ingredientsList.map(ingredient => (
					<Link
						key={ingredient.strIngredient1}
						to={`ingredient/${ingredient.strIngredient1}`}
					>
						<h5>{ingredient.strIngredient1}</h5>
					</Link>
				))
			}
    </>
  )
}

export default IngredientsSection
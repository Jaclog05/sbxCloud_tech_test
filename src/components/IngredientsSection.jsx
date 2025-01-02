import React from 'react'
import { Link } from 'react-router'
import styles from '../views/home/Home.module.css'

function IngredientsSection({ingredientsList}) {

	if(!ingredientsList) return <h1 className={styles.loading}>Loading Ingredients...</h1>

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
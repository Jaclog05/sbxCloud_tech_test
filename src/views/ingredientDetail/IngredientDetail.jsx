import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import styles from './IngredientDetail.module.css'

function IngredientDetail() {
  const { ingredientName } = useParams()
  const [ingredientDetail, setIngredientDetail] = useState(null)
  const [cocktailByIngredient, setCocktailByIngredient] = useState(null)

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`)
      .then(response => response.json())
      .then(res => setIngredientDetail(res.ingredients[0]))
  }, [])

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`)
      .then(response => response.json())
      .then(res => setCocktailByIngredient(res.drinks))
  }, [])

  return (
    <>
      {
        ingredientDetail ? 
        <div className={styles.container}>
            <header className={styles.header}>
              <h1>{ingredientDetail.strIngredient}</h1>
            </header>

            <div className={styles.content}>
              <section className={`${styles.section} ${styles.type}`}>
                  <h4>Type</h4>
                  <p>{ingredientDetail.strType || 'N/A'}</p>
              </section>

              <section className={`${styles.section} ${styles.cocktails}`}>
                  <h4>Cocktails</h4>
                  <ul>
                    {cocktailByIngredient ? (
                      cocktailByIngredient.map(cocktail =>  (
                          <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
                      ))
                    ) : (
                      <h4>loading...</h4>
                    )}
                  </ul>
              </section>

              <section className={`${styles.section} ${styles.description}`}>
                <h4>Description</h4>
                <p>{ingredientDetail.strDescription || 'No description available.'}</p>
              </section>
            </div>

        </div>
        : <h1>Loading...</h1>
      }
    </>
  )
}

export default IngredientDetail
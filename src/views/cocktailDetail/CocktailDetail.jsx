import React, {useState, useEffect} from 'react'
import { useParams } from "react-router";
import styles from './CocktailDetail.module.css'
import LoadingSpinner from '../../assets/loading_spinner.svg'

function CocktailDetail() {
  const { cocktailId } = useParams()
  const [cocktailDetail, setCocktailDetail] = useState(null)

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
      .then(response => response.json())
      .then(res => setCocktailDetail(res.drinks[0]))
  }, [])
  return (
    <>
      {
        cocktailDetail ?
        <div className={styles.container}>
            <header className={styles.header}>
              <h1>{cocktailDetail.strDrink}</h1>
            </header>
            <div className={styles.content}>
              <section className={`${styles.section} ${styles.imageContainer}`}>
                  <img 
                    src={cocktailDetail.strDrinkThumb}
                    alt={cocktailDetail.strDrink}
                  />
              </section>
              
              <section className={styles.section}>
                  <h4>Type</h4>
                  <p>{cocktailDetail.strCategory}</p>
              </section>

              <section className={styles.section}>
                  <h4>Ingredients</h4>
                  <ul>
                    {
                      Object.keys(cocktailDetail)
                        .filter(key => key.startsWith("strIngredient") && cocktailDetail[key])
                        .map((key, index) => (
                          <li key={index}>{cocktailDetail[key]}</li>
                        ))
                    }
                  </ul>
              </section>

              <section className={styles.section}>
                <h4>Description</h4>
                <p>{cocktailDetail.strInstructions}</p>
              </section>
            </div>
        </div>
        : <div className={styles.container}>
            <img src={LoadingSpinner} alt="Loading Spinner" className={styles.loading} />
          </div>
      }
    </>
  )
}

export default CocktailDetail
import React from 'react'
import styles from './CocktailCard.module.css';

function CocktailCard({name, image}) {
  return (
    <div className={styles.card}>
      <h4 className={styles.cardTitle}>{name}</h4>
      <img className={styles.cardImage} src={image} alt={name} />
    </div>
  )
}

export default CocktailCard
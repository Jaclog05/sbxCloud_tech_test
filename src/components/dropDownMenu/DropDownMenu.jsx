import React from 'react'
import { useCocktailContext } from '../../context/CocktailContext'
import styles from './DropDownMenu.module.css';

function DropDownMenu({options, value}) {
    const { setFilterCategoryValue } = useCocktailContext();
  return (
    <select
        value={value}
        onChange = {(e) => setFilterCategoryValue(e.target.value)}
        className={styles.selectDropdown}
    >
      <option disabled value="">Select cocktail type</option>
      {Object.keys(options).map((key) => (
        <option key={key} value={key}>
          {key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
        </option>
      ))}
    </select>
  )
}

export default DropDownMenu
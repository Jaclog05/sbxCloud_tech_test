import React, {useState} from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { useAuthContext } from "../../context/authContext";
import { useCocktailContext } from "../../context/CocktailContext";
import cocktailLogo from "../../assets/cocktail_logo.svg";
import styles from './NavBar.module.css';

function NavBar() {
  const { logout } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const {searchTerm, handleChange} = useCocktailContext()


  if(location.pathname === '/login' || location.pathname === '/sign_up') {
    return null
  }

  function handleLogOut(){
    logout();
    navigate('/login')
  }

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logoLink}>
        <img src={cocktailLogo} alt="Cocktail Logo" className={styles.logo} />
        <h3>SbxCloud Cocktails</h3>
      </Link>
      <input
        type="text"
        placeholder="Search for cocktails..."
        value={searchTerm}
        onChange={handleChange}
        className={styles.searchBar}
      />
      <div className={styles.links}>
        <h4>Hello, {localStorage.getItem("userName")}</h4>
        <button onClick={handleLogOut} className={styles.button}>Log Out</button>
      </div>
    </nav>
  );
}

export default NavBar;

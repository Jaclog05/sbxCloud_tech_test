import React, { useState } from "react";
import styles from './SignUp.module.css';
import cocktailLogo from '../../assets/cocktail_logo.svg'
import { useNavigate } from "react-router";
import { Link } from "react-router";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const generateToken = () => {
    return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = generateToken();
    const newUser = { name, email, password, token };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    alert("sucessful Register. Now you can log in");
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.logoDiv}>
            <img src={cocktailLogo} alt="Cocktail Logo" className={styles.logo} />
            <h3>SbxCloud Cocktails</h3>
          </div>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your username"
            className={styles.input}
            required
          />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className={styles.input}
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            className={styles.input}
            required
          />
        <button type="submit" className={styles.button}>Register</button>
      </form>
      <p>Already have an account? <Link to='/login'>Log In</Link></p>
    </div>
  );
};

export default SignUp;


import './App.css'
import { Routes, Route } from "react-router";
import Home from './views/home/Home';
import Login from './views/login/Login';
import Signup from './views/signup/Signup';
import CocktailDetail from './views/cocktailDetail/CocktailDetail';
import IngredientDetail from './views/ingredientDetail/IngredientDetail';
import NavBar from './components/navBar/NavBar';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<Signup />} />
        <Route path="cocktail/:cocktailId" element={
          <PrivateRoute>
            <CocktailDetail />
          </PrivateRoute>
        } />
        <Route path="ingredient/:ingredientName" element={
          <PrivateRoute>
            <IngredientDetail />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
}

export default App

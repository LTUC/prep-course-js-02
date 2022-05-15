import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import FavRecipe from "./components/FavRecipe";

function App() {
  return (
    <>

      <h1>Welcome to Recipes Web app</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favRecipes" element={<FavRecipe />} />
      </Routes>
    </>
  );
}

export default App;

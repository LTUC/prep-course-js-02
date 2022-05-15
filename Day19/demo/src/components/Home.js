import { Button, Row, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Cards from './Cards';
import "./style.css";
import data from "./data";

export default function Home() {

    const [recipes, setRecipes] = useState(data);


    async function getRecipes() {
        // let serverUrl = process.env.REACT_KEY_SERVER;

        let url = "https://recipe-js-02.herokuapp.com/recipes";
        // console.log("Server url", serverUrl);
        let response = await fetch(`${process.env.REACT_APP_SERVER}/recipes`);
        console.log("response", response)
        let recipesData = await response.json();

        console.log("parseddata", recipesData)

        setRecipes(recipesData); // updating the state, now the data coming from the server is stored inside the "recipes" state
        // axios.get(url).then().catch()

        console.log("1, After updating", recipes);
    }

    function updateRecipe(newRecipe, id) {
        let updatedRecipes = recipes.map((recipe) => {
            if (recipe.id === id) {
                recipe.comment = newRecipe.userComment;
                return recipe;
            } else {
                return recipe;
            }
        })

        setRecipes(updatedRecipes);

    }


    useEffect(() => {
        // getRecipes();
    }, [])


    return (
        <>
            <h1>Home Page</h1>
            <br />


            {
                (recipes.length > 0) && <Cards recipes={recipes} updateRecipe={updateRecipe} />
            }



        </>
    )
}
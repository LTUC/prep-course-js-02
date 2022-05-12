import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Cards from './Cards';
import "./style.css";


export default function Home() {

    const [recipes, setRecipes] = useState([]);


    async function getRecipes() {
        // let serverUrl = process.env.REACT_KEY_SERVER;

        let url = "https://recipe-js-02.herokuapp.com/recipes";
        // console.log("Server url", serverUrl);
        let response = await fetch(url);
        console.log("response", response)
        let recipesData = await response.json();

        console.log("parseddata", recipesData)

        setRecipes(recipesData); // updating the state, now the data coming from the server is stored inside the "recipes" state
        // axios.get(url).then().catch()

        console.log("1, After updating", recipes);
    }


    useEffect(() => {
        getRecipes();
    }, [])


    return (
        <>
            <h1>Home Page</h1>
            {/* <button>Old way</button> */}
            <br />
            <Button variant="info">Get Recipes</Button>

            {
                (recipes.length > 0) && <Cards recipes={recipes} />
            }


        </>
    )
}
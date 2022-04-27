'use strict';

const express = require("express");
const cors = require("cors");
const axios = require('axios').default;
require('dotenv').config()

const apiKey = process.env.API_KEY;

const PORT = 3001;

const app = express();
app.use(cors());

// routes
app.get("/", handleHome);
app.get('/recipes', handleRecipes);
app.get("/searchRecipe", handleSearch);

// functions
function handleHome(req, res) {
    res.send("Hello world from JS-02");
}
// axios.get().then().catch()
function handleRecipes(req, res) {
    // waiting to get data from 3rd API
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
    axios.get(url)
        .then(result => {
            // console.log(result);
            // console.log(result.data.recipes);
            let recipes = result.data.recipes.map(recipe => {
                return new Recipe(recipe.title, recipe.readyInMinutes, recipe.image, recipe.summary);
            })
            res.json(recipes);
        })
        .catch((error) => {
            console.log(error);
            res.send("Inside catch")
        })


}

function handleSearch(req, res) {
    // console.log(req.query);
    let recipeName = req.query.name; // I chose to call it name
    let url = `https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&apiKey=${apiKey}`
    axios.get(url)
        .then(result => {
            // console.log(result.data.results);
            res.json(result.data.results)
        })
        .catch();
    // waiting to get data from 3rd API
    // res.send("Searching for recipes");
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


function Recipe(title, time, image, summary) {
    this.title = title;
    this.time = time;
    this.image = image;
    this.summary = summary;
}
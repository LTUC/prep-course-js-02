'use strict';

// 1. require the package
const express = require('express');
const recipesData = require("./data.json");

// 2. create an Express app
const app = express();
const port = 3000


// 4. creating a route
// app.METHOD(PATH, HANDLER)
app.get("/firstRoute", handleFirstRoute);
app.get("/", handleHomePage)
app.get("/recipes", handleRecipes)


// functions:
function handleFirstRoute(req, res) {
    res.send("tesing");
}

function handleHomePage(req, res) {
    res.send("Hello, welcome to my first Express app!");
}
function handleRecipes(req, res) {
    // console.log(recipesData);
    let result = [];
    recipesData.data.forEach(element => {
        let newRecipe = new Recipe(element.title, element.readyInMinutes, element.summary, element.image);
        result.push(newRecipe)
    })
    // console.log(result);
    // res.send("Recipe route is working");
    res.json(result);
}


// 3. the server is listening on port 3000
app.listen(port, handleListen)

function handleListen() {
    console.log(`Example app listening on port ${port}`)
}

function Recipe(title, time, summary, image) {
    this.title = title;
    this.time = time;
    this.summary = summary;
    this.image = image;
}
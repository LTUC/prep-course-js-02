'use strict';

const url = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3001;
const apiKey = process.env.API_KEY;

const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config();

const { Client } = require('pg')
const client = new Client(url)

const app = express();



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// or 
// app.use(express.json());

// routes:
app.get("/", handleHome);
app.get('/recipes', handleRecipes);
app.get("/searchRecipe", handleSearch);

// CRUD
app.post("/addRecipe", handleAdd); // CREATE
app.get("/getRecipes", handleGet); // READ
app.put("/updateRecipe/:recipeName", handleUpdate)    // UPDATE with params
app.delete("/deleteRecipe", handleDelete)   // DELETE with quey


app.use(handleError);


// functions:
function handleHome(req, res) {
    res.send("Hello world from JS-02");
}

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
    let recipeName = req.query.name;
    let url = `https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&apiKey=${apiKey}`
    axios.get(url)
        .then(result => {
            // console.log(result.data.results);
            res.json(result.data.results)
        })
        .catch();
}
function handleAdd(req, res) {

    const { title, time, summary, image } = req.body;
    let sql = 'INSERT INTO recipe(title,time,summary,image ) VALUES($1, $2, $3, $4) RETURNING *;' // sql query
    let values = [title, time, summary, image];
    client.query(sql, values).then((result) => {
        console.log(result.rows);
        return res.status(201).json(result.rows[0]);
    }).catch((err) => {
        handleError(err, req, res);
    })
}

function handleGet(req, res) {
    let sql = 'SELECT * from recipe;'
    client.query(sql).then((result) => {
        console.log(result);
        res.json(result.rows);
    }).catch((err) => {
        handleError(err, req, res);
    });
}

function handleUpdate(req, res) {
    const { recipeName } = req.params;
    const { title, time, summary, image } = req.body;

    let sql = `UPDATE recipe SET title = $1, time = $2, summary = $3, image = $4 WHERE title = $5 RETURNING *;`
    let values = [title, time, summary, image, recipeName];

    client.query(sql, values).then(result => {
        // console.log(result.rows);
        // res.send("working");
        res.json(result.rows[0]);
    }

    ).catch();

}
// http://localhost:3001/deleteRecipe?recipeName=test
function handleDelete(req, res) {
    const { recipeName } = req.query
    console.log(recipeName);
    let sql = 'DELETE FROM recipe WHERE title=$1;'
    let value = [recipeName];
    client.query(sql, value).then(result => {
        console.log(result);
        res.send("deleted");
    }
    ).catch(error => {
        console.log(111111111111111111111, error);
    })
}


function handleError(error, req, res) {
    res.send(error)
}

function handleError(error, req, res) {
    res.status(500).send(error)
}


// after connection to db, start the server
client.connect().then(() => {

    app.listen(PORT, () => {
        console.log(`Server is listening ${PORT}`);
    });
})



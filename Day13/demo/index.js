'use strict';


const url = "postgres://boshra:1994@localhost:5432/demo2"
const PORT = 3001


const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config();

const { Client } = require('pg')
const client = new Client(url)

// or
// const pg = require('pg');
// const client = new pg.Client()

const app = express();



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// or 
// app.use(express.json());

// routes:
app.post("/addRecipe", handleAdd);
app.get("/getRecipes", handleGet);
app.use(handleError);


function handleAdd(req, res) {
    // console.log(req.body);

    // let title = req.body.title;
    // let time = req.body.time;
    // let summary = req.body.summary;
    // let image = req.body.image;

    // or

    const { title, time, summary, image } = req.body;

    let sql = 'INSERT INTO recipe(title,time,summary,image ) VALUES($1, $2, $3, $4) RETURNING *;' // sql query
    let values = [title, time, summary, image];
    client.query(sql, values).then((result) => {
        console.log(result.rows);
        return res.status(201).json(result.rows[0]);
    }).catch()


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

function handleError(error, req, res) {
    res.status(500).send(error)
}


// after connection to db, start the server
client.connect().then(() => {

    app.listen(PORT, () => {
        console.log(`Server is listening ${PORT}`);
    });
})



'use strict';

const express = require('express');
require('dotenv').config();
const axios = require('axios');

const PORT = process.env.PORT || 3001; // short circut 

const app = express();

app.use(express.json());
const { Client } = require('pg')
const client = new Client(process.env.DATABASE_URL);


// routes:
app.get('/', handleHome);
// app.get('/getAnime', handleGetAnime); // .then().catch()
// app.get('/getAnime/v2', handleGetAnimeV2) // async+ await
app.get('/query', handleQuery);
app.get('/body', handleBody);
app.get('/params/:id/:name', handleParams);
// dbs:
app.post('/addAnime', handleAddAnime);
app.get('/getAnimeData', handleGetAnime)


// functions
// http://localhost:3000/query?animeName=naruto&url=naruto.com
function handleQuery(req, res) {
    console.log(req.query);
    let name = req.query.animeName;
    let url = req.query.url;
    console.log(name, url);
    res.json(req.query);
}

// http://localhost:3000/body
function handleBody(req, res) {
    console.log(req.body);
    let name = req.body.name;
    let url = req.body.url
}
// http://localhost:3000/params/1/naruto
function handleParams(req, res) {
    console.log(req.params);
    let name = req.params.name;
    let id = req.params.id;

    res.json(req.params)
}

function handleAddAnime(req, res) {
    const name = req.body.name;
    const url = req.body.url;

    let sql = `INSERT INTO favanime (name, url) VALUES ($1, $2) RETURNING *`;
    let values = [name, url];
    client.query(sql, values)
        .then(result => {
            console.log(result.rows);
            res.status(201).json(result.rows[0])
        }).catch(error => {
            console.log(error);
        })
}

function handleGetAnime(req, res) {
    let sql = `SELECT * FROM favanime;`;

    client.query(sql).then(result => {
        console.log(result.rows);
        res.json(result.rows);

    }).catch(error => {
        console.log(error);
    })
}


// https://api.jikan.moe/v4/characters/3
// function handleGetAnime(req, res) {
//     let url = `https://api.jikan.moe/v4/characters/3`;
//     console.log("before .then")
//     axios.get(url)
//         .then(result => {
//             // console.log(result.data.data)
//             let animeObject = result.data.data;
//             let anime = new Anime(animeObject);
//             console.log("inside .then");
//             // before
//             // new Anime(result.data.data.name , result.data.data.url);
//             res.json(anime);
//         })
//         .catch(error => {
//             console.log(error);
//         });
//     console.log("after .then");
// }
// try {} catch {}
async function handleGetAnimeV2(req, res) {
    try {
        let url = `https://api.jikan.moe/v4/characters/3`;
        console.log("before async await");

        let result = await axios.get(url);

        console.log('after async await');
        // console.log(result.data);

        let animeObject = result.data.data;
        let anime = new Anime(animeObject);
        res.json(anime);
    }
    catch (error) {
        console.log(error);
    }

    console.log("after all");

}
function handleHome(req, res) {
    res.send('Hello World!');
}



client.connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening ${PORT}`);
    });
})


function Anime(animeData) {
    this.name = animeData.name;
    this.image = animeData.url;
}
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.json({ message: 'Hola, from My template ExpressJS with React-Vite' });
});

// create the get request for students in the endpoint '/api/students'
app.get('/sightings', async (req, res) => {
    try {
        const { rows: animals } = await db.query(`SELECT
        s.id,
        s.datetime,
        s.species,
        s.location,
        s.healthy,
        s.sighter_email,
        s.timestamp AS sighting_timestamp,
        a.nickname
    FROM
        sightings s
    LEFT JOIN
        animals a
    ON
        s.species = a.species`);
        res.send(animals);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

app.post('/animals', async (req, res) => {
    try {
        console.log("In the server2", req.body);
        const newAnimal = {nickname: req.body.nickname, species: req.body.species, timestamp: new Date()}
        const newSighting = {location: req.body.location, datetime: req.body.datetime, sighter_email: req.body.sighter_email, healthy: req.body.healthy}
        const result = await db.query(
            `INSERT INTO animals (nickname, species, timestamp) VALUES($1, $2, $3) RETURNING *`,
            [newAnimal.nickname, newAnimal.species, newAnimal.timestamp]
        );

        const result1 = await db.query(
            `INSERT INTO sightings (datetime, species, location, healthy, sighter_email, timestamp) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
            [newSighting.datetime, newAnimal.species, newSighting.location, newSighting.healthy, newSighting.sighter_email, newAnimal.timestamp]
        );

        let dbResponse = result.rows[0];
        let dbResponse2 = result1.rows[0];
        console.log(dbResponse);
        console.log(dbResponse2)
        return res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});
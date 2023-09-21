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
        s.id = a.id`);
        res.send(animals);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

// create the POST request
// app.post('/api/tracker', async (req, res) => {
//     try {
//         const newStudent = {
//             firstname: req.body.firstname,
//             lastname: req.body.lastname,
//             iscurrent: req.body.iscurrent
//         };
//         //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
//         const result = await db.query(
//             'INSERT INTO tracker(firstname, lastname, is_current) VALUES($1, $2, $3) RETURNING *',
//             [newStudent.firstname, newStudent.lastname, newStudent.iscurrent],
//         );
//         console.log(result.rows[0]);
//         res.json(result.rows[0]);

//     } catch (e) {
//         console.log(e);
//         return res.status(400).json({ e });
//     }

// });

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});
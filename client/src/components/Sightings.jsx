import React, { useState, useEffect } from 'react';
import MyForm from './Form';
import Sighting from './Sighting';
import Card from 'react-bootstrap/Card';

const Sightings = () => {
    const [sightings, setSightings] = useState([]);

    const loadSightings = () => {
        fetch("http://localhost:8080/sightings")
            .then((response) => response.json())
            .then((sighting) => {
                setSightings(sighting);
            });
    }

    useEffect(() => {
        loadSightings();
    }, [sightings]);

    return (
        <div>
            <ul>
                {sightings.map((sighting) => {
                    return <li key={sighting.id}><Sighting sighting={sighting} /></li>
                })}
            </ul>
        </div>
    )
}

export default Sightings;
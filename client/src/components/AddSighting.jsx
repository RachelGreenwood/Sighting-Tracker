import { useState } from 'react';
import { Button, Form } from "react-bootstrap"

const AddSighting = () => {
    const [sighting, setSighting] = useState([]);
    const [spotted, setSpotted] = useState({species: "", location: "", datetime: "", healthy: null, sighter_email: "", timestamp: "", nickname: ""});

    const handleSpeciesChange = (e) => {
        const species = e.target.value;
        setSpotted({ ...spotted, species });
    }

    const handleLocationChange = (e) => {
        const location = e.target.value;
        setSpotted({ ...spotted, location });
    }

    const handleDatetimeChange = (e) => {
        const datetime = e.target.value;
        setSpotted({ ...spotted, datetime });
    }

    const handleHealthyChange = (e) => {
        const healthy = e.target.value;
        setSpotted({ ...spotted, healthy });
    }

    const handleSighterEmailChange = (e) => {
        const sighter_email = e.target.value;
        setSpotted({ ...spotted, sighter_email });
    }

    const handleNicknameChange = (e) => {
        const nickname = e.target.value;
        setSpotted({ ...spotted, nickname });
    }

    const onSave = (newSighting) => {
        setSighting((sighting) => [...sighting, newSighting])
    }

    const postSighting = (sighting) => {
        return fetch("http://localhost:8080/sightings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sighting),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log("From the post ", data);
                //I'm sending data to the List of Students (the parent) for updating the list
                onSaveStudent(data);
                //this line just for cleaning the form
                clearForm();
            });
    };

    return (
        <div>
            <Form onSubmit={postSighting}>
                <Form.Group>
                    <Form.Label>Species:</Form.Label>
                    <input type="text" value={spotted.species} onChange={handleSpeciesChange} required></input>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Location:</Form.Label>
                    <input type="text" value={spotted.location} onChange={handleLocationChange} required></input>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date of Sighting:</Form.Label>
                    <input type="text" value={spotted.datetime} onChange={handleDatetimeChange} required></input>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Healthy (true or false):</Form.Label>
                    <input type="text" value={spotted.healthy} onChange={handleHealthyChange} required></input>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name of Spotter(s):</Form.Label>
                    <input type="text" value={spotted.sighter_email} onChange={handleSighterEmailChange} required></input>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cryptid Name:</Form.Label>
                    <input type="text" value={spotted.nickname} onChange={handleNicknameChange} required></input>
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="outline-success">Add Cryptid</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddSighting;
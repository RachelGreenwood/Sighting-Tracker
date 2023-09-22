import { useState, useRef } from 'react';
import { Button, Form } from "react-bootstrap"

const AddSighting = (props) => {
    const userDate = useRef();
    const userSpecies = useRef();
    const userLocation = useRef();
    const userHealthy = useRef();
    const userSpotter = useRef();
    const userNickname = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const selectedDate = new Date(userDate.current?.value);
        const isChecked = e.target.checked;
        const userEvent = {species: userSpecies.current?.value, location: userLocation.current?.value, datetime: selectedDate.toISOString(), healthy: userHealthy.current?.checked, sighter_email: userSpotter.current?.value, nickname: userNickname.current?.value, timestamp: new Date()}
        console.log("Inside the component", userEvent);
        handlePostRequest(userEvent);
    }

    const handlePostRequest = (data) => {
        fetch("http://localhost:8080/animals", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((response) => {if (response.status == 200) {props.onGetRequest}});
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Species:</Form.Label>
                    <input type="text" ref={userSpecies} required></input>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Location:</Form.Label>
                    <input type="text" ref={userLocation} required></input>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date of Sighting:</Form.Label>
                    <input type="date" ref={userDate} required></input>
                </Form.Group>
                <Form.Check type="checkbox" ref={userHealthy} label="Are they healthy?"></Form.Check>
                <Form.Group>
                    <Form.Label>Name of Spotter(s):</Form.Label>
                    <input type="text" ref={userSpotter} required></input>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cryptid Name:</Form.Label>
                    <input type="text" ref={userNickname} required></input>
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="outline-success">Add Cryptid</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddSighting;
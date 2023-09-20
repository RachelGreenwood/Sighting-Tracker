import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'
import moment from 'moment';

const Sighting = ({sighting}) => {

    return (
        <Card>
            <Card.Body>
            <table>
                <thead>
                    <th>Species</th>
                    <th>Location</th>
                    <th>Date of Sighting</th>
                    <th>Healthy?</th>
                    <th>Spotter</th>
                    <th>Record Creation Date</th>
                    <th>Cryptid Name</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{sighting.species}</td>
                        <td>{sighting.location}</td>
                        <td>{moment(sighting.datetime).format("MMMM Do, YYYY")}</td>
                        <td>{sighting.healthy.toString()}</td>
                        <td>{sighting.sighter_email}</td>
                        <td>{moment(sighting.timestamp).format("MMMM Do, YYYY")}</td>
                    </tr>
                </tbody>
            </table>
            {/* <Button variant="outline-danger" onClick={()=>{onDelete(student)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button> */}
            {/* <Button variant="outline-info" onClick={()=>{onUpdate(student)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button> */}
            </Card.Body>
        </Card>
    )

}

export default Sighting;
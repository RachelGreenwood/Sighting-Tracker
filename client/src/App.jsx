import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
// import ListStudents from './components/ListStudents';
import Sightings from './components/Sightings'
import AddSighting from './components/AddSighting'
import { useEffect, useState } from 'react';


function App() {
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
    <div className="App">
      <MyNavBar />
      <Sightings sightings={sightings} />
      <AddSighting onGetRequest={loadSightings} />
    </div>
  )
}

export default App

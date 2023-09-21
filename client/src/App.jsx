import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
// import ListStudents from './components/ListStudents';
import Sightings from './components/Sightings'
import AddSighting from './components/AddSighting'


function App() {

  return (
    <div className="App">
      <MyNavBar />
      <Sightings />
      <AddSighting />
    </div>
  )
}

export default App

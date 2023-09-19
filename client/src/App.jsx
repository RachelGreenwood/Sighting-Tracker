import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
// import ListStudents from './components/ListStudents';
import Sightings from './components/Sightings'


function App() {

  return (
    <div className="App">
      <MyNavBar />
      {/* <ListStudents /> */}
      <Sightings />
    </div>
  )
}

export default App

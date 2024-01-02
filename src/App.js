import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Router, Route, Navigate, Routes, Switch} from 'react-router-dom';
import NavBar from './Nav';
import DogList from './DogList'
import DogDetail from './DogDetail';



function App({dogs}) {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/dogs' element={<DogList dogs={dogs} />}></Route>
    <Route exact path='/' element={<Navigate to="/dogs" />}></Route>
    <Route exact path='/dogs/:doggy' element={<DogDetail dogs={dogs} />}></Route>
    </Routes>
    
    </BrowserRouter>

    </div>
  );
}


  export const dogs = [{
      name: "Whiskey",
      age: 5,
      src: "whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "tubby.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]

  App.defaultProps = { dogs }

export default App;

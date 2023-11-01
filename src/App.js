import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
function App() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  const [name, setName] = useState("");
  const [displayedName, setDisplayedName] = useState("");  

  const updatecar = () => {
    setCar({ ...car, color: "blue", brand: "Audi", year:"1999", model:"Sravan" });
  };

  const updateName = () => {
    setDisplayedName(`Your name is ${name}`);  
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.brand} {car.model} from {car.year}.
        </p>
        <button type="button" onClick={updatecar}>
          Blue
        </button>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="button" onClick={updateName}>
          Name
        </button>

        { <p>{displayedName}</p>}  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car />);
export default App;

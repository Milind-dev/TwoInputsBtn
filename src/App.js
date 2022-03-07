import React, { useState } from 'react';
import './style.css';
import MultipleInputs from './MultipleInputs';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [Results, setResults] = useState([]);

  const handleChange = () => {
    setResults([...firstName, ...secondName]);
    console.log(firstName, secondName);
  };
  return (
    <div>
      <h1>Two inputs files</h1>
      <input
        type="text"
        name="firstname"
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="firstname"
      />
      <input
        type="text"
        name="secondname"
        onChange={(e) => setSecondName(e.target.value)}
        placeholder="secondname"
      />
      <button onClick={handleChange}> click </button>
      <p>{Results}</p>
      <hr />
      <MultipleInputs />
    </div>
  );
}

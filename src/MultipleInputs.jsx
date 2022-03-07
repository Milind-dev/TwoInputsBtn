import React, { useState } from 'react';

export default function MultipleInputs() {
  const intialStates = {
    FirsName: '',
    SecondName: '',
  };

  const [values, setValues] = useState(intialStates);
  const [stored, setStored] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          label="Company"
          name="Firstname"
          onChange={handleChange}
          placeholder="Firstname"
        />
        <input
          type="text"
          label="Job Title"
          name="SecondName"
          onChange={handleChange}
          placeholder="SecondName"
        />
        <button type="submit" onClick={handleClick}>
          clci
        </button>
      </form>
      <p>{stored} </p>
    </div>
  );
}

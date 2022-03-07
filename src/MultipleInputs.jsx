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
    setStored([{ ...values }]);
    console.log(values);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          label="Company"
          name="FirsName"
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
      <div>
        {stored.map((element, index) => {
          return (
            <div key={index}>
              <p>{element.FirsName}</p>
              <p>{element.SecondName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

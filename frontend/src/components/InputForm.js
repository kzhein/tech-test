import React, { useState } from 'react';

const InputForm = ({ handleSubmit }) => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
    gender: 'M',
  });

  const handleChange = e => {
    setPerson({
      ...person,
      [e.target.name]:
        e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
    });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setPerson({
          name: '',
          age: '',
          gender: 'M',
        });
        handleSubmit(person);
      }}
    >
      <div className='input-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          required
          value={person.name}
          onChange={handleChange}
        />
      </div>

      <div className='input-group'>
        <label htmlFor='age'>Age</label>
        <input
          type='number'
          name='age'
          id='age'
          required
          value={person.age}
          onChange={handleChange}
        />
      </div>

      <div className='input-group'>
        <label htmlFor='gender'>Gender</label>
        <select
          name='gender'
          id='gender'
          required
          value={person.gender}
          onChange={handleChange}
        >
          <option value='M'>Male</option>
          <option value='F'>Female</option>
        </select>
      </div>

      <button type='submit'>Add Person</button>
    </form>
  );
};

export default InputForm;

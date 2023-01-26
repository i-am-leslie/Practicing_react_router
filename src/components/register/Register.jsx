import React, { useState } from 'react';
import './register.css';

let dummyUsers = [
  {username: 'admin', email: 'admin@example.com', password: 'password'},
  {username: 'user', email: 'user@example.com', password: 'password'},
];

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // check if email already exists
    if (dummyUsers.find((user) => user.email === formData.email)) {
      setError('Email already exists');
    } else {
      // add new user
      dummyUsers = [...dummyUsers, formData];
      console.log('User registered successfully');
    }
  }

  return (

    <div className="register-container">
      <form className='form' onSubmit={handleSubmit}>
        <label className='user' >
          Username:
          <input type="text" name="username" onChange={handleChange} value={formData.username} />
        </label>
        <br />
        <label className='Email'>
          Email:
          <input type="email" name="email" onChange={handleChange} value={formData.email} />
        </label>
        <br />
        <label className='password'>
          Password:
          <input type="password" name="password" onChange={handleChange} value={formData.password} />
        </label>
        <br />
        <small className='register' type="submit">Register</small>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Register;

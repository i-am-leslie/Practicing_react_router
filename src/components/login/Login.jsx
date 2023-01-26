import React, { useState } from 'react';
import './login.css';
import Register from '../register/Register';
import { Link } from 'react-router-dom'

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // check if user is registered
    const user = Register.dummyUsers.find((user) => user.email === formData.email && user.password === formData.password);
    if (user) {
       setMessage(`Welcome back, ${user.username}`);
    } else {
       setError('You are not registered. Please register first.');
    }
  }

  return (
    <div className='login'>
      <form className='form' onSubmit={handleSubmit}>
        { message && <p className="message">{message}</p>}
        <label className='email'>
          Email:
          <input type="email" name="email" onChange={handleChange} value={formData.email} />
        </label>
        <br />
        <label className='password'>
          Password:
          <input type="password" name="password" onChange={handleChange} value={formData.password} />
        </label>
        <br />
        <small className='sign' type="submit">Sign In</small>
        {error && <p className="error">{error}</p>}
      </form>
      <p className='d'>Don't have an account? <small className='register_btn'><Link to="/Register"> Register</Link></small></p>
    </div>
  );
}

export default SignIn;

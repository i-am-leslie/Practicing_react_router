import React, { useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { SiAutodesk } from 'react-icons/si'
import { AiFillMessage } from 'react-icons/ai'


const canadianPhoneNumberRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const Home = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");

    const handlePhoneNumberChange = e => {
        const number = e.target.value;
        setPhoneNumber(number);
        if (number.match(canadianPhoneNumberRegex)) {
            setPhoneNumberError("");
        } else {
            setPhoneNumberError("Invalid phone number format");
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (phoneNumberError) {
            console.log("Phone number is not valid, show an error message");
        } else {
            console.log("Phone number is valid, proceed with submitting the phone number");
        }
    };

    return (
        <header>
            <div className='head_container'>
                <h3>WatchList</h3>
                <a className='logo'><SiAutodesk/></a>
                <small className='login_btn'><Link to="/Login"> Sign In</Link></small>
                <small className='register_btn'><Link to="/Register"> Register</Link></small>
            </div>
            <h2>Welcome to watchlist</h2>
            <h1>Unlimited Movies,Drama,<br /> Music Video and More Content.</h1>
            <h4>For unlimited access to music videos, latest movies and live TV shows.<br />click the subscribe button below</h4>
            <form  className='form' onSubmit={handleSubmit}>
                <label>
                    Phone Number:
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className='text_field'
                    />
                </label>
                {phoneNumberError && <p>{phoneNumberError}</p>}
                <button className='submit_btn' type="submit">Submit</button>
            </form>
        </header>
    )
}

export default Home

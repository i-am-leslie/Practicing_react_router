import React from 'react'
import './register.css'
import  {useRef,useState,useEffect} from "react"
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;

// Regular expression for username validation
const usernameRegex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
const Register = () => {
 const userRef=useRef();
 const errrRef=useRef();

 const[user, setUser]=useState('');
 const[ValidName, setValidName]=useState(false);
 const[userFocus, setUserFocus]=useState(false);

 const[pwd, setpwd]=useState('');
 const[ValidPwd, setValidPwd]=useState(false);
 const[pwdFocus, setUserPwd]=useState(false);

 const[matchPwd, setMatchPwd]=useState('');
 const[ValidMatch, setValidMatch]=useState(false);
 const[matchFocus, setMatchFocus]=useState(false);
  return (
    <div>Register</div>
  )
}

export default Register
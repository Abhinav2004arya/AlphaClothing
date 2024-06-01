import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import './signup.css';
import axios from 'axios';
import Loading from '../components/Loading';

export default function Signup() {
  const [errors, setErrors] = useState({});
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  
  function clearErrors() {
    setErrors({});
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    
    
    
      const username = event.target.user.value;
      const name = event.target.name.value;
      const email = event.target.email.value;
      const mob = event.target.mob.value;
      const pass = event.target.pass.value;
    const repass = event.target.rpass.value;
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validPass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{5,15}$/;
    var vname= /^[A-Za-z]+$/;



    const newErrors = {};

    if (username.length < 8) {
      newErrors.username = '*Username should be at least 8 characters long';
    }
    if( !name.match(vname) ||name.length<5 || name.length>15)
    {
        newErrors.name= '*Name should be between 5-15 characters and should not contain numbers';
    }
    if( !email.match(validRegex) )
    {
        newErrors.email = '*Provide email in correct format'
    }
    if(mob.length != 10)
    {
        newErrors.mob = '*Provide mob no in correct format'
        
    }
    if(!pass.match(validPass))
    {
        newErrors.pass= "*Password should contain atleast one lowercase,one Uppercase,numeric value,special character,and length should be between 5-15 charaters"
    }
    if(repass != pass && pass !== "")
    {
        newErrors.repass= "*Password Doesn't match"
    }
   

    
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      // axios.post('https://alphaclothing.onrender.com/register', { username, name, email, mob, pass })
      axios.post('http://localhost:5000/register',{username,pass})
        .then(result => {
          console.log(result);
          window.alert("Signed Up successfully");
          navigation("/login");
          
        })
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false));

    }

  }

  return (
    <div className='lbody'>
      {isLoading && <Loading />}
      <div className='lcontainer'>
        <h1> Sign Up </h1>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Username' name='user' id='user' />
          <span className='error'>{errors.username}</span>

          <input type='text' placeholder='Name' name='name' id='name' />
          <span className='error'>{errors.name}</span>

            <input type="text" placeholder="Email-id" name=" email" id="email"/><span class="error" >{errors.email}</span>
            <input type="tel" placeholder="Mobile no."  name=" mob" id="mob" /><span class="error" >{errors.mob}</span>
            <input type="password" placeholder="password" name=" pass" id="pass"/><span class="error" >{errors.pass}</span>
            <input type="password" placeholder="Re-Enter Password" name=" rpass" id="rpass"/><span class="error" >{errors.repass}</span>

          <div className='terms'>
            <input type='checkbox' id='check' />
            <label htmlFor='check'>
              I agree to the these <a href='#'>Terms & condition</a>
            </label>
            <span className='error'>{errors.checkbox}</span>
          </div>
          <input type='submit' value='Sign Up' className='sub' />
          <div className='register'>
          
            Already have an account? <Link to='/login'>Login Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from 'react'
import { useState } from 'react'
import './signup.css'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import Loading from '../components/Loading';


export default function Login() {
    const navigate = new useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        const username = e.target.user.value;
        const pass = e.target.pass.value;
        console.log(username);
        console.log(pass);


        
        setIsLoading(true);
        // axios.post('https://alphaclothing.onrender.com/login',{username,pass})
        axios.post('http://localhost:5000/login',{username,pass})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate("/home");
            }else{
                window.alert("Invalid Username/Password");
            }
            
        } )
        .catch(err => {
            setIsLoading(true);
            console.log(err);
        })
        .finally(() => setIsLoading(false));

    }


  return (
    <div className='lbody'>
        <div className="lcontainer">
        <h1> Login </h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name=" user" id="user"/>
            <input type="password" placeholder="password" name="pass" id="pass"/>
            <div className="recover">
                <a href="#">Forgot Password?</a>
                <input type="submit" value="Login" className="sub"/>
        {isLoading && <Loading />}
            </div>
        </form>


        <div className="register">
            Not have an account? <Link to="/signup">
                Register Now
            </Link>
        </div>
    </div>
    </div>
  )
}

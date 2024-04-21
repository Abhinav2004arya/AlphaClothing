import React from 'react'
import './signup.css'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'


export default function Login() {
    const navigate = new useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        const username = e.target.user.value;
        const pass = e.target.pass.value;
        console.log(username);
        console.log(pass);
        axios.post('https://alphaclothing.onrender.com/login',{username,pass})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){

                // navigate(`/profile/${username}`);
                navigate("/home");
            }else{
                window.alert("Invalid Username/Password");
            }
        } )
        .catch(err=> console.log(err))

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

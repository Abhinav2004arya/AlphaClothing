import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
    
import axios from 'axios';
export default function Profile() {

    const [userData, setUserData] = useState(null);
    const { username } = useParams(); // Fetch the username from URL parameters

    useEffect(() => {
        // Fetch user data when the component mounts
        axios.get(`http://localhost:5000/user/Abhi123@`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [username]);
    console.log(userData);


  return (
    <div>
    
        <div class="inputdiv">
            <br/>
            <h3>Personal Information</h3>
    </div>            

<form>
    <div class="profilediv">
            <img src="https://th.bing.com/th/id/OIP.1C0HFAqfm-4XIkbT_F93GgHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Profile 1"/>
            <p>Hello, <strong></strong></p>
        </div>
    
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">UserName</label>
                <input type="text" class="form-control" id="username" name="username"    disabled/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name="name"  disabled/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput3" class="form-label">Email</label>
                <input type="text" class="form-control" id="email" name="email"   disabled/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput4" class="form-label">Mobile No</label>
                <input type="text" class="form-control" id="mob" name="mob" disabled/>
            </div>
            
            </form>
            <br/>
            <form >
            
                     
            <input type="submit" class="btn btn-primary removebtn" value="Remove Account" />
        </form>
        

            </div>
  )
}

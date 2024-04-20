import React from 'react'
import '../Main_Pages/style.css';
import { Link,NavLink } from 'react-router-dom';
import {Profile} from 'phosphor-react'


const linkStyle = {
    textDecoration: "none",
    color: 'aliceblue'
  };

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-light bg-dark n1" >
            <Link activeClassName='selected' className="navbar-brand" to="/home">
                 <img src="Utilities/vector.png" className="logo"  alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    
                    <li className="nav-item dropdown categories active">
                    <NavLink to='/men'  style={linkStyle}>Men</NavLink>
                          
                      </li>
                    <li className="nav-item dropdown categories">
                    <Link to='/women' style={linkStyle}>Women</Link>
                          
                      </li>
                    <li className="nav-item dropdown categories">
                        <Link to='/kids' style={linkStyle}>Kids</Link>
                          
                      </li>
                    <li className="nav-item dropdown categories">
                    <Link to='/living' style={linkStyle}>Living</Link>
                        
                      </li> 
                </ul>
                
                <form className='log' >
                {/* <FontAwesomeIcon icon={faUser} />  */}
                <Link to='/profile'><input type="button" id="login" className='buto' value="Profile" style={linkStyle}/></Link>
                <Link to="/login"><input type="button" id="login" className='buto' value="Logout" style={linkStyle}/></Link>
                    
               
               
                </form>
                
                
                    
            </div>
        </nav>
    </div>
  )
}

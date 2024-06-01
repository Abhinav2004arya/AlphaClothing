
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './buy.css';

export default function Buy() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const clearErrors = () => {
    setErrors({});
  };

  const validateForm = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const drop = document.getElementById('drop').value;
    const zip = document.getElementById('zip').value;
    const card = document.getElementById('card').value;
    const exp = document.getElementById('exp').value;
    const eyr = document.getElementById('eyr').value;
    const cvv = document.getElementById('cvv').value;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const vname = /^[A-Za-z]+$/;

    const errors = {};

    if (!name.match(vname) || name.length < 5 || name.length > 15) {
      errors.name = 'Name should be between 5-15 characters';
    }

    if (!email.match(validRegex)) {
      errors.email = 'Provide email in correct format';
    }

    if (city.length > 15 || city.length === 0) {
      errors.city = 'City Name cannot be empty';
    }

    if (drop === '0') {
      errors.drop = 'State is required';
    }

    if (zip.length !== 6) {
      errors.zip = 'Zip code should be 6 characters';
    }

    if (card.length !== 16) {
      errors.card = 'Credit Card number is not correct';
    }

    if (exp.length === 0) {
      errors.exp = 'Enter Expiry Month';
    }

    if (eyr === '0') {
      errors.eyr = 'Year is required';
    }

    if (cvv.length !== 3) {
      errors.cvv = 'CVV should be 3 characters';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const isFormValid = validateForm();

    if (isFormValid) {
      window.confirm('Are you sure for payment');
      window.alert('Payment Successful');
      navigate('/');
    }
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <div className="container">
            
          <div className="left" >
                        <h3>Billing Adress</h3>

                        <label for="name">Full name  </label><span className="error">{errors.name}</span>
                        <input type="text" name="name" placeholder="Full name" id="name"/> 
                        
                        <label for="email">Email-id</label><span className="error">{errors.email}</span>
                        <input type="text" name="email" placeholder="Email" id="email" />
                        <label for="address">Address</label><span className="error">{errors.address}</span>
                        <input type= "text" name="address" placeholder="Address" id="address" />
                        <label for="city">City</label><span className="error">{errors.city}</span> 
                        <input type="text" name="city" placeholder="Enter city" id="city" />

                        <div className="xtra">

                            <label>
                                State
                                <select id="drop">
                                    <option value="0" selected disabled>---Choose State---</option>
                                    <option value="1">Bihar</option>
                                    <option value="2">Gujarat</option>
                                    <option value="3">Maharashtra</option>
                                    <option value="4">Delhi</option>
                                    <option value="5">Tamil nadu</option>
                                    <option value="6">Assam</option>
                                </select><span className="error">{errors.drop}</span> 
                            </label>

                            <label>
                                Zip-Code
                                <input type="number" name="zip" placeholder="Zip-code" id="zip"/><span className="error">{errors.zip}</span> 
                            </label>
                        </div>
    </div>
            

            
            <div className="right">
                <h3>Paymnent Details</h3>
                

                    Accepted cards
                    <img src="Utilities/visa.jpg" width="50"/>
                    <img src="Utilities/mastercard.webp" width="50"/>
                    <img src="Utilities/sbi.webp" width="50"/>
                    


                    <label for="card">Credit card number</label><span className="error">{errors.card}</span>
                    <input type="number" name="card" placeholder="Enter card numnber" id="card" />
                    <label for="exp">Exp month</label><span className="error">{errors.exp}</span>
                    <input type="number" name="exp" placeholder="Enter month" id="exp" />

                    <div className="xtra">

                        <label>
                            Exp year
                            <select id="eyr">
                                <option value="0" selected disabled>---Choose Year---</option>
                                <option value="1">2020</option>
                                <option value="2">2021</option>
                                <option value="3">2022</option>
                                <option value="4">2023</option>
                                <option value="5">2024</option>
                                <option value="6">2025</option>
                            </select><span className="error">{errors.eyr}</span>
                        </label>

                        <label>
                            CVV

                            <input type="password" name="cvv" placeholder="CVV" id="cvv"/><span className="error">{errors.cvv}</span>

                        </label>            


          </div>
          <input type="submit" name="submit" value="Proceed to Checkout" />
          </div>
          </div>
            <Link to="/home">
          <input type="button" name="submit" value="Cancel" />
        </Link>
        </form>
      </header>
    </div>
  );
}

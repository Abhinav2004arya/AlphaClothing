
import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { kidsProducts } from '../Products/kids';
import './Utilities.css';

export default function Kids() {
  return (
    <div className="main-container body">
      <div className="sidebar">
        <NavLink activeClassName='selected' to="/men">MEN</NavLink>
        <NavLink activeClassName='selected' to="/women">WOMEN</NavLink>
        <NavLink activeClassName='selected' to="/kids">KIDS</NavLink>
        <NavLink activeClassName='selected' to="/living">LIVING</NavLink>
      </div>

      <div className="content">
      </div>
        <div className="main-part">
          {kidsProducts.map((product) => (
            <div key={product.id} className="part">
              <div className="part1">
                <div className="img-box">
                  <img src={product.image} alt="" />
                  <h5>{product.name}</h5>
                  <p>{product.description}</p>
                  <h6>Rs: {product.price}</h6>
                  <Link to="/buy">
                    <button type="button" className="btn btn-danger">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
}

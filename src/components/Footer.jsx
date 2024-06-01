import React from 'react'
import '../Main_Pages/style.css'

export default function Footer() {
  return (
    <div>
        <footer class="footer-distributed">

<div class="footer-left">
    <img src="Utilities/vector.png" class="logo"/>

    <p class="footer-links">
        <Link to="/men">Men</Link>
          
        <Link to="/women">Women</Link>
        
        <Link to="/kids">Kids</Link>
        
        <Link to="/living">Living</Link>
    </p>

    <p class="footer-company-name">Copyright &copy; 2021 Alpha Clothing All rights reserved</p>
</div>

<div class="footer-center">
    <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Rajkot</span>
            Gujarat</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+91 74**9**258</p>
    </div>
    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="#">xyz@gmail.com</a></p>
    </div>
</div>
<div class="footer-right">
    <p class="footer-company-about">
        <span>About the company</span>
        Alpha clothing is the best website for clothing accros the internet where you can get your most personallinzed clothes.
        This website is made by <mark>Abhinav arya</mark>
    </p>
    <div class="footer-icons">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-youtube"></i></a>
    </div>
</div>
</footer>
    </div>
  )
}

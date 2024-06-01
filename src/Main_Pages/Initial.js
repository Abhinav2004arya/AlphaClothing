import React from 'react'
import { Link,useNavigate } from 'react-router-dom'


const linkStyle = {
  textDecoration: "none",
  color: 'aliceblue'
};
export default function Initial() {
  function prohibit(e){
    if (!e.target.matches('#login')) {
      e.preventDefault();
      window.alert("Login to continue");
    }
   }



  return (
    <div >
      <nav className="navbar navbar-expand-md navbar-light bg-dark n1" >
            <Link className="navbar-brand" to="/" onClick={prohibit}>
                 <img src="Utilities/vector.png" className="logo"  alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent" onClick={prohibit}>
                <ul className="navbar-nav mr-auto">
                    
                    <li className="nav-item dropdown categories active">
                    <Link   style={linkStyle}>Men</Link>
                          
                      </li>
                    <li className="nav-item dropdown categories">
                    <Link style={linkStyle}>Women</Link>
                          
                      </li>
                    <li className="nav-item dropdown categories">
                        <Link  style={linkStyle}>Kids</Link>
                          
                      </li>
                    <li className="nav-item dropdown categories">
                    <Link style={linkStyle}>Living</Link>
                        
                      </li> 
                </ul>
                
                <form className='log' >
                    
                <Link to="/login"><input type="button" id="login" className='button' value="Login/Sign Up"/></Link>
                    
               
               
                </form>
                
                
                    
            </div>
        </nav>
     <div class="m1" onClick={prohibit}>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg " class="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </button>
              </div>
        </div>
        <div onClick={prohibit}>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-BigTicketBrands-Sectionheader.jpg"class="m1"   />
            <div class="brands " >
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png" class="brandImg"/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/331d0d67-95de-4e58-b774-add891464af01690773011037-Calvin_Klein.png"  class="brandImg"/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/437645a4-988c-4f53-aff3-b1fdb34938481690773011106-FCUK.png" class="brandImg"/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/2/805eeb23-ec17-4b50-b798-1244133c02041690955797245-image_png_1993656242.png" class="brandImg"/> 
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png" class="brandImg"/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d521c019-8fcd-4f36-a56f-7a1b9095e2661690773010958-Antony_Morato.png" class="brandImg"/>
            </div>

        </div>
        <div onClick={prohibit}>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-TodaysTopHits-Sectionheader.jpg" class="m1"/>
            <div class="brands" >
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/9/27/91ba6f01-8b03-42ea-a56b-f7b1ae9955821695813688671-unnamed--18-.png"  class="brandImg"/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/9/26/845f5ff3-ea20-4b4a-9054-6bea864971291695728676810-image_png_28699550.png" class="brandImg"/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/9/23/ae8b7bc0-8d33-49b6-a27a-cd603cedf7db1695482096735-image_png1772110962.png" class="brandImg"/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/9/22/ac252347-7082-4716-b008-3a1a37cf89641695381651437-image_png_1793986078.png" class="brandImg"/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/9/27/ce64c71e-65c2-46fd-be0a-7024216cb8541695795383910-image_png_1413216380.png" class="brandImg"/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/9/22/801521ae-0867-45f5-b187-b7de6da1b5fa1695381521158-image_jpeg_75093811.jpg" class="brandImg"/>
            </div>
        </div>
        <footer class="footer-distributed">

<div class="footer-left">
    <img src="Utilities/vector.png" class="logo"/>

    <p class="footer-links" onClick={prohibit}>
        <a href="MCargos.html">Men</a>
        |
        <a href="Saree.html">Women</a>
        |
        <a href="Kshirt.html">Kids</a>
        |
        <a href="Sofa.html">Living</a>
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
        <p><a href="#">aryaabhinav219@gmail.com</a></p>
    </div>
</div>
<div class="footer-right">
    <p class="footer-company-about">
        <span>About the company</span>
        Alpha clothing is the best website for clothing accros the internet where you can get your most personallinzed clothes.
        This website is made by <mark>Abhinav arya</mark>
    </p>
    <div class="footer-icons">
        <a href="https://www.facebook.com" target = "_blank" ><i class="fa fa-facebook"></i></a>  
        <a href="https://www.instagram.com/harsh_kumar739/?hl=en" target = "_blank" ><i class="fa fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/abhinav-arya-40a484254/" target="_blank"><i class="fa fa-linkedin"></i></a>
        <a href="https://www.x.com" target = "_blank" ><i class="fa fa-twitter"></i></a>
        <a href="https://www.youtube.com" target = "_blank" ><i class="fa fa-youtube"></i></a>
    </div>
</div>
</footer>
        </div>
  )
}

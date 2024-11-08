import React from 'react'
import "./Footer.css";
import Images from '../../Images';
import Logo from '../Logo/Logo';


function Footer() {
  return (
    <div className='footer'> 
    
    <div className='box-logo'><Logo/></div>

    <div className='contentImageBox'>
    <div className="flex-box box">
    <div className='heading-footer-text'><a href="#"><h2>Why Us</h2></a></div>

      <div>
        <ul>
          <li></li>
          <li><a href="#">Our Approach</a></li>
          <li><a href="#">Market Research</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Enterprise</a></li>
          <li><a href="#">For Start-Ups</a></li>
        </ul>
      </div>
      
    </div>
    <div className="flex-box box">
    <div className='heading-footer-text'><a href="#"><h2>Products</h2></a></div>

    <div>
        <ul>
          <li><a href="#">ASO Tools</a></li>
          <li><a href="#">App Intelligence</a></li>
          <li><a href="#">Market Intelligence</a></li>
          <li><a href="#">Ad Intelligence</a></li>
          <li><a href="#">API</a></li>
        </ul>
      </div>
    </div>

    <div className="flex-box box">
    <div className='heading-footer-text'><a href="#"><h2>Resources</h2></a></div>

    <div>
        <ul>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Tutorials</a></li>
          <li><a href="#">Documentations</a></li>
          <li><a href="#">Case Studies</a></li>
        </ul>
      </div>
    </div>
    <div className="flex-box box">
    <div className='heading-footer-text'><a href="#"><h2>About Us</h2></a></div>

    <div>
        <ul>
          <li><a href="#">Who We Are?</a></li>
          <li><a href="#">Newsroom</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Collaborations</a></li>
        </ul>
      </div>
    </div>
    <div className="flex-box box">
    <div className='heading-footer-text'><a href="#"><h2>Support</h2></a></div>

    <div>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Help Centre</a></li>
          <li><a href="#">Manage Cookies</a></li>
        </ul>
      </div>
    </div>
    <div className="flex-box box">
    <div className='heading-footer-text'><a href="#"><h2>Legal</h2></a></div>

    <div>
        <ul>
          <li><a href="#">Terms of Services</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    </div>
   
    <div className=" box-8 ">
        <div className='copy-right'>2023-Neocosmicx. All Rights Reserved.</div>

        <div className='social-media-icon'>
        <div className='facebook'><a href="#"></a><img className='insta ' src={Images.facebook} alt="facebook" /></div>
        <div><a href="#"></a><img className='insta' src={Images.instagram} alt="instagram" /></div>
        <div><a href="#"></a><img className='insta ' src={Images.twitter} alt="twitter" /></div>
        <div><a href="#"></a><img className='insta' src={Images.linkedin} alt="linkedin" /></div>
        <div><a href="#"></a><img className='insta ' src={Images.github} alt="github" /></div>

        </div>
       
    </div>



    </div>
  );
}

export default Footer
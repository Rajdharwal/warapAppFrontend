import React from 'react'
import Images from '../../Images';
import "./Logo.css";
function Logo() {
  return (
 <div className='logoDiv'>
        <div className='logo'><img src={Images.logo}  alt="" /></div>
        <div className='logoText'><img src={Images.wrapApp} alt="" /></div>
    </div>
  
    );
   
}

export default Logo
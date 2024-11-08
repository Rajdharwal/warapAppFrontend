import React from 'react'
import './Tools.css';
import Images from '../../Images';
import Logo from '../Logo/Logo';
import SignIn from '../SignIn/SignIn';
import CreateAccount from '../CreateAccount/CreateAccount';
import DemoButton from '../DemoButton/DemoButton';
import NavBar from '../NavBar/NavBar';
import GetInTouch from '../GetInTouch/GetInTouch';
import Footer from '../Footer/Footer';

function Tools() {
  return (
    <>
<section className='nav '>
<NavBar/>
</section>
<section className='Aboutus-text'>
 <div className='about-div'>
    Tools
    </div>

</section>

<section className='section-margin1 section2-top-margin'>
<div className='text-div'>To take advantage of new growth opportunities, discover which markets are expanding quickly and which categories are seeing the most downloads.</div>
<div className='section2-buttons'>
    <a href="#">lats go</a>
</div>
</section>
<section >
      <div className='wave'>
        <img src={Images.wave} alt="" />
       
      </div>
    </section>
<section className='section-8'>
  <GetInTouch/>
</section>

<section className='section-9'>
<Footer/>
</section>
    </>
  )
}

export default Tools



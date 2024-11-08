import React from 'react';
import './About.css';
import Images from '../../Images';
import Logo from '../Logo/Logo';
import SignIn from '../SignIn/SignIn';
import CreateAccount from '../CreateAccount/CreateAccount';
import DemoButton from '../DemoButton/DemoButton';
import NavBar from '../NavBar/NavBar';
import GetInTouch from '../GetInTouch/GetInTouch';
import Footer from '../Footer/Footer';

function About() {
  return (
    <>
<section className='nav '>
<NavBar/>
</section>
<section className='Aboutus-text'>
 <div className='about-div'>
    About Us
    </div>

</section>

<section className='section-margin1 section2-top-margin'>
<div className='text-div'>To take advantage of new growth opportunities, discover which markets are expanding quickly and which categories are seeing the most downloads.</div>
<div className='section2-buttons'>
    <DemoButton/>
    <CreateAccount/>
</div>
</section>
<section >
      <div className='wave'>
        <img src={Images.wave} alt="" />
       
      </div>
    </section>
    <section className='section-margin1 section2-top-margin' id='howsectin'>
        <div className='how ' >How we do it?</div>
<div className='text-div '>To take advantage of new growth opportunities, discover which markets are expanding quickly and which categories are seeing the most downloads.</div>

</section  >

<section className='section-margin1 current-stats'>
  
<div className='stats' >
    <div className='stats-white'><img src={Images.stats} alt="stats" /></div>
</div>

    <div className='stats-div'>
        
        <div className='stats-text'>Current stats of the product</div>
<div className='flow-chart'>
        <div className='curve-lines'>
          

  <div className='first-line'>
  <div className='curvline'></div>
  <div className='demo'>
  <div className='dot'></div>
  <div><DemoButton/></div>
  </div>

  </div>
  <div className='first-line'>
  <div className='curvline'></div>

  <div className='demo'>
  <div className='dot'></div>
  <DemoButton/>
  </div>
  </div>
  <div className='first-line'>
  <div className='curvline '></div>

  <div className='demo'>
  <div className='dot'></div>
  <DemoButton/>
  </div>
  
  </div>








</div>

  


</div>  
        
</div>


</section>

<section className='section-margin1 section2-top-margin' id='section-7'>
        <div className='how' >Feel Safe with our incredible Data science Guide</div>
<div className='text-div '>To take advantage of new growth opportunities, discover which markets are expanding quickly and which categories are seeing the most downloads.</div>

</section  >
<section className='section-margin1 section2-top-margin' id='button'>
  <div className='button-4'>
  <a className='btn-1' href="#">Real Time Data</a>
  <a className='btn-2' href="#">Advanced Analytics</a>
  <a className='btn-3' href="#">Powerful Integrations</a>
  <a className='btn-4' href="#">Real Time Data</a>
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

export default About



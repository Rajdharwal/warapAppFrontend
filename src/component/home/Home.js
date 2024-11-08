import React from 'react'
import './home.css'
import Images from '../../Images';
import SignIn from '../SignIn/SignIn';
import Logo from '../Logo/Logo';
import CreateAccount from '../CreateAccount/CreateAccount';
import DemoButton from '../DemoButton/DemoButton'
import GetInTouch from '../GetInTouch/GetInTouch';
import Footer from '../Footer/Footer';



function Home() {
  return (
    <>

    <section className='nav '>
      <nav className='nav-bar'>
        <div className='logoDiv'>
      <Logo/>
      </div >

      <div className='menu-div'>
        <SignIn/>
      <div className='menu-bar'>
      <div class="line-1"></div>
      <div class="line-2"></div>
      <div class="line-3"></div>
      </div>
      
      </div>
      

      </nav>

    </section>

    <section className="section-margin account">
      <div className='create-account'>
      <div className='home-text'>Increase App Growth With Warp Apps.</div>
      <div className='create-account'><CreateAccount/></div>
      <div className='demo'><DemoButton/></div>
      
      </div>
    </section>

    <section >
      <div className='wave'>
        <img src={Images.wave} alt="" />
      </div>

      <div className='section-margin dash-board'><img src={Images.dashboard} alt="dashboard" /></div> 

    </section>

    <section className='section-margin  features-text'>
      <div>
      <div className='text'>Increase your app’s ranking with
our powerful features</div>

      </div>
    </section>

    <section className='section-margin features-text'>
    <div className='features'>pagination</div>


    </section>

    <section className='section-margin imgage-content'>
      <div className='analysis'>
        <div className='analysis-content'>
          <div className='content-1'>Gain insights with our
advanced analytics</div>
          <div className='content-2'>To take advantage of new growth opportunities, discover which markets are expanding quickly and which categories are seeing the most downloads.</div>
        </div>
        <div className='analysis-imge'><img src={Images.analysis} alt="" /></div>

      </div>

    </section>
    <section className='section-margin imgage-content'>
      <div className='analysis'>
      <div className='analysis-imge'><img src={Images.uplift} alt="" /></div>

        <div className='analysis-content'>
          <div className='content-1 uplift-text1'>Uplift your app searches& Organic installs</div>
          <div className='content-2 uplift-text2'>To improve your app’s visibility and encourage organic downloads, find new keyword opportunities, research your rivals, and monitor your keyword rankings.</div>
        </div>

      </div>

    </section>
    <section className='section-margin imgage-content'>
      <div className='analysis'>
        <div className='analysis-content'>
          <div className='content-1'>Streamline Reporting with Our Automated <br /> API Integration</div>
          <div className='content-2'>Create customised ASO and <br /> performance dashboards using <br /> your data by easily exporting it and integrating it with your preferred business intelligence tools.        </div>

      </div>
      <div className='analysis-imge'><img src={Images.apiintegration} alt="" /></div>

      </div>

    </section>

    <section className='getintouch' >
    <GetInTouch/>
    </section>
    <section className='getintouch foot'>
     <Footer/>
    </section>
</>
 );}
export default Home
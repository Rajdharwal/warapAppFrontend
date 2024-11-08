import React from 'react';
import './NavBar.css';
import '../../Images/index';
import SignIn from '../SignIn/SignIn';
import Logo from '../Logo/Logo';
import DemoButton from '../DemoButton/DemoButton';
import CreateAccount from '../CreateAccount/CreateAccount';


function NavBar() {
  return (
    <>
    <section className='nav '>
      <nav className='nav-bar'>
        <div className='logoDiv'>
      <Logo/>
      </div >

      <div className='menu-div'>
        <DemoButton/>
        <CreateAccount/>
        <SignIn/>
      <div className='menu-bar'>
      <div class="line-1"></div>
      <div class="line-2"></div>
      <div class="line-3"></div>
      </div>
      
      </div>
      

      </nav>

    </section>
    </>
  );
}

export default NavBar
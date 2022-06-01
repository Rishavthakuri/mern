import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return <div>
    <nav>
      <div className='nav-wrapper green'>
        <Link to='/' className='brand-logo right'>
          <img src="logo192.png" />
        </Link>
        <ul className='left'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/aboutus'>About</Link>
          </li>
          <li>
            <Link to='/contactus'>Contact us</Link>
          </li>
          <li>
            <Link to='/notices'>Notices</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>;
};

export default Footer;
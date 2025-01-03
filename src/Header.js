// src/components/Header.js
import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className="header">
      <div className="profile">
       
        <span className="profile-name"><span>Bulg</span>Thoughts</span>
      </div>
      <nav className="nav-links">
      <Link to='/poemexplore'>Poems</Link>     
     <Link to='/knowledgebase'>Learn</Link>
      <Link to='/contact'>Connect</Link>  
      <Link to='/writingspace'>Writing Space</Link>
       </nav>
      <Link to='/registrationform' ><button className="join-button">Join Us</button></Link>
    </header>
  );
};

export default Header;

// src/components/Hero.js
import React from "react";
import Video from './Untitled design (3).mp4'
const Home = () => {
  return (
    <>   
     <div className="hero">
     <video 
          className="hero-video" 
          autoPlay 
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       <div className="hero-para"><p>share your<span>thoughts</span>  to eternity...</p></div>
    </div>
    </>

  );
};

export default Home;

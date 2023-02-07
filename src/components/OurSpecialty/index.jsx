import React from "react";
import "./index.css";
import logo from "../../assets/JTTribesLogo.png";
import image from "../../assets/JERS-Tokn.png";

const OurSpecialty = () => {
  return (
    <div>
      <div className='specialty-top'>Our Specialty</div>
      <div className='specialty-top-image-holder'>
        <img src={image} alt='img' className='specialty-top-image' />
      </div>
      <div className='specialty-bottom'>
        <div className='specialty-card'>
          <div className='specialty-card-image'>
            <img src={logo} alt='img' className='specialty-card-image' />
          </div>
          <div className='specialty-card-title'>Huge Collection</div>
          <div className='specialty-card-text'>
            High Quality Rendered Equally Affordable Artwork
          </div>
        </div>
        <div className='specialty-card'>
          <div className='specialty-card-image'>
            <img src={logo} alt='img' className='specialty-card-image' />
          </div>
          <div className='specialty-card-title'>High Quality</div>
          <div className='specialty-card-text'>
            Learning, researching, studying the crypto market daily
          </div>
        </div>
        <div className='specialty-card'>
          <div className='specialty-card-image'>
            <img src={logo} alt='img' className='specialty-card-image' />
          </div>
          <div className='specialty-card-title'>Top Resource</div>
          <div className='specialty-card-text'>
            The immersive world of NFTs with all its collectors projects
          </div>
        </div>
        <div className='specialty-card'>
          <div className='specialty-card-image'>
            <img src={logo} alt='img' className='specialty-card-image' />
          </div>
          <div className='specialty-card-title'>Big Community</div>
          <div className='specialty-card-text'>
            Slow natural community growth with lounge club
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpecialty;

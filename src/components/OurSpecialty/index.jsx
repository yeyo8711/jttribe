import React, { useState } from "react";
import "./index.css";
import logo from "../../assets/JTTribesLogo.png";
import image from "../../assets/JERS-Tokn.png";

const OurSpecialty = () => {
  const [animated, setAnimated] = useState(0);
  return (
    <div>
      <div className={`specialty-top`} id='jtt'>
        Our Specialty
      </div>
      <div className='specialty-top-image-holder'>
        <img src={image} alt='img' className='specialty-top-image' />
      </div>
      <div className='specialty-bottom'>
        <div
          className={`specialty-card ${
            animated === 1 ? "shadow-drop-2-center " : ""
          }`}
          onMouseEnter={() => setAnimated(1)}
          onMouseLeave={() => setAnimated(0)}>
          <div className='specialty-card-image'>
            <img src={logo} alt='img' className='specialty-card-image' />
          </div>
          <div className='specialty-card-title'>Huge Collection</div>
          <div className='specialty-card-text'>
            High Quality Rendered Equally Affordable Artwork
          </div>
        </div>
        <div
          className={`specialty-card ${
            animated === 2 ? "shadow-drop-2-center " : ""
          }`}
          onMouseEnter={() => setAnimated(2)}
          onMouseLeave={() => setAnimated(0)}>
          <div className='specialty-card-image'>
            <img src={logo} alt='img' className='specialty-card-image' />
          </div>
          <div className='specialty-card-title'>High Quality</div>
          <div className='specialty-card-text'>
            Learning, researching, studying the crypto market daily
          </div>
        </div>
        <div
          className={`specialty-card ${
            animated === 3 ? "shadow-drop-2-center " : ""
          }`}
          onMouseEnter={() => setAnimated(3)}
          onMouseLeave={() => setAnimated(0)}>
          <div className='specialty-card-image'>
            <img src={logo} alt='img' className='specialty-card-image' />
          </div>
          <div className='specialty-card-title'>Top Resource</div>
          <div className='specialty-card-text'>
            The immersive world of NFTs with all its collectors projects
          </div>
        </div>
        <div
          className={`specialty-card ${
            animated === 4 ? "shadow-drop-2-center " : ""
          }`}
          onMouseEnter={() => setAnimated(4)}
          onMouseLeave={() => setAnimated(0)}>
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

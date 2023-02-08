import React from "react";
import "./index.css";
import image from "../../assets/presale.jpeg";

const AboutUs = () => {
  return (
    <div className='aboutus' id='about'>
      <div className='aboutus-left'>
        <div className='aboutus-images'>
          <div className='aboutus-image-holder'>
            <img src={image} alt='' className='aboutus-image' />
          </div>
          <div>
            <img src={image} alt='' className='aboutus-image' />
          </div>

          <div className='aboutus-image-holder'>
            <div>
              <img src={image} alt='' className='aboutus-image' />
            </div>
            <div>
              <img src={image} alt='' className='aboutus-image' />
            </div>
          </div>
        </div>
      </div>
      <div className='aboutus-right'>
        <div className='aboutus-title text-focus-in'>About Us: JT-Tribe</div>

        <div className='aboutus-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. <br />
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. <br />
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </div>

        <div>
          <button className='aboutus-btn'>View On Opensea</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

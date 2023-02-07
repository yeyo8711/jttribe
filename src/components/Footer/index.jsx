import React from "react";
import "./index.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div>
      <div className='footer-title'>
        Join our community and get early access
      </div>
      <div className='footer-icon-holder'>
        <div className='footer-icon'>
          <SocialIcon network='instagram' />
        </div>
        <div>
          <SocialIcon network='facebook' />
        </div>
        <div>
          <SocialIcon network='twitter' />
        </div>
        <div>
          <SocialIcon network='discord' />
        </div>
      </div>
    </div>
  );
};

export default Footer;

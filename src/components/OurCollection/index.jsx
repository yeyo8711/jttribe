import React from "react";
import "./index.css";
import gif from "../../assets/gorilla.gif";

const OurCollection = () => {
  return (
    <div className='ourcollection' id='collection'>
      <div className='ourcollection-title'>Our Collection</div>
      <div className='ourcollection-image-holder'>
        <img src={gif} alt='img' className='ourcollection-img' />

        <img src={gif} alt='img' className='ourcollection-img' />

        <img src={gif} alt='img' className='ourcollection-img' />

        <img src={gif} alt='img' className='ourcollection-img' />

        <img src={gif} alt='img' className='ourcollection-img' />
      </div>
      <div className='ourcollection-image-holder'>
        <img src={gif} alt='img' className='ourcollection-img' />

        <img src={gif} alt='img' className='ourcollection-img' />

        <img src={gif} alt='img' className='ourcollection-img' />

        <img src={gif} alt='img' className='ourcollection-img' />

        <img src={gif} alt='img' className='ourcollection-img' />
      </div>
    </div>
  );
};

export default OurCollection;

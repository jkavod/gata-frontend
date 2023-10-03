import React from 'react';
import './contact.css';
import star_backfiller from '../../assets/star_backfiller.png';

const contact = () => {
  return (
    <div className='contact_container bg-dark'>
      <div className='contact_contain'>
        {/* <img src={star_backfiller} alt="" className="left_img" id='mobile_star_backfiller' /> */}
        <h1 className='text-4xl text-white text-center' id='h1'>
          Get in Touch <span className='font-bold'>With Us</span>
        </h1>
        <div className='fillers'>
          <div className='input'>
            <input type='text' placeholder='Enter Your Name' />
            <input type='text' placeholder='Enter Your Email Address' />
          </div>
          <div className='input_message'>
            <input type='text' placeholder='Type Your Message Here...' className='message' />
          </div>
          <div className='submit_btn'>
            <a href='#' className='submit text-dark'>
              Submit
            </a>
          </div>
        </div>
        {/* <img src={star_backfiller} alt="" className="rgt_img" id='mobile_star_backfiller' /> */}
      </div>
    </div>
  );
};

export default contact;

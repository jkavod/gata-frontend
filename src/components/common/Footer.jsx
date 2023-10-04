import React from 'react';
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaFacebookF,
  FaTiktok,
  FaTelegram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className='footer p-10 bg-white'>
        <nav>
          <header className='text-gold font-bold uppercase text-lg'>Products</header>
          <a className='link link-hover'>Home</a>
          <a className='link link-hover'>How it Works</a>
        </nav>
        <nav>
          <header className='text-gold font-bold uppercase text-lg'>Company</header>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Terms of Service</a>
        </nav>
        <nav>
          <header className='text-gold font-bold uppercase text-lg'>Legal</header>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Copyright Information</a>
        </nav>
        <nav>
          <header className='text-gold font-bold uppercase text-lg'>Contact Us</header>
          <a className='link link-hover'>FAQs</a>
          <a className='link link-hover'>info@gata.org</a>
        </nav>
      </footer>
      <footer className='footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300'>
        <nav className='md:place-self-center md:justify-self-center'>
          <div className='grid grid-flow-col gap-4'>
            <div className='bg-dark btn btn-circle avatar mx-auto mt-8 p-2'>
              <div className=' w-20 rounded-full'>
                <FaLinkedinIn size={28} className='text-gold' />
              </div>
            </div>
            <div className='bg-dark btn btn-circle avatar mx-auto mt-8 p-2'>
              <div className='w-20 rounded-full'>
                <FaTwitter size={28} className='text-gold' />
              </div>
            </div>
            <div className='bg-dark btn btn-circle avatar mx-auto mt-8 p-2'>
              <div className='w-20 rounded-full'>
                <FaInstagram size={28} className='text-gold' />
              </div>
            </div>
            <div className='bg-dark btn btn-circle avatar mx-auto mt-8 p-2'>
              <div className='w-20 rounded-full'>
                <FaDiscord size={28} className='text-gold' />
              </div>
            </div>
            <div className='bg-dark btn btn-circle avatar mx-auto mt-8 p-2'>
              <div className='w-20 rounded-full'>
                <FaFacebookF size={28} className='text-gold' />
              </div>
            </div>
            <div className='bg-dark btn btn-circle avatar mx-auto mt-8 p-2'>
              <div className='w-20 rounded-full'>
                <FaTiktok size={28} className='text-gold' />
              </div>
            </div>
            <div className='bg-dark btn btn-circle avatar mx-auto mt-8 p-2'>
              <div className='w-20 rounded-full'>
                <FaTelegram size={28} className='text-gold' />
              </div>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export { Footer };

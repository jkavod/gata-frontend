import React from 'react';
import global from '../../../assets/global.svg';
// import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='mt-40'>
      <div className='mt-10'>
        <div className='flex flex-col gap-2 lg:gap-4 text-center'>
          <h1 className='text-3xl font-bold uppercase font-cursive text-gold'>
            Community Owned Decentralized Commerce And
          </h1>
          {/* <h1 className='text-3xl font-bold uppercase font-cursive text-gold'>
            <span className='hidden lg:block'>Global</span>E-Commerce
          </h1> */}
          <h1 className='text-center text-3xl uppercase font-cursive text-white'>Logistics Ecosystem</h1>
          <p className='font-poppins text-dimWhite'>
            An ecosystem for buyers, sellers, and logistics partners in small, medium and large enterprises globally.
          </p>
          <img src={global} className='lg:mt-10 h-80' />
        </div>
      </div>
    </div>
  );
};

export { Hero };

import React from 'react';
import global from '../../../assets/global.svg';
// import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='mt-40'>
      <div className='mt-10'>
        <div className='flex flex-col gap-4 text-center'>
          <h1 className='text-3xl font-bold uppercase font-cursive text-gold'>
            A Global Community Owned
          </h1>
          <h1 className='text-center text-3xl uppercase font-cursive text-white'>Ecosystem</h1>
          <p className='font-poppins text-dimWhite'>
            Ecosystem for buyers, sellers, and logistics <br /> partners in small, medium and large{' '}
            <br /> enterprises.
          </p>
          <img src={global} className='mt-10 h-80' />
        </div>
      </div>
    </div>
  );
};

export { Hero };

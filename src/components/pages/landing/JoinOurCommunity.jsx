import React from 'react';
import solidImage from '../../../assets/solid_cube.svg';
import { motion } from 'framer-motion';

const JoinOurCommunity = () => {
  return (
    <section>
      <div className='flex flex-col items-center mt-20'>
        <h4 className='text-gold font-cursive uppercase text-center md:text-2xl text-xl'>
          Join our community where you can <br /> shop, sell and ship with confidence in a <br />{' '}
          member-owned decentralized <br /> <span className='text-white'>Ecommerce solution</span>
        </h4>
        {/* <motion.img whileHover={{ scale: 1.2 }} src={solidImage} className='mt-0 h-60 w-60' alt='Solid Cube' animate={{scale: [1, 2, 2, 1, 1], rotate: [0, 0, 270, 270, 0], borderRadius: ["20%", "20%", "50%", "50%", "20%"],}} /> */}
        <motion.img
      className='h-80 w-80'
       initial={{ y: -15 }}
       animate={{ y: 15 }}
       transition={{
         type: "smooth",
         repeatType: "mirror",
         duration: 2,
         repeat: Infinity,
       }}
       src={solidImage}
       alt="floater"
    />
        
        <button className='btn bg-gold text-dark font-semibold px-10 py-[11px] ml-10 rounded-lg'>
          Discover Our Solutions
        </button>
      </div>
    </section>
  );
};

export { JoinOurCommunity };

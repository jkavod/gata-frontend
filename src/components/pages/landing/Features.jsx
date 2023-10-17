import React, { useRef } from 'react';
import { keyFeatures } from '../../../utils/constants';
import { motion } from 'framer-motion';

const Features = () => {
  const scrollRef = useRef(null);

  return (
    <section className='my-10'>
      <div className='my-20'>
        <h2 className='text-center text-gold font-cursive text-2xl'>Key Features</h2>
      </div>

      <div className='flex flex-wrap justify-center'>
        {keyFeatures.map((feature) => (
          <div
            key={feature.title}
            className='card w-80 h-96 shadow-xl bg-white m-5 duration-200 hover:scale-105'
          >
            <div className='bg-dark btn btn-circle avatar mx-auto mt-8 p-2'>
              <div ref={scrollRef} className='w-10 rounded-full'>
                <motion.img
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, rotate: [0, 360] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  src={feature.icon}
                />
              </div>
            </div>
            <div className='card-body items-center text-center'>
              <h2 className='card-title font-semibold uppercase'>{feature.title}</h2>
              <p>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Features };

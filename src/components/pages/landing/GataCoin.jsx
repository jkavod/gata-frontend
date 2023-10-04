import React, { useEffect } from 'react';
import gataCoin from '../../../assets/coin.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GataCoin = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: [0.1, 1] });
    }
  }, [controls, inView]);

  return (
    <div>
      <div className='hero min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <motion.img
            ref={ref}
            initial={{ opacity: 0, scale: 0.1 }}
            animate={controls}
            transition={{ duration: 3 }}
            src={gataCoin}
            className='h-96 w-96'
          />
          <div>
            <h1 className='text-4xl font-bold text-gold uppercase'>
              GATA Coin and Membership NFTs
            </h1>
            <p className='py-6'>
              Seamlessly Conduct Transactions with GATA Coin and Unlock Exclusive Community Benefits
              with Membership NFTs.
            </p>
            <button className='btn bg-gold text-white px-16 py-4'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GataCoin };

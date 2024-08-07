import React, { useEffect } from 'react';
import gataCoin from '../../../assets/coin.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const GataCoin = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: [0.1, 1.5] });
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
            transition={{ duration: 4 }}
            src={gataCoin}
            // className='h-[450px] w-[450px]'
          />
          <div>
            <h1 className='text-4xl font-bold text-gold uppercase'>
              GATA Tokenomics
            </h1>
            <p className='py-6 text-[18px] md:text-[26px]'>
              Seamlessly Conduct Transactions with GATA Token and Unlock Exclusive Community Benefits
              with --Membership NFTs.
            </p>
            <Link to='/gata-coin' className='btn bg-gold text-white px-16 py-4'>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GataCoin };

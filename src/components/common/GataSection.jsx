import React, { useEffect } from 'react';
import styles from '../../style';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GataSection = ({ title1, content1, icon1, title2, content2, icon2 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ x: 0, opacity: 1 });
    }
  }, [controls2, inView2]);

  return (
    <section className=''>
      <section id='home' className={`flex sm:flex-row flex-col ${styles.paddingY}`}>
        <div
          className={`flex-1 ${styles.flexStart} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <h1 className='font-poppins font-semibold text-5xl text-gold w-full sm:py-16 py-6'>
            {title1}
          </h1>

          <p
            className={`font-poppins font-normal text-[18px] leading-[30.8px] text-black max-w-[470px] mt-5 sm:py-16 py-6`}
          >
            {content1}
          </p>

          <div className='py-3'>
            <button className='btn bg-gold text-white px-16 py-3'>Learn More</button>
          </div>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <motion.img
            ref={ref}
            initial={{ opacity: 0, x: 300 }}
            animate={controls}
            transition={{ duration: 1.5, repeatType: 'mirror' }}
            src={icon1}
            alt={title1}
            className='w-96 h-96 relative z-[5]'
          />
        </div>
      </section>

      <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} mt-36`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 sm:py-16 py-6`}>
          <h1 className='font-poppins font-semibold text-5xl text-white w-full sm:py-16 py-6'>
            {title2}
          </h1>

          <p className={`${styles.paragraph} max-w-[470px] mt-5 sm:py-16 py-6`}>{content2}</p>

          <div className='py-3'>
            <button className='btn bg-gold text-white px-16 py-3'>Learn More</button>
          </div>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <motion.img
            ref={ref2}
            initial={{ opacity: 0, x: -300 }}
            animate={controls2}
            transition={{ duration: 1.5, repeatType: 'mirror' }}
            src={icon2}
            alt={title2}
            className='sm:w-40 sm:h-40 md:w-96 md:h-96 relative z-[5]'
          />
        </div>
      </section>
    </section>
  );
};

export { GataSection };

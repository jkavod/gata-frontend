import React from 'react'
import solidImage from '../../../assets/solid_cube.svg';
import { motion } from 'framer-motion';
import styles from '../../../style';
import { solutions } from '../../../utils/constants';

const DiscoverOurSolutions = () => {
  return (
    <div>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <div className='pt-10'>
            <motion.img
          className='h-[450px] w-[450px]'
          initial={{ y: -10, scale: 1.5 }}
          animate={{ y: 50, scale: 1.5 }}
          transition={{
            type: 'smooth',
            repeatType: 'mirror',
            duration: 2,
            repeat: Infinity,
          }}
          src={solidImage}
          alt='floater'
        />
            </div>
            <div>
                <h1 className='text-gold font-cursive text-3xl font-bold uppercase text-center'>Discover Our Solutions</h1>
            </div>
            <div className='mb-40 mt-5'>
                <p className={`${styles.paragraph} text-center`}>At GATA Protocol, we are committed to revolutionizing the eCommerce <br /> landscape by leveraging cutting-edge technologies to address trust-<br />related challenges. Our decentralized eCommerce ecosystem incorporates <br /> blockchain, smart contracts, Web3, AI, AR, and VR, all working in harmony to <br /> provide you with a secure and transparent shopping experience. Here's how <br /> we harness the power of these technologies.</p>
            </div>
            <div>
                {
                    solutions.map((item) => (
                        <div className='mb-40'>
                            <h1 className='text-gold text-center font-poppins text-3xl'>{item.title}</h1>
                            <div className='flex flex-wrap justify-around p-5'>
                                {
                                    item.content.map((solution) => (
                                        <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
                                            <h1 className='text-center text-white font-poppins text-lg'>{solution.subtitle}</h1>
                                            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>{solution.content}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export { DiscoverOurSolutions }
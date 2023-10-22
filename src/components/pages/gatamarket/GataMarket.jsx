import React from 'react';
import styles from '../../../style';
import shop from '../../../assets/shop.png';
import { motion } from 'framer-motion';

const GataMarket = () => {
  return (
    <section>
      <div className={`${styles.flexCenter} flex-col mb-10`}>
        <div className='mt-10'>
          <motion.img
            initial={{ opacity: 0, x: 400 }}
            animate={{ x: 0, opacity: 1, scale: 0.7 }}
            transition={{ duration: 2.5 }}
            src={shop}
            alt='GATA MARKET'
            className='relative z-[5]'
          />
        </div>
        <div className='mb-5'>
          <h1 className='text-center text-gold font-poppins text-2xl'>
            GATAMARKET - Decentralised Marketplace
          </h1>
        </div>
        <div className='text-center px-8 lg:px-10'>
          <p className='font-poppins font-normal text-dimWhite'>
            GATAMARKET is not just a marketplace; it's a revolutionary force transforming{' '}
            <br className='hidden lg:block' /> the way products are bought, sold, and delivered
            within the GATA Protocol <br className='hidden lg:block' /> ecosystem. At its core,
            GATAMARKET is the vibrant heartbeat of our <br className='hidden lg:block' />{' '}
            decentralized vision, connecting buyers and sellers directly, eliminating{' '}
            <br className='hidden lg:block' /> intermediaries, and enhancing trust and transparency.
          </p>
        </div>
      </div>

      <div className={`${styles.flexStart} flex-col px-8`}>
        <h1 className='text-gold font-poppins text-3xl mb-10'>Features</h1>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Peer-To-Peer Transactions</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            GATAMARKET empowers buyers and sellers to interact directly, fostering trust,
            efficiency, and seamless communication. Say goodbye to middlemen and their fees.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Smart Contracts</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            We utilize self-executing smart contracts powered by blockchain,ensuring secure and
            automated transactions. Manual interventions and fraud risks become relics of the past.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Decentralized Product Listings</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            Sellers can showcase their products globally through decentralized listings. Accuracy,
            consistency, and transparency are our guiding principles.
          </p>
        </div>
        <div className='mb-10'>
          <h1 className='text-white font-poppins text-lg'>Traceability of Goods</h1>
          <p className='font-poppins text-dimWhite my-3 text-sm'>
            Blockchain's immutability provides end-to-end traceability, allowing buyers to verify
            product origins, authenticity, and journeys. Trust is paramount.
          </p>
        </div>
      </div>

      <div>
        <h1 className='text-gold text-center font-poppins text-3xl my-8'>Benefits For Buyers</h1>
        <div className='flex flex-wrap justify-around p-5'>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>Lower Prices</h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              Eliminating intermediaries means buyers access products directly, potentially
              resulting in lower costs compared to traditional marketplaces.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap justify-around p-5 gap-10'>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>Improved Transparency</h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              Buyers enjoy a transparent view of pricing, shipping costs, and essential information.
              No surprises, just informed choices.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>
              Enhanced Product Quality
            </h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              Transparent supply chain information empowers buyers to make informed decisions,
              ensuring authenticity and quality. Counterfeit concerns? Gone.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className='text-gold text-center font-poppins text-3xl my-8'>Benefits For Sellers</h1>
        <div className='flex flex-wrap justify-around p-5'>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>Reduced Fees</h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              GATAMARKET slashes fees compared to traditional platforms, allowing sellers to retain
              a larger share of their revenue. Your profits, your way.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap justify-around p-5 gap-10'>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>Global Reach</h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              Access a global audience and explore new markets. Whether you're a small business or a
              large enterprise, the world is your marketplace.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center border border-dimWhite rounded-xl p-8 w-[340px] lg:w-96 my-3'>
            <h1 className='text-center text-white font-poppins text-lg'>Increased Trust</h1>
            <p className='text-center font-poppins text-dimWhite my-3 text-sm'>
              Blockchain and decentralized identification methods build a trust-driven environment.
              Establish credibility through verified transactions and positive feedback, building
              lasting trust and loyalty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { GataMarket };

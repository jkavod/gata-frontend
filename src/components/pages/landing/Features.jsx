import React from 'react';
import { keyFeatures } from '../../../utils/constants';
import styles from '../../../style';

const Features = () => {
  return (
    <section className='my-10'>
      <div className='my-20'>
        <h2 className='text-center text-gold font-cursive text-2xl'>Key Features</h2>
      </div>
      <div className={``}>
        <div className='flex flex-wrap justify-center'>
          {keyFeatures.map((feature) => (
            <div key={feature.title} className='card w-80 shadow-xl bg-white m-5'>
              <div className='bg-dark btn btn-circle avatar mx-auto mt-8 p-2'>
                <div className='w-10 rounded-full'>
                  <img src={feature.icon} />
                </div>
              </div>
              <div className='card-body items-center text-center'>
                <h2 className='card-title font-semibold uppercase'>{feature.title}</h2>
                <p>{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Features };

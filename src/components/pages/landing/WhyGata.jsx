import React from 'react';
import { WhyJoinHeaders } from '../../../utils/constants';
// import arrow from '../../../assets/double_arrow.svg';

const WhyGata = () => {
  return (
    <div className='flex flex-col'>
      <div className='py-14'>
        <h1 className='text-center text-gold font-cursive uppercase'>WHY JOIN THE GATA PROTOCOL?</h1>
        <br />
      </div>
      <div>
        {WhyJoinHeaders.map((accordion, index) => (
          <div key={index} className='collapse collapse-arrow bg-[#737373] bg-opacity-20 mb-4'>
            <input type='radio' name='features-accordion' />
            <div className='collapse-title text-white font-light text-xl'>{accordion.title}</div>
            <div className='collapse-content text-dimWhite'>{accordion.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { WhyGata };

import React from 'react';
import globe from '../../../assets/globle.png';
import './home.css';

const ContactUs = () => {
  let form = (
    <form>
      <fieldset>
        <div className='flex flex-col gap-10 md:w-[600px]'>
          <div className='flex flex-row gap-4'>
            <input
              type='text'
              placeholder='Enter Your Name'
              className='input input-bordered w-full bg-[#737373] bg-opacity-20 text-white'
            />
            <input
              type='email'
              placeholder='Enter Your Email Address'
              className='input input-bordered w-full bg-[#737373] bg-opacity-20 text-white'
            />
          </div>
          <div className='grid grid-cols-1'>
            <textarea
              placeholder='Type your Message Here'
              rows={5}
              className='textarea textarea-bordered w-full textarea-lg bg-[#737373] bg-opacity-20 text-white'
            ></textarea>
          </div>
          <div className='text-center'>
            <button className='btn bg-gold text-black px-16 py-4'>Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  );

  return (
    <section className='py-20'>
      <div className='flex flex-col gap-4'>
        <div className='text-center text-white text-2xl'>
          Get in Touch <span className='font-bold'>With Us</span>
        </div>
        <div className='hero contact'>
          <div className='bg-opacity-60'></div>
          <div className='hero-content text-neutral-content'>
            <div className=''>{form}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactUs };

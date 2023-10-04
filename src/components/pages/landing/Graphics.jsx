import React from 'react';
import leftFiller from '../../../assets/left_backfiller.png';
import rightFiller from '../../../assets/right_backfiller.png';
import divider from '../../../assets/divider.png';

const Graphics = () => {
  return (
    <section>
      <div className='my-10 flex justify-between'>
        <div>
          <img src={leftFiller} alt='Left_Filler' className='' />
        </div>
        <div className=''>
          <button className='btn bg-gold text-dark font-semibold px-[76px] py-[11px] rounded-xl uppercase'>
            Buy/Sell
          </button>
        </div>
        <div>
          <img src={rightFiller} alt='Right_Filler' className='' />
        </div>
      </div>
      <div className=''>
        <img src={divider} alt='Star Chart' />
      </div>
    </section>
  );
};

export { Graphics };

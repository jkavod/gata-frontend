import React from 'react'
import { WhyJoinHeaders } from '../../../utils/constants'
import arrow from '../../../assets/double_arrow.svg'

const WhyGata = () => {
  return (
    <div className='flex flex-col'>
        <div className='py-14'>
            <h1 className="text-center text-gold font-cursive uppercase">WHY JOIN GATA PROTOCOL</h1><br/>
        </div>
        <div>
            {
                WhyJoinHeaders.map((header,index) => (
                    <div key={index} className='flex justify-between m-4 bg-[#737373] bg-opacity-20 p-3 rounded-xl'>
                        <h1 className='text-white font-light text-xl'>{header}</h1>
                        <img src={arrow} className='h-5 w-5' />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export { WhyGata }
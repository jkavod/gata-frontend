import React from 'react'
import global from '../../../assets/global.svg'

const Hero = () => {
  return (
    <div>
        <div className="mt-10">
            <div className="flex flex-col gap-4 text-center">
                <h1 className="text-3xl font-bold uppercase font-cursive text-gold">A Global Community Owned Decentralized</h1>
                <h1 className='text-center text-3xl uppercase font-cursive text-white'>Ecosystem</h1>
                <p className="font-poppins text-dimWhite">Ecosystem For Buying, Selling And Logistics For Small, Medium And Large Businesses And <br /> Enterprise Using Advanced Technology</p>
                <img src={global} className='mt-10 h-80' />
            </div>
        </div>
        
    </div>
  )
}

export { Hero }
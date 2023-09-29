import React from 'react'
import solidImage from '../../../assets/solid_cube.svg'

const JoinOurCommunity = () => {
  return (
    <section>
        <div className='flex flex-col items-center mt-20'>
            <h4 className='text-gold font-cursive uppercase text-center md:text-2xl text-xl'>
                Join our community where you can <br /> shop, sell and ship with confidence in a <br /> member-owned decentralized <br /> <span className='text-white'>Ecommerce solution</span>
            </h4>
            <img src={solidImage} alt='Solid Cube' className='mt-0 h-60 w-60' />
            <button className='btn bg-gold text-dark font-semibold px-10 py-[11px] ml-10 rounded-lg'>Discover Our Solutions</button>
        </div>
    </section>
  )
}

export { JoinOurCommunity }
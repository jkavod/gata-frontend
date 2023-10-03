import React from 'react'
import gataCoin from '../../../assets/gata_coin.svg'

const GataCoin = () => {
  return (
    <div>
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={gataCoin} className="" />
    <div>
      <h1 className="text-4xl font-bold text-gold uppercase">GATA Coin and Membership NFTs</h1>
      <p className="py-6">Seamlessly Conduct Transactions with GATA Coin and Unlock Exclusive Community Benefits with Membership NFTs.</p>
      <button className="btn bg-gold text-white px-16 py-4">Learn More</button>
    </div>
  </div>
</div>
    </div>
  )
}

export { GataCoin }
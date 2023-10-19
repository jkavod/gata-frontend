import React, { useEffect } from 'react'
import styles from '../../../style'
import coin from '../../../assets/coin.png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GataCoin = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          controls.start({ opacity: 1, scale: [0.1, 1.2] });
        }
    }, [controls, inView]);

  return (
    <section>
        <div className={`${styles.flexCenter} flex-col mb-10`}>
            <div className='mt-10'>
            <motion.img
                ref={ref}
                initial={{ opacity: 0, scale: 0.1 }}
                animate={controls}
                transition={{ duration: 3 }}
                src={coin}
                alt='GATA COIN'
                className='relative z-[5]'
            />
            </div>
            <div className='mb-5'>
                <h1 className='text-center text-gold font-poppins text-2xl'>$GATA Token and GATA Membership NFT</h1>
            </div>
        </div>

        <div className={`${styles.flexStart} flex-col px-8`}>
        <p className='font-poppins text-dimWhite my-3 text-sm'>$GATA Coin</p>

        <h1 className='text-gold font-poppins text-3xl'>What is a $GATA Coin?</h1>                 
            <div className='mb-10'>
                <p className='font-poppins text-dimWhite my-3 text-sm'>$GATA Coin is the native cryptocurrency of the GATA Protocol Ecosystem. It plays a central role in facilitating transactions and interactions within our decentralized platform. With the power of blockchain technology, $GATA Coin provides security, transparency, and efficiency for various activities across the ecosystem.</p>
            </div>


        <h1 className='text-gold font-poppins text-3xl mb-10'>Use Cases of $GATA Coin</h1>                 
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Transaction Fees</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Use $GATA Coin to pay the Network low Gas fees for transactions.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Purchasing Products</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Use $GATA Coin to buy products and services on the GATAMARKET decentralized eCommerce marketplace.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Logistics And Delivery</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Pay for logistics and delivery services on GATANOW using $GATA Coin.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Governance Participation</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Participate in governance decisions on GGov and earn $GATA Coin for voting or winning bets in the gamified governance platform.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Incentives And Rewards</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Earn $GATA Coin as rewards for contributing to the ecosystem or participating in community activities.</p>
            </div>


            <h1 className='text-gold font-poppins text-3xl mb-10'>How to Get $GATA Coin</h1>
            <p className='font-poppins text-dimWhite my-2 text-sm'>Acquiring $GATA Coins is easy. You can obtain it through:</p>                 
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Exchanges</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Visit supported cryptocurrency exchanges to buy $GATA Coin with other cryptocurrencies or fiat money.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Ecosystem Activities</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Participate in activities within the GATA Protocol Ecosystem to earn $GATA Coin as rewards.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Peer-To-Peer Transactions</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Trade with other community members or partners using $GATA Coin.</p>
            </div>


            <h1 className='text-gold font-poppins text-3xl mb-10'>GATA Membership NFT</h1>     
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>What is a GATA Membership NFT?</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>GATA Membership NFT is your key to unlock exclusive benefits and privileges within the GATA Protocol Ecosystem. It represents your active participation and commitment to our community.</p>
            </div>


            <h1 className='text-gold font-poppins text-3xl mb-10'>Benefits of GATA Membership NFT</h1>                 
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Access To Exclusive Fatures</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Enjoy special features and early access to new developments within the ecosystem.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Community Influence</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Influence ecosystem decisions through participation in governance and discussions.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Networking Opportunities</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Connect with like-minded individuals, entrepreneurs, and enthusiasts in our exclusive Discord and Telegram communities.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Discounts And Rewards</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Receive discounts on platform fees and exclusive rewards.</p>
            </div>


            <h1 className='text-gold font-poppins text-3xl mb-10'>How to Get GATA Membership NFT</h1>
            <p className='font-poppins text-dimWhite my-2 text-sm'>Acquiring a GATA Membership NFT is a prestigious step into our community.</p>                 
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Purchase</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Keep an eye out for GATA Membership NFT sales on our platform or partner marketplaces.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Community Activities</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Participate in ecosystem activities to earn or be rewarded with a GATA Membership NFT.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Engage</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Actively engage in our community, demonstrate commitment, and you might be selected for a GATA Membership NFT grant.</p>
            </div>


            <h1 className='text-gold font-poppins text-3xl mb-10'>The Technology Behind GATA Coin and Membership NFT</h1>
            <p className='font-poppins text-dimWhite my-2 text-sm'>GATA Coin and GATA Membership NFT are built on secure and transparent blockchain technology. We leverage the power of blockchain and smart contracts to ensure.</p>                 
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Security</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'> Transactions and ownership of assets are protected by cryptographic algorithms.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Transparency</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>All transactions and NFT ownership are recorded on the blockchain for public verification.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-white font-poppins text-lg'>Decentralization</h1>
                <p className='font-poppins text-dimWhite my-3 text-sm'>Our ecosystem is powered by decentralized technologies, reducing reliance on intermediaries.</p>
            </div>

            <p className='text-dimWhite font-poppins text-lg font-normal mb-10'>
                At GATA Protocol, we are committed to providing innovative solutions with our native token and membership NFT. Join us in shaping the future of decentralized commerce, governance, and community.
            </p>
            
        </div>
    </section>
  )
}

export { GataCoin }
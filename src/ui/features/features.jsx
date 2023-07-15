import React from 'react'
import './features.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCheckToSlot, faGlobe, faPlaneUp, faShield, faShieldVirus } from '@fortawesome/free-solid-svg-icons';
import star_backfiller from '../../assets/star_backfiller.png'

const features = () => {
    return (
        <div className="bg-dark h-full p-10 overflow-hidden">
            <h1 className='text-gold font-bold text-center my-20 text-3xl'>KEY FEATURES</h1>
            <div className=" bg-dark w-full p-10 overflow-hidden" id='features_container'>
                <div className='features_card' id='features_card w-full p-10'>
                    <img src={star_backfiller} alt="" className='image overflow-hidden' id='star_img' />
                    <div className="card text-center rounded-sm bg-white h-67 w-80 p-10">
                        <div className="icon_border">
                            <FontAwesomeIcon icon={faCheckToSlot} className='icon' />
                        </div>
                        <h2 className='text-dark m-5 font-bold text-lg uppercase'>Ease To Use</h2>
                        <p className='text-dark text-sm font-semibold'>Our platform streamlines the sales and logistics process, eliminating the need for middlemen and reducing transaction costs.</p>
                    </div>
                    <div className="card text-center rounded-sm bg-white h-67 w-80 p-10">
                        <div className="icon_border">
                            <FontAwesomeIcon icon={faGlobe} className='icon' />
                        </div>
                        <h2 className='text-dark m-5 font-bold text-lg uppercase'>GLOBAL BUSINESS COMMUNITY NETWORK</h2>
                        <p className='text-dark text-sm font-semibold'>Connect with potential buyers and sellers from around the world, expanding your reach and opening up new opportunities for growth.</p>
                    </div>
                    <div className="card text-center rounded-sm bg-white h-67 w-80 p-10">
                        <div className="icon_border">
                            <FontAwesomeIcon icon={faShield} className='icon' />
                        </div>
                        <h2 className='text-dark m-5 font-bold text-lg uppercase'>Secured and Trustless Payments Systems</h2>
                        <p className='text-dark text-sm font-semibold'>Conduct transactions with confidence, knowing that your payments are secure and transparent.</p>
                    </div>
                    <div className="card text-center rounded-sm bg-white h-67 w-80 p-10">
                        <div className="icon_border">
                            <FontAwesomeIcon icon={faCartShopping} className='icon' />
                        </div>
                        <h2 className='text-dark m-5 font-bold text-lg uppercase'>EFFICIENT DELIVERY OF GOODS AND SERVICES</h2>
                        <p className='text-dark text-sm font-semibold'>We prioritize getting your products to your customers quickly and reliably.</p>
                    </div>
                    <div className="card text-center rounded-sm bg-white h-67 w-80 p-10">
                        <div className="icon_border">
                            <FontAwesomeIcon icon={faPlaneUp} className='icon' />
                        </div>
                        <h2 className='text-dark m-5 font-bold text-lg uppercase'>Cheaper Transaction Cost</h2>
                        <p className='text-dark text-sm font-semibold'>Save money on fees and commissions by using our decentralized platform.</p>
                    </div>
                    <div className="card text-center rounded-sm bg-white h-67 w-80 p-10">
                        <div className="icon_border">
                            <FontAwesomeIcon icon={faShieldVirus} className='icon' />
                        </div>
                        <h2 className='text-dark m-5 font-bold text-lg uppercase'>Improve Bottom Line</h2>
                        <p className='text-dark text-sm font-semibold'>Streamlining processes and reducing costs can help your business thrive and grow.</p>
                    </div>
                    <img src={star_backfiller} alt="" id='image' className='star_img' />
                </div>
            </div>
        </div>

    )
}

export default features
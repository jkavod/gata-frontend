import React from 'react'
import './footer.css'
import line from '../../assets/line.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faInstagram, faLinkedinIn, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons'

const footer = () => {
    return (
        <div className='footer bg-white'>
            <div className="footer_links">
                <div className="">
                    <h1 className='text-gold font-bold uppercase text-3xl'>Products</h1>
                    <div className="links mt-2">
                        <a href="#" className='text-dark text-lg font-bold'>Home</a>
                        <a href="#" className='text-dark text-lg font-bold'>How it works</a>
                    </div>
                </div>
                <div className="">
                    <h1 className='text-gold font-bold uppercase text-3xl'>Company</h1>
                    <div className="links mt-2">
                        <a href="#" className='text-dark text-lg font-bold'>About</a>
                        <a href="#" className='text-dark text-lg font-bold'>Terms of service</a>
                    </div>
                </div>
                <div className="">
                    <h1 className='text-gold font-bold uppercase text-3xl'>Legal</h1>
                    <div className='links mt-2'>
                        <a href="#" className='text-dark text-lg font-bold'>Privacy policy</a>
                        <a href="#" className='text-dark text-lg font-bold'>Copyright information</a>
                    </div>
                </div>
                <div className="">
                    <h1 className='text-gold font-bold uppercase text-3xl'>Contact us</h1>
                    <div className="links mt-2">
                        <a href="#" className='text-dark text-lg font-bold'>FAQs</a>
                        <a href="#" className='text-dark text-lg font-bold'>info@gataprotocol.org</a>
                    </div>
                </div>
            </div>
            <img src={line} alt="" className='px-20' />
            <div className="socials">
                <div className="social_link">
                    <a href="#">
                        <FontAwesomeIcon icon={faLinkedinIn} className='social_icon' />
                    </a>
                </div>
                <div className="social_link">
                    <a href="#">
                        <FontAwesomeIcon icon={faMedium} className='social_icon' />
                    </a>
                </div>
                <div className="social_link">
                    <a href="#">
                        <FontAwesomeIcon icon={faTwitter} className='social_icon' />
                    </a>
                </div>
                <div className="social_link">
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram} className='social_icon' />
                    </a>
                </div>
                <div className="social_link">
                    <a href="#">
                        <FontAwesomeIcon icon={faDiscord} className='social_icon' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default footer
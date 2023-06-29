import React, { useEffect, useState } from 'react';
import './body.css'
import pentagon from '../../assets/pentagon.png'
import atom_cube from '../../assets/atom_cube.png'
import atom_sphere from '../../assets/atom_sphere.png'
import block_cage from '../../assets/block_cage.png'
import ball_pentagon from '../../assets/ball_pentagon.png'
import box from '../../assets/box.png'
import penta from '../../assets/penta.png'

const body = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const windowHeight = window.innerHeight;
          const rightElements = document.querySelectorAll('.fly-in-right-element');
          const leftElements = document.querySelectorAll('.fly-in-left-element');
    
          rightElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight) {
              element.classList.add('scroll-in');
            } else {
              element.classList.remove('scroll-in');
            }
          });
    
          leftElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight) {
              element.classList.add('scroll-in');
            } else {
              element.classList.remove('scroll-in');
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call handleScroll initially to check visibility on mount
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div>
            <section id='section_background'>
                <div className="body_sec">
                    <div className={`text p-28 fly-in-right-element ${isVisible ? 'scroll-in' : ''}`} id="fly-in-right-element">
                        <h1 className={`text-gold font-bold my-5 text-2xl`}>GATAChain</h1>
                        <p className='text-dark mb-6'>Reshaping the future of eCommerce and the experience of shopping powered by blockchain ledger technology.</p>
                        <a href="#" className='text-dark font-bold py-3 px-20 bg-gold rounded mt-20' id='btn'>Learn More</a>
                    </div>
                    <img src={pentagon} alt="" className={`w-2/5 fly-in-left-element ${isVisible ? 'scroll-in' : ''}`} id="fly-in-left-element" />
                </div>
                <div className="body_sec">
                    <div className={`text p-28 fly-in-right-element ${isVisible ? 'scroll-in' : ''}`} id="fly-in-right-element">
                        <h1 className='text-gold font-bold my-5 text-2xl'>GATA MARKET</h1>
                        <p className='text-white mb-6'>Discover a new era of shopping via a decentralized marketplace that modernizes product and supply chain management.</p>
                        <a href="#" className='text-dark py-3 font-bold px-20 bg-gold rounded mt-20' id='btn'>Learn More</a>
                    </div>
                    <img src={atom_sphere} alt="" className={`w-2/5 fly-in-left-element ${isVisible ? 'scroll-in' : ''}`} id="fly-in-left-element" />
                </div>
            </section>
            <section id='section_background'>
                <div className="body_sec">
                    <div className={`text p-28 fly-in-right-element ${isVisible ? 'scroll-in' : ''}`} id="fly-in-right-element">
                        <h1 className='text-gold font-bold my-5 text-2xl'>GATA Now</h1>
                        <p className='text-dark mb-6'>Explore the next generation "decentralized logistics and delivery service" that seamlessly bridges sellers to buyers.
                        </p>
                        <a href="#" className='text-dark font-bold py-3 px-20 bg-gold rounded mt-20' id='btn'>Learn More</a>
                    </div>
                    <img src={block_cage} alt="" className={`w-2/5 fly-in-left-element ${isVisible ? 'scroll-in' : ''}`} id="fly-in-left-element" />
                </div>
                <div className="body_sec">
                    <div className={`text p-28 fly-in-right-element ${isVisible ? 'scroll-in' : ''}`} id="fly-in-right-element">
                        <h1 className='text-gold font-bold my-5 text-2xl'>GATA BUSINESS NETWORK</h1>
                        <p className='text-white mb-6'>Discover a new era of shopping via a decentralized marketplace that modernizes product and supply chain management.</p>
                        <a href="#" className='text-dark py-3 font-bold px-20 bg-gold rounded mt-20' id='btn'>Learn More</a>
                    </div>
                    <img src={box} alt="" className={`w-2/5 fly-in-left-element ${isVisible ? 'scroll-in' : ''}`} id="fly-in-left-element" />
                </div>
            </section>
            <section id='section_background'>
                <div className="body_sec">
                    <div className={`text p-28 fly-in-right-element ${isVisible ? 'scroll-in' : ''}`} id="fly-in-right-element">
                        <h1 className='text-gold font-bold my-5 text-2xl'>GGOV-EMPOWERING COMMUNITY</h1>
                        <p className='text-dark mb-6'>Reshaping the future of eCommerce and the experience of shopping powered by blockchain ledger technology.</p>
                        <a href="#" className='text-dark font-bold py-3 px-20 bg-gold rounded mt-20' id='btn'>Learn More</a>
                    </div>
                    <img src={ball_pentagon} alt="" className={`w-2/5 fly-in-left-element ${isVisible ? 'scroll-in' : ''}`} id="fly-in-left-element" />
                </div>
                <div className="body_sec">
                    <div className={`text p-28 fly-in-right-element ${isVisible ? 'scroll-in' : ''}`} id="fly-in-right-element">
                        <h1 className='text-gold font-bold my-5 text-2xl'>AI, AR, and VR in dCommerce</h1>
                        <p className='text-white mb-6'>Immerse yourself in the future of shopping experiences with AI, AR, and VR Technologies.</p>
                        <a href="#" className='text-dark py-3 font-bold px-20 bg-gold rounded mt-20' id='btn'>Learn More</a>
                    </div>
                    <img src={atom_cube} alt="" className={`w-2/5 fly-in-left-element ${isVisible ? 'scroll-in' : ''}`} id="fly-in-left-element" />
                </div>
            </section>
            <section id='section' className='bg-white'>
                <div className="body_sec">
                    <div className={`text p-28 fly-in-right-element ${isVisible ? 'scroll-in' : ''}`} id="fly-in-right-element">
                        <h1 className='text-gold font-bold my-5 text-2xl'>GATA Coin and GBN Membership NFT</h1>
                        <p className='text-dark mb-6'>Easily Conduct transactions globally with the $GATA Coin and gain exclusive community benefits as a membership NFT holder.</p>
                        <a href="#" className='text-dark font-bold py-3 px-20 bg-gold rounded mt-20' id='btn'>Learn More</a>
                    </div>
                    <img src={penta} alt="" className={`w-2/5 fly-in-left-element ${isVisible ? 'scroll-in' : ''}`} id="fly-in-left-element" />
                </div>
            </section>
            <div className="bg-gold w-full h-10"></div>
        </div>
    )
}

export default body
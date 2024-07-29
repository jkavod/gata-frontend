import React, { useState, useEffect } from 'react';
import { navbarLinks } from '../../utils/constants';
import logo from '../../assets/gata_logo.png';
import close from '../../assets/close.svg';
import menu from '../../assets/menu.svg';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EconomyMenu } from './EconomyMenu';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>

<div className="navbar bg-dark text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-dark rounded-box w-52">
      {navbarLinks.map((link, index) => (
        <li key={index}>
          <details>
            <summary className='font-poppins font-bold cursor-pointer text-[16px]'>{link.title}</summary>
            <ul className='p-8 bg-dark text-center'>
              {link.menu.map((subLink, index) => (
                <li key={index}>
                  {
                    subLink.menu ? subLink.menu.map((newMenu, index) => (
                      <li key={index}>
                        <details>
                        <summary className='font-poppins font-bold cursor-pointer text-[16px]'>{subLink.title}</summary>
                        <ul>
                          <li><Link to={newMenu.path} className='font-poppins font-bold cursor-pointer text-[16px]'>{newMenu.title}</Link></li>
                        </ul>
                        </details>
                      </li>
                    )) : (<li>
                      <Link className='font-poppins font-bold cursor-pointer text-[16px] text-white' to={subLink.path}>{subLink.title}</Link>
                    </li>)
                  }
                </li>
                ))}
                
            </ul>
          </details>
        </li>
        ))}
        <li><button className='btn bg-gold text-dark font-semibold px-[76px] py-[11px] mt-5 rounded-xl uppercase'>
                Launch
              </button></li>
      </ul>
    </div>
    <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: [1, 0.7] }}
        transition={{ duration: 1.5 }}
      >
        <Link to='/'>
          <img src={logo} alt='GATA Protocol' className='w-[163px] h-[64px] flex-shrink-0' />
        </Link>
      </motion.div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navbarLinks.map((link, index) => (
        <li key={index}>
          <details>
            <summary className='font-poppins font-bold cursor-pointer text-[16px]'>{link.title}</summary>
            <ul className='p-8 bg-dark text-center'>
              {link.menu.map((subLink, index) => (
                <li key={index}>
                  {
                    subLink.menu ? subLink.menu.map((newMenu, index) => (
                      <li key={index}>
                        <details>
                        <summary className='font-poppins font-bold cursor-pointer text-[16px]'>{subLink.title}</summary>
                        <ul>
                          <Link to={newMenu.path} className='font-poppins font-bold cursor-pointer text-[16px]'>{newMenu.title}</Link>
                        </ul>
                        </details>
                      </li>
                    )) : (<li>
                      <Link className='font-poppins font-bold cursor-pointer text-[16px] text-white my-8 p=8' to={subLink.path}>{subLink.title}</Link>
                    </li>)
                  }
                </li>
                ))}
            </ul>
          </details>
        </li>
        ))}
    </ul>
  </div>
  <div className="navbar-end hidden lg:flex">
  <button className='btn bg-gold text-dark font-semibold px-[76px] py-[11px] mt-5 rounded-xl uppercase'>
                Launch
              </button>
  </div>
</div>


    
    </div>
  );
};

export default Navbar;

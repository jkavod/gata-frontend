import React, { useState, useEffect } from 'react';
import { navbarLinks } from '../../utils/constants';
import logo from '../../assets/gata_logo.png';
import close from '../../assets/close.svg';
import menu from '../../assets/menu.svg';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: [1, 0.7] }}
        transition={{ duration: 1.5 }}
      >
        <Link to='/'>
          <img src={logo} alt='GATA Protocol' className='w-[163px] h-[64px] flex-shrink-0' />
        </Link>
      </motion.div>

      <ul className='list-none md:flex hidden justify-center items-center flex-1'>
        {navbarLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-bold cursor-pointer text-[16px] ${
              index === navbarLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white`}
          >
            <a href={`/`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <button className='btn bg-gold text-dark font-semibold px-[76px] py-[11px] ml-10 rounded-xl uppercase md:flex hidden'>
        Launch
      </button>

      {/* mobile navbar view */}

      <div className='md:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='nav menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-dark absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navbarLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-bold cursor-pointer text-[16px] ${
                  index === navbarLinks.length - 1 ? 'mr-0' : 'mb-5'
                } text-white`}
              >
                <a href={`/`}>{nav.title}</a>
              </li>
            ))}
            <li>
              <button className='btn bg-gold text-dark font-semibold px-[76px] py-[11px] mt-5 rounded-xl uppercase'>
                Launch
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

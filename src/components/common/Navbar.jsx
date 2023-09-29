import React, { useState } from 'react'
import { navbarLinks } from '../../utils/constants'
import logo from '../../assets/gata_logo.png'
import close from '../../assets/close.svg'
import menu from '../../assets/menu.svg'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='GATA Protocol' className='w-[163px] h-[64px] flex-shrink-0' />

      <ul className='list-none md:flex hidden justify-end items-center flex-1'>
        {navbarLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-bold uppercase cursor-pointer text-[16px] ${
              index === navbarLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <button className='btn bg-gold text-dark font-semibold px-[76px] py-[11px] ml-10 rounded-xl uppercase md:flex hidden'>Launch</button>

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
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li>
            <button className='btn bg-gold text-dark font-semibold px-[76px] py-[11px] mt-5 rounded-xl uppercase'>Launch</button>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import Logo from '../../../public/LOGO.png'

const NavLinks: React.FC<{ isMenuOpen: boolean, toggleMenu: () => void }> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div id="collapseMenu" className="lg:flex lg:items-center">
      {isMenuOpen && (
        <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3' onClick={toggleMenu}>
          <X className="w-4 h-4 fill-black" />
        </button>
      )}
      <ul className={`lg:flex lg:gap-x-10 ${isMenuOpen ? 'block' : 'hidden'} max-lg:fixed max-lg:bg-[#151d20] max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}>
        <li className='mb-6 hidden max-lg:block'>
          <a href="javascript:void(0)"><img src={Logo} alt="logo"
              className='w-36 items-center' />
          </a>
        </li>
        {['Home', 'Programs', 'Mental Health', 'Substance Abuse', 'Provider', 'About'].map((link, index) => (
          <li
            key={index}
            className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
            <NavLink
              to={`/${link.toLowerCase().replace(/ /g, '-')}`}
              className={({ isActive }) => isActive ? 'text-white block text-[15px] font-medium lg:after:absolute lg:after:bg-white lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300' : 'text-white block text-[15px] font-medium'}
              onClick={toggleMenu}
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
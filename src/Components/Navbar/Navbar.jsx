import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center w-11/12 mx-auto py-4">

        {/* Mobile Menu Icon */}
        <div className='lg:hidden'>
          {
            isOpen ?
              <X size={28} className="cursor-pointer" onClick={() => setIsOpen(false)} /> :
              <Menu size={28} className="cursor-pointer" onClick={() => setIsOpen(true)} />
          }

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="absolute left-0 top-16 w-full bg-white shadow-lg border-t">
              <ul className="flex flex-col items-center gap-4 py-6 text-lg font-medium">
                <li><a className="hover:text-blue-600 transition" href="#">Home</a></li>
                <li><a className="hover:text-blue-600 transition" href="#">About</a></li>
                <li><a className="hover:text-blue-600 transition" href="#">Contact</a></li>
              </ul>
            </div>
          )}
        </div>

        {/* Logo */}
        <div>
          <a className='font-bold text-2xl text-blue-600 tracking-wide' href="#">
            Logo
          </a>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex'>
          <ul className='flex items-center gap-8 text-lg font-medium'>
            <li><a className="hover:text-blue-600 transition" href="/">Home</a></li>
            <li><a className="hover:text-blue-600 transition" href="about">About</a></li>
            <li><a className="hover:text-blue-600 transition" href="contact">Contact</a></li>
          </ul>
        </div>

        {/* Button */}
        <div>
          <button className='px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300'>
            LogOut
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
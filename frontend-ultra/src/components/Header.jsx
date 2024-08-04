import React, { useState } from 'react';
import { GrCubes } from "react-icons/gr";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
   
  const auth = localStorage.getItem('signUp'); 
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear(); 

    navigate('/signUp'); 
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-[#101522] w-full sticky top-0 z-10'>
    
          <div className='flex justify-between items-center  h-20 px-5 sm:px-10 md:px-20'>
            <div className='flex items-center cursor-pointer'>
              <GrCubes className='text-white text-4xl md:text-7xl' />
              <h1 className='text-white text-2xl md:text-4xl'>ULTRA</h1>
            </div>
            <div className='hidden md:flex text-white gap-5 lg:gap-10 text-lg lg:text-2xl items-center cursor-pointer'>
            {
        auth ?
            <p className='hidden'>hello</p>
              :
              <p className='hidden'>hello</p>
          }
          <Link to='/' className='hover:border-b-2 pb-1 lg:pb-3'>Home</Link>
              <Link to='/service' className='hover:border-b-2 pb-1 lg:pb-3'>Service</Link>
              <Link to='/products' className='hover:border-b-2 pb-1 lg:pb-3'>Products</Link>
              <Link to='/pricing' className='hover:border-b-2 pb-1 lg:pb-3'>Pricing</Link>
              <Link to='/signUp' onClick={(e) => { e.preventDefault(); logout(); }} className='bg-[#4B59F7] p-1 lg:text-lg lg:py-1 lg:px-2 rounded-md'>Logout</Link>
            </div>
            <div className='md:hidden flex items-center'>
              <button onClick={toggleMenu}>
                {isOpen ? <FaTimes className='text-white text-3xl' /> : <FaBars className='text-white text-3xl' />}
              </button>
            </div>
          </div>
      
     
    </div>
  );
};

export default Header;
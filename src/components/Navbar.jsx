import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import logo from '../assets/amarislogo.png'
import { PiShoppingCartSimple } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {

  const {user} = useAuth()
  const userId = user?.id;
    
  // You can use this in your header/navbar component to show the cart count
  const [cartCount, setCartCount] = useState(0);

  const fetchCartCount = async () => {
    try {
      const res = await axios.get(`${URL}/api/cart/count/${userId}`);
      console.log("count",res.data.count)
      setCartCount(res.data.count);
    } catch (error) {
      console.error('Error fetching cart count:', error);
      return 0;
    }
  };

  console.log("cartCount",cartCount)

  useEffect(() => {
      fetchCartCount()
  }, [])

  

  

  return (
    <div className='px-4 py-4 bg-white shadow-xl'>
      <div className='max-w-[1500px] mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <img src={logo} alt="Amaris Logo" className='h-12 w-auto' />
        </div>

        {/* Navigation Links */}
        <div className='hidden md:flex space-x-8'>
          <Link to='/' className='font-medium text-lg hover:text-gray-600'>Home</Link>
          <Link to='/products' className='font-medium text-lg hover:text-gray-600'>Products</Link>
          <Link to='/about' className='font-medium text-lg hover:text-gray-600'>About</Link>
          <Link to='/blogs' className='font-medium text-lg hover:text-gray-600'>Blog</Link>
          <Link to='/contact' className='font-medium text-lg hover:text-gray-600'>Contact</Link>
          <Link to='/login' className='bg-black font-medium text-lg text-white px-4 rounded-md'>Login</Link>
        </div>

        {/* Icons */}
        <div className='flex items-center space-x-6'>
          <IoSearchOutline size={23} className='cursor-pointer hover:text-gray-600' />
          <div className='relative'>
            <PiShoppingCartSimple size={23} className='cursor-pointer hover:text-gray-600' />
            <span className="bg-red-600 absolute top-0 right-0 -mt-2 -mr-2 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {cartCount}
            </span>
          </div>
          <Link to={'/profile'}><GoPerson size={23} className='cursor-pointer hover:text-gray-600' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
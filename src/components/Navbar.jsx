// import React,{useContext} from 'react'
// import { RiArrowDownSFill } from "react-icons/ri";
// import { CartContext } from '../context/CartContext';
// import { Link } from 'react-router-dom';
// import logo from '../assets/amarislogo.png'
// import { PiShoppingCartSimple } from "react-icons/pi";
// import { GoPerson } from "react-icons/go";
// import { IoSearchOutline } from "react-icons/io5";


// const Navbar = () => {

//   const { getTotalQuantity } = useContext(CartContext);


//   return (
//     <div className='px-9 py-4 bg-white justify-evenly flex items-center shadow-xl'>
//         <p className='text-4xl '><img src={logo} /></p>

//         <div className='flex gap-x-9'>
//         <Link to={'/'}><p className='hidden md:block font-medium text-lg'>Home</p></Link>
//         <Link to={'/products'}><p className='hidden md:block font-medium text-lg'>Products</p></Link>
//         <Link to={'/about'}><p className='hidden md:block font-medium text-lg'>About</p></Link>
//         <Link to={'/blogs'}><p className='hidden md:block font-medium text-lg'>Blog</p></Link>
//         <Link to={'/contact'}><p className='hidden md:block font-medium text-lg'>Giving</p></Link>
//         <Link to={'/contact'}><p className='hidden md:block font-medium text-lg'>Contact</p></Link>

//         <div className='flex gap-x-6'>
//         <p><IoSearchOutline size={23} /></p>  
//         <p><PiShoppingCartSimple size={23}/></p>
//         <p><GoPerson size={23} /></p>
//         {/* <p className="bg-red-600 absolute text-white rounded-full h-6 w-6 flex items-center justify-center ml-9 mt-[-30px] z-50 font-thin">
//               {getTotalQuantity()}
//             </p> */}
//             </div>
// {/* 
//         <div className='flex items-center gap-x-2'>
//        <Link to={'/login'}></Link>
//         </div> */}



//         </div>
        

//     </div>
//   )
// }

// export default Navbar

import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import logo from '../assets/amarislogo.png'
import { PiShoppingCartSimple } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const { getTotalQuantity } = useContext(CartContext);

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
          <Link to='/contact' className='font-medium text-lg hover:text-gray-600'>Giving</Link>
          <Link to='/contact' className='font-medium text-lg hover:text-gray-600'>Contact</Link>
        </div>

        {/* Icons */}
        <div className='flex items-center space-x-6'>
          <IoSearchOutline size={23} className='cursor-pointer hover:text-gray-600' />
          <div className='relative'>
            <PiShoppingCartSimple size={23} className='cursor-pointer hover:text-gray-600' />
            <span className="bg-red-600 absolute top-0 right-0 -mt-2 -mr-2 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
              {getTotalQuantity()}
            </span>
          </div>
          <GoPerson size={23} className='cursor-pointer hover:text-gray-600' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
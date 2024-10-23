import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/amarislogo.png'

const Footer = () => {
  return (
    <div className='bg-white py-12'>

        <div className='flex justify-around'>

            <div className='flex flex-col gap-y-48'>
            <div className='flex-shrink-0'>
          <img src={logo} alt="Amaris Logo" className='h-12 w-auto' />
        </div>
            <p>Copyright © 2024 Amaris. All rights reserved.</p>
            </div>


 

            <div className='text-center'>
            <div className='text-xl font-medium text-[#565656] text-left'>Categories</div>

            <Link to={'/about'}><p className='mt-5 text-left'>Search</p></Link>
            <Link to={'/contact'}><p className='mt-5 text-left'>Terms of Service</p></Link>
            <Link to={'/blogs'}><p className='mt-5 text-left'>Refund Policy</p></Link>
   
            </div>

            <div className='text-center'>
            <div className='text-xl font-medium text-[#565656] text-left'>Products</div>

            <p className='mt-5 text-left'>Motivational Calender</p>
            <p className='mt-5 text-left'>Self Care Cards</p>
            <p className='mt-5 text-left'>Gratitude Journals</p>
            <p className='mt-5 text-left'>Colouring Books</p>
            </div>
     
        </div>


  <div className='mb-3'></div>
    </div>
  )
}

export default Footer
import React from 'react'
import { RiArrowDownSFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='px-9 py-4 bg-blue-200 justify-between flex items-center'>
        <p className='text-4xl '>Amaris</p>

        <div className='flex gap-x-9'>
        <p className='font-semibold text-blue-800 text-xl'>Products</p>

        <p className='font-semibold text-blue-800 text-xl'>Reviews</p>

        <p className='font-semibold text-blue-800 text-xl'>About us</p>

        <div className='flex items-center gap-x-2'>
        <p className='font-semibold text-blue-800 text-xl'>Henry Eyo</p>
        <RiArrowDownSFill size={23}/>
        </div>



        </div>
        
        {/* #1A3E5C (Dark Blue)
#3A5A40 (Deep Green)
#D4AF37 (Gold)
#F5F5DC (Cream)
#800020 (Burgundy) */}
    </div>
  )
}

export default Navbar
import React from 'react'
import Navbar from '../components/Navbar'
import grocery from '../assets/grocery.jpg'
import { IoRibbonOutline } from "react-icons/io5";
import { RiEBike2Line } from "react-icons/ri";
import { TbPackages } from "react-icons/tb";
import { fetchProducts,fetchCategories } from '../useProducts';
import { useQuery } from '@tanstack/react-query';


const Home = () => {


const {
  isPending:isPendingProducts, 
  isError: isErrorProducts,
   data:products,
  error: errorProducts
} = useQuery({
  queryKey:['products'], 
  queryFn:fetchProducts
});


const {isPending:isPendingCategories,
   isError:isErrorCategories,
    data: categories, 
    error:errorCategories
   } = useQuery({queryKey:['categories'], 
    queryFn:fetchCategories})


    if (isPendingProducts || isPendingCategories) return <p>Loading products...</p>;
    if (isErrorProducts || isErrorCategories) return <p> Error loading products</p>
    


  return (
    <>
    <Navbar/>
    <div className='w-full h-screen'>
 

        <div className='bg-white py-[120px]'>

            <div className='px-64 flex justify-between items-center'>
            <div>
            <p className='text-red-600 text-4xl font-bold'> Elevate your well</p>
            <p className='text-red-600 text-4xl font-bold'> being and become your best self</p>
            <p className='max-w-[450px] text-xl mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <button className='bg-red-600 px-4 py-2 text-white text-xl rounded-2xl mt-4'>Order Now</button>
            </div>

        <img src={grocery} alt='grocery' className='object-cover h-[300px] w-[500px]'/>
        </div>
        </div>


{/* 
categories section */}
<div className='grid grid-cols-2 gap-9 content-evenly px-64'>

  {categories.map(data => (
    <div key={data.id} className='bg-blue-100 px-[50px] py-[100px]'>
  <p className='text-5xl text-blue-700 font-semibold text-center'>{data.name}</p>

  <div className='flex justify-center'>
  <img src={data?.imageUrl} className='object-cover w-[250px] h-[200px] py-[10px]'/>
  </div>
</div>

  ))}

</div>

<div className='flex justify-center gap-x-12 mt-12'>
{products.map(d => (
 <div key={d.id} className='border rounded-2xl px-2 py-2'>
 <img src={d?.imageUrl ? d?.imageUrl : "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"} className='object-cover w-[250px] h-[200px] py-[10px]'/>
 <p className='text-xl font-semibold mt-2'>{d.title}</p>
 <div className='flex gap-4 mt-2'><p>{d.price}</p>  <p className='bg-green-500 text-white rounded-md px-3 font-semibold'>30% off</p></div>
 <p className='text-lg  mt-2'>{d.description.slice(0,28)+". . ."}</p>
 </div>
))}
  {/* <div className='border rounded-2xl px-2 py-2'>
  <img src={grocery} className='object-cover w-[250px] py-[10px]'/>
  <p className='text-xl font-semibold mt-2'>Harry Potter </p>
  <div className='flex gap-4 mt-2'><p>5000</p>  <p className='bg-green-500 text-white rounded-md px-3 font-semibold'>30% off</p></div>
  <p className='text-lg  mt-2'>This is a book of  Harry Potter. . .</p>
  </div>

  <div className='border rounded-2xl px-2 py-2'>
  <img src={grocery} className='object-cover w-[250px] py-[10px]'/>
  <p className='text-xl font-semibold mt-2'>Harry Potter </p>
  <div className='flex gap-4 mt-2'><p>5000</p>  <p className='bg-green-500 text-white rounded-md px-3 font-semibold'>30% off</p></div>
  <p className='text-lg  mt-2'>This is a book of  Harry Potter. . .</p>
  </div> */}

</div>

<div className='mb-9'></div>


{/* Why Choose Amaris ? */}
<div className='bg-[#F5F5DC] py-[30px]'>
        <p className='text-4xl font-bold text-center text-red-600'>Why Choose Amaris?</p>


<div className='flex justify-evenly items-center mt-9'>
    <div>
        <IoRibbonOutline size={40} />
        <p className='text-xl font-semibold text-red-600'>Quality Excellence</p>
        <p className='max-w-[250px] text-lg mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div>
        <TbPackages size={40}/>
        <p className='text-xl font-semibold text-red-600'>Numerous Options</p>
        <p className='max-w-[250px] text-lg mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div>
        <RiEBike2Line size={40} />
        <p className='text-xl font-semibold text-red-600'>Reliable delivery</p>
        <p className='max-w-[250px] text-lg mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        </div>
        </div>



    </div>
    {/* #1A3E5C (Dark Blue)
#3A5A40 (Deep Green)
#D4AF37 (Gold)
#F5F5DC (Cream)
#800020 (Burgundy) */}
    </>
  )
}

export default Home
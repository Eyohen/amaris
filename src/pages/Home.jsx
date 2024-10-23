// import React, {useEffect, useState} from 'react'
// import Navbar from '../components/Navbar'
// import grocery from '../assets/grocery.jpg'
// import model from '../assets/model.jpeg'
// import { IoRibbonOutline } from "react-icons/io5";
// import { RiEBike2Line } from "react-icons/ri";
// import { TbPackages } from "react-icons/tb";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import ProductCard from '../components/ProductCard';
// import { Link } from 'react-router-dom';
// import CategoryCard from '../components/CategoryCard';
// import { CartContext } from '../context/CartContext';
// import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
// import BlogCard from '../components/BlogCard';
// import { URL } from '../url';
// import axios from 'axios';
// import Footer from '../components/Footer';
// import blogsubscribe from '../assets/blogsubscribe.png'
// import hero from '../assets/hero.png'
// import hero3 from '../assets/hero3.png'
// import { FaMinus } from "react-icons/fa";
// import { TiMinusOutline } from "react-icons/ti";


// const slides = [
//   {
//     title: "",
//     subtitle: "",
//     text: "",
//     image: hero
//   },
//   {
//     title: "",
//     subtitle: "Surprise her with a gift that lasts beyond the moment",
//     text:"",
//     image: hero3
//   },

// ];



// const Home = () => {

// const [posts, setPost] = useState([])
// const [products, setProduct] = useState([])
// const [categories, setCategory] = useState([])

// const [currentIndex, setCurrentIndex] = useState(0)
// const [currentIndex2, setCurrentIndex2] = useState(0)

// const [currentSlide, setCurrentSlide] = useState(0);
//   // const [menuOpen, setMenuOpen] = useState(false);


//   const nextSlides = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlides = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   }

//   // Auto-advance slides
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlides();
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(timer);
//   }, [currentSlide]);

//   const divStyle = {
//     // width: '100vw',
//     height: '80vh',
//     backgroundImage: `url(${hero})`,
//     backgroundSize: 'cover', // Adjusts the background image to cover the whole container
//     backgroundPosition: 'center', // Centers the background image
//     backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
//     paddingTop: '74px',
//     // filter: 'brightness(0.5)'
//   }




// const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 3 >= products.length ? 0 : prevIndex + 3
//     );
//   };

// const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 3 < 0 ? Math.max(products.length - 3, 0 ) : prevIndex - 3
//     );
//   };

//   const nextSlide2 = () => {
//     setCurrentIndex2((prevIndex) =>
//       prevIndex + 3 >= products.length ? 0 : prevIndex + 3
//     );
//   };

// const prevSlide2 = () => {
//     setCurrentIndex2((prevIndex) =>
//       prevIndex - 3 < 0 ? Math.max(products.length - 3, 0 ) : prevIndex - 3
//     );
//   };

//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(`${URL}/api/categories`)
//         console.log(res.data);
//         setCategory(res.data);
//       } catch (error){
//         console.log(error)
//       }
//     }

//     useEffect(() => {
//       fetchCategories();
//     },[])

//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get(`${URL}/api/products`)
//         console.log(res.data);
//         setProduct(res.data);
//       } catch (error){
//         console.log(error)
//       }
//     }

//     useEffect(() => {
//       fetchProducts();
//     },[])


//     const fetchPosts = async () => {
//       try {
//         const res = await axios.get(`${URL}/api/posts`)
//         console.log(res.data);
//         setPost(res.data);
//       } catch (error){
//         console.log(error)
//       }
//     }

//     useEffect(() => {
//       fetchPosts();
//     },[])


//   return (
//     <>
//  <div className='h-screen overflow-x-hidden font-light'>
//     <Navbar/>
//         {/* <div className='bg-white py-[120px]'>
//             <div className='px-4 md:px-64 flex flex-col md:flex-row  justify-between items-center'>
//             <div>
//             <p className='text-[#1F2A44] text-6xl'>EMPOWER</p>
//             <p className='text-[#1F2A44] text-6xl font-bold'>ELEVATE,<span className='text-[#1F2A44] text-6xl font-normal'>THRIVE</span></p>
//             <p className='max-w-[450px] text-[#FFB300] text-3xl font-normal mt-4'>Self-care, wellness, and personal development products.</p>
//             <p className='text-[#1F2A44] text-lg mt-2 max-w-[450px] font-'>Find Clarity and Focus with our premium self-care solutions designed for empowerment.</p>
//             <button className='bg-[#1F2A44] px-4 py-2 text-white font-thin text-xl rounded-3xl mt-4 flex items-center gap-x-9'>Shop Now<div className='bg-white rounded-full p-1 flex justify-center items-center'><IoIosArrowRoundForward color='#1F2A44'/></div></button>
//             <p className='mt-4'>Join the Amaris Amour <span className='underline text-blue-500'>Community!</span></p>
//             </div>

//         <img src={hero2} alt='model' className='object-cover h-[400px] w-[240px] rounded-2xl'/>
//         </div>
//         </div> */}
//           <div className="relative h-[50vh] md:h-[70vh]">


// {slides?.map((slide, index) => (
//   <div
//     key={index}
//     className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
//       index === currentSlide ? 'opacity-100' : 'opacity-0'
//     }`}
//     style={{
//       backgroundImage: `url(${slide.image})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center'
//     }}
//   >
      
//          <div className="absolute flex justify-center right-0 inset-0 bg-black bg-opacity-50 px-4 md:pr-[50px] pt-16 md:pt-[170px] text-white">
//           <div>
// <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-thin mb-2 sm:mb-3 md:mb-4 max-w-[800px]">{slide.subtitle}</p>
// <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 max-w-[800px]">{slide.text}</h2>
// </div>

// </div>
//   </div>
  
// ))}
// {/* <button
//   onClick={prevSlides}
//   className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-50"
// >
//   <FaChevronLeft className="text-2xl" />
// </button>
// <button
//   onClick={nextSlides}
//   className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-50"
// >
//   <FaChevronRight className="text-2xl" />
// </button> */}

// <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-x-6 justify-center z-50'>
//   {slides.map((_, index) => (
//     <button
//       key={index}
//       onClick={() => goToSlide(index)}
//       className="focus:outline-none"
//     >
//       {index === currentSlide ? (
//         <FaMinus size={30} color='white' />
//       ) : (
//         <TiMinusOutline size={30} color='white' className="opacity-50 hover:opacity-100 transition-opacity" />
//       )}
//     </button>
//   ))}
// </div>
// </div>


// {/* 
// categories section */}
// <div>
//   <p className='text-center text-[#1F2A44] text-5xl mt-9'>Our Product Range</p>
//   <p className='text-gray-500 text-lg text-center mt-2'>Discover our stunning products designed to uplift and empower every woman, helping you feel your absolute best!</p>
// <div className='grid md:grid-cols-4 content-evenly px-4 md:px-64 mt-12'>
//   {categories.map(data => (
//     <Link to={`/categories/${data.id}`}>
//       <div key={data.id}>
//         <CategoryCard name={data.name} imageUrl={data?.imageUrl}/>
//     </div>
//     </Link>
//   ))}

// </div>
// </div>

// <p className='text-center mt-32 text-xl text-gray-400'>SHOP OUR BEST SELLERS</p>
// <p className='text-center text-2xl text-gray-600'>Unlock your inner beauty with our self care collection</p>

// <div className='relative flex justify-center items-center mt-12'>
//   <button 
//     onClick={prevSlide} 
//     className='absolute left-64 bg-gray-200 p-2 rounded-full'
//   >
//     <FaChevronLeft/>
//   </button>

// <div className='flex flex-col md:flex-row gap-y-5 justify-center gap-x-12 mt-12 overflow-hidden'>
// {products?.slice(currentIndex, currentIndex + 3)?.map(d => (

//   <Link to={`/productdetails/${d.id}`}>
//     <div key={d.id}>
//     <ProductCard title={d.title} imageUrl={d?.imageUrl} price={d.price} discount={d?.discount} description={d.description}/>
//     </div>
//     </Link>
// ))}
// </div>

// <button 
//     onClick={nextSlide} 
//     className='absolute right-64 bg-gray-200 p-2 rounded-full'
//   >
//        <FaChevronRight/>
//   </button>
// </div>

// <div className='mb-9'></div>

//         {/* <p className='text-center font-bold text-[27px] mt-12'>Read Latest Articles</p>
// <p className='text-gray-500 w-[320px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

// <div className='relative flex justify-center items-center mt-12'>
//   <button 
//     onClick={prevSlide2} 
//     className='absolute left-[220px] bg-gray-200 p-2 rounded-full'
//   >
//     <FaChevronLeft/>
//   </button>


// <div className='flex flex-col md:flex-row gap-y-5 gap-x-[45px] justify-center mt-12'>
//   {posts.slice(currentIndex2, currentIndex2 + 3).map((p) => (
//     <Link to={`/blogdetails/${p.id}`}>
//        <div key={p.id}>
//       <BlogCard title={p.title} heading={p.heading} imageUrl={p?.imageUrl} text={p.text} createdAt={p.createdAt} />
//       </div>
//       </Link>
//     ))}
// </div>

// <button 
//     onClick={nextSlide2} 
//     className='absolute right-[220px] bg-gray-200 p-2 rounded-full'
//   >
//        <FaChevronRight/>
//   </button>
// </div> */}

// <div className='bg-[#E1F5FF]'>

//   <div className='flex justify-center items-center gap-x-48'>

//     <div>
//   <p className='text-[#1F2A44] text-5xl font-normal'>Subscribe to our Blog</p>
//   <p className='text-[#1F2A44] font-normal text-lg'>Want to Start Your Journey to Self-Care and Elevate Your Well-Being?</p>

//   <div className='border border-purple-500 bg-white rounded-full py-3 px-2 mt-9 shadow-2xl'>
//     <div className='flex justify-center gap-x-24 items-center'>
//           <div><p className='text-gray-500 font-light'>Enter your e-mail</p></div>
//           <div className='bg-[#1F2A44] p-3 rounded-full'>
//             <IoIosArrowRoundForward color='white' size={20}/>
//           </div>
//           </div>

//   </div>
//   </div>
//   <img src={blogsubscribe} />
//   </div>
//   </div>




// <div className='mb-12'></div>
// <Footer/>

//     </div>

//     </>
//   )
// }

// export default Home

import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import grocery from '../assets/grocery.jpg'
import model from '../assets/model.jpeg'
import { IoRibbonOutline } from "react-icons/io5"
import { RiEBike2Line } from "react-icons/ri"
import { TbPackages } from "react-icons/tb"
import { IoIosArrowRoundForward } from "react-icons/io"
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import { CartContext } from '../context/CartContext'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6"
import BlogCard from '../components/BlogCard'
import { URL } from '../url'
import axios from 'axios'
import Footer from '../components/Footer'
import blogsubscribe from '../assets/blogsubscribe.png'
import hero from '../assets/hero.png'
import hero3 from '../assets/hero3.png'
import { FaMinus } from "react-icons/fa"
import { TiMinusOutline } from "react-icons/ti"

const slides = [
  {
    title: "",
    subtitle: "",
    text: "",
    image: hero
  },
  {
    title: "",
    subtitle: "Surprise her with a gift that lasts beyond the moment",
    text: "",
    image: hero3
  },
]

const Home = () => {
  const [posts, setPost] = useState([])
  const [products, setProduct] = useState([])
  const [categories, setCategory] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentIndex2, setCurrentIndex2] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlides = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlides = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlides()
    }, 3000)

    return () => clearInterval(timer)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + (window.innerWidth >= 768 ? 3 : 1) >= products.length 
        ? 0 
        : prevIndex + (window.innerWidth >= 768 ? 3 : 1)
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - (window.innerWidth >= 768 ? 3 : 1) < 0 
        ? Math.max(products.length - (window.innerWidth >= 768 ? 3 : 1), 0) 
        : prevIndex - (window.innerWidth >= 768 ? 3 : 1)
    )
  }

  const nextSlide2 = () => {
    setCurrentIndex2((prevIndex) =>
      prevIndex + (window.innerWidth >= 768 ? 3 : 1) >= products.length 
        ? 0 
        : prevIndex + (window.innerWidth >= 768 ? 3 : 1)
    )
  }

  const prevSlide2 = () => {
    setCurrentIndex2((prevIndex) =>
      prevIndex - (window.innerWidth >= 768 ? 3 : 1) < 0 
        ? Math.max(products.length - (window.innerWidth >= 768 ? 3 : 1), 0) 
        : prevIndex - (window.innerWidth >= 768 ? 3 : 1)
    )
  }

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${URL}/api/categories`)
      setCategory(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${URL}/api/products`)
      setProduct(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${URL}/api/posts`)
      setPost(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()
    fetchProducts()
    fetchPosts()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden font-light">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        {slides?.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 px-4 md:px-12 lg:px-20 flex items-center">
              <div className="w-full max-w-6xl mx-auto">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-white font-thin mb-4 max-w-[800px]">
                  {slide.subtitle}
                </p>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 max-w-[800px]">
                  {slide.text}
                </h2>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-x-4 justify-center z-50">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="focus:outline-none"
            >
              {index === currentSlide ? (
                <FaMinus size={24} color="white" />
              ) : (
                <TiMinusOutline size={24} color="white" className="opacity-50 hover:opacity-100 transition-opacity" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="px-4 md:px-12 lg:px-20 py-12">
        <h2 className="text-center text-[#1F2A44] text-3xl md:text-5xl mb-4">Our Product Range</h2>
        <p className="text-gray-500 text-base md:text-lg text-center mb-12 max-w-2xl mx-auto">
          Discover our stunning products designed to uplift and empower every woman, helping you feel your absolute best!
        </p>
        
        <div></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(data => (
            <Link key={data.id} to={`/categories/${data.id}`}>
              <CategoryCard name={data.name} imageUrl={data?.imageUrl}/>
            </Link>
          ))}
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="px-4 md:px-12 lg:px-20 py-12 bg-gray-50">
        <p className="text-center text-lg md:text-xl text-gray-400 mb-2">SHOP OUR BEST SELLERS</p>
        <p className="text-center text-xl md:text-2xl text-gray-600 mb-12">
          Unlock your inner beauty with our self care collection
        </p>

        <div className="relative max-w-6xl mx-auto">
          <button 
            onClick={prevSlide} 
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
          >
            <FaChevronLeft/>
          </button>

          <div className="flex flex-col md:flex-row gap-6 justify-center overflow-hidden">
            {products?.slice(currentIndex, currentIndex + (window.innerWidth >= 768 ? 3 : 1))?.map(d => (
              <Link key={d.id} to={`/productdetails/${d.id}`}>
                <ProductCard 
                  title={d.title} 
                  imageUrl={d?.imageUrl} 
                  price={d.price} 
                  discount={d?.discount} 
                  description={d.description}
                />
              </Link>
            ))}
          </div>

          <button 
            onClick={nextSlide} 
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
          >
            <FaChevronRight/>
          </button>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-[#E1F5FF] px-4 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20 max-w-6xl mx-auto">
          <div className="text-center md:text-left max-w-lg">
            <h2 className="text-[#1F2A44] text-3xl md:text-4xl lg:text-5xl font-normal mb-4">
              Subscribe to our Blog
            </h2>
            <p className="text-[#1F2A44] text-base md:text-lg mb-8">
              Want to Start Your Journey to Self-Care and Elevate Your Well-Being?
            </p>

            <div className="relative max-w-md mx-auto md:mx-0">
              <input 
                type="email" 
                placeholder="Enter your e-mail" 
                className="w-full px-6 py-3 rounded-full border border-purple-500 bg-white shadow-lg focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1F2A44] p-3 rounded-full">
                <IoIosArrowRoundForward color="white" size={20}/>
              </button>
            </div>
          </div>
          
          <img 
            src={blogsubscribe} 
            alt="Subscribe" 
            className="max-w-full md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Home
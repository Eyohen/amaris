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
import PopUp from '../components/PopUp'

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
const [showPopup, setShowPopup] = useState(false)

useEffect(() => {
  //show popup after a short delay when component mounts
  const timer = setTimeout(() => {
    setShowPopup(true)
  }, 2000)

  return () => setTimeout(timer)
}, [])

// check if user has dismissed popup before
useEffect(() => {
  const hasSeenPopup = localStorage.getItem('hasSeenPopup')
  if (!hasSeenPopup){
    setShowPopup(true)
  }
}, [])

const handleClosePopup = () => {
  setShowPopup(false)
  // store that the user has seen the pop up
  localStorage.setItem('hasSeenPopup', 'true')
}

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


      <div className="relative h-[50vh] md:h-[70vh] w-full">



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

      </div>

      {/* Popup */}
      {showPopup && <PopUp onClose={handleClosePopup} />}




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
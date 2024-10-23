// import React, { useState, useEffect, useContext } from 'react'
// import gallery from '../assets/grocery.jpg'
// import Navbar from '../components/Navbar'
// import { FaStar } from "react-icons/fa";
// import { FiMinus,FiPlus } from "react-icons/fi";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import {Link, useNavigate, useParams } from 'react-router-dom'
// import { URL } from '../url';
// import axios from 'axios';
// import { CartContext } from '../context/CartContext';
// import { useAuth } from '../context/AuthContext';
// import { GoStar } from "react-icons/go";
// import toast, { Toaster } from "react-hot-toast";
// import { AiFillAndroid } from "react-icons/ai";


// const ProductDetails = () => {
// const {user, logout} = useAuth();
// const productId = useParams().id
// const { addToCart } = useContext(CartContext);
// const navigate = useNavigate()
// const [isLoading, setIsLoading] = useState(true)
// const [isLoading2, setIsLoading2] = useState(false)
// const [quantity, setQuantity] = useState(1)
// const [title, setTitle] = useState('')
// const [imageUrl, setImageUrl] = useState('')
// const [description, setDescription] = useState('')
// const [price, setPrice] = useState('')
// const [discount, setDiscount] = useState('')
// const [size, setSize]= useState('')
// const [color, setColor]= useState('')
// const [product, setProduct] = useState({});

// const [rating, setRating] = useState(0);
// const [comment, setComment] = useState('');
// const [hover, setHover] = useState(null);
// const [message, setMessage] = useState('');

// const [first, setFirst] = useState(false)
// const [second, setSecond] = useState(false)
// const [third, setThird] = useState(false)
// const [fourth, setFourth] = useState(false)
// const [fifth, setFifth] = useState(false)


// const handleFirst = () => {
//     setFirst(true)
//     setSecond(false)
//     setThird(false)
//     setFourth(false)
//     setFifth(false)
//     setRating(1)
// }
// const handleSecond = () => {
//     setSecond(true)
//     setFirst(false)
//     setThird(false)
//     setFourth(false)
//     setFifth(false)
//     setRating(2)
// }
// const handleThird = () => {
//     setThird(true)
//     setFirst(false)
//     setSecond(false)
//     setFourth(false)
//     setFifth(false)
//     setRating(3)
// }
// const handleFourth = () => {
//     setFourth(true)
//     setFirst(false)
//     setSecond(false)
//     setThird(false)
//     setFifth(false)
//     setRating(4)
// }
// const handleFifth = () => {
//     setFifth(true)
//     setFirst(false)
//     setSecond(false)
//     setThird(false)
//     setFourth(false)
//     setRating(5)
// }

// const toastStyles = {
//   success: {

//     duration: 10000,
//     // style: {
//     //   background: '#4CAF50',
//     //   color: 'white',
//     //   fontWeight: 'bold',
//     // },
//     iconTheme: {
//       primary: 'white',
//       secondary: '#4CAF50',
//     },
//       style: {

//                background: "green",
//                color: "whitesmoke",
//                icon: <AiFillAndroid background-color="whitesmoke" color='green' />,
//              },
//   },
//   error: {
//     duration: 10000,
//     style: {
//       background: '#F44336',
//       color: 'white',
//       fontWeight: 'bold',
//     },
//     iconTheme: {
//       primary: 'white',
//       secondary: '#F44336',
//     },
//   },
// };

// console.log("User details",user)

// const email = user?.email;

// const fname = user?.fname;

// const userId = user?.id;

// const handleIncrease = () => {
//      setQuantity(quantity + 1)
// }

// const handleDecrease = () => {
//     setQuantity(quantity > 1 ? quantity - 1 : 1)
// }

// const fetchProducts = async() => {
//     setIsLoading(true)
//     try {
//         const res = await axios.get(`${URL}/api/products/${productId}`)
//         console.log(res.data)
//         setTitle(res.data.title)
//         setDescription(res.data.description)
//         setImageUrl(res.data.imageUrl)
//         setPrice(res.data.price)
//         setDiscount(res.data.discount)
//         setSize(res.data.size)
//         setColor(res.data.color)
//         setProduct(res.data)
//     }
//     catch(err) {
//         console.log(err)
//     }
//     finally {
//         setIsLoading(false);
//     }
// }

// useEffect(() => {
//     fetchProducts()
// }, [productId]);

// const handleAddToCart = () => {
//     addToCart(product, quantity);
//     navigate('/cart');
// }

// const handleBuyNow = async () => {
//     setIsLoading2(true)

//     if (!product || !product.id || quantity <= 0) {
//         alert('Invalid product or quantity');
//         toast.error('Invalid product or quantity');
//         return;
//     }
//     try{
//         const totalPrice = product.price * quantity;

//         const res = await axios.post(`${URL}/api/purchases/create`,{
//             quantity: quantity,
//             productId:product.id,
//             // price: product.price,
//             // discount:product.discount,
//             title: product.title,
//             description: product.description,
//             imageUrl: product.imageUrl,
//             size: product.size,
//             color: product.color,
//             // totalPrice:totalPrice,
//             email:email,
//             fname:fname,
//             userId:userId,
//             // productId:productId
//         });
//         console.log("see purchase", res.data)
//         setIsLoading(false)
       
//         toast.success('Purchase is Successful', toastStyles.success)

//     } catch(error) {
//         console.error('Error creating purchase', error)
//         alert('Failed to complete purchase');
//         toast.error('Failed to complete purchase');

//     }
//     finally{
//         setIsLoading2(false)
//     }
// }

// const handleReview = async () => {
    
//     try{
//         const res = await axios.post(`${URL}/api/reviews/${productId}`, {
//             userId : userId,
//             rating,
//             comment,
//             productId:productId
//         });
//         console.log('review post',res.data)
//         toast.success('Review Submitted successfully!', toastStyles.success);
//         setMessage('Review Submitted successfully!');
//         setRating(0);
//         setComment('');
        


//     } catch (error) {
//         setMessage(error.res?.data?.message || 'You have to buy this product to review!');
//         toast.error(error.res?.data?.message || 'You have to buy this product to review!', toastStyles.error);
     
//     }
// }



//   return (
//     <>
//     <Navbar/>

//     <div>
//     <Toaster 
//     position="top-right"
//     reverseOrder={false}
//     gutter={8}
//     toastOptions={{
//         duration:9000,
//         style:{
//             borderRadius:'8px',
//             boxShadow:'0 3px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.05)'
//         }
//     }} 
//      />

//         <p onClick={() => {navigate(-1)}} className='flex items-center gap-x-2 text-gray-500 px-16 mt-9 cursor-pointer'>Home <MdOutlineKeyboardArrowRight /> Product details</p>

//         {isLoading ? (<p className='flex justify-center items-center h-screen'>Loading ...</p>) : (<div className='flex flex-col md:flex-row justify-center gap-x-9 md:space-y-0 space-y-6 mt-12 px-4'>
//             <img src={imageUrl ? imageUrl : "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"} className='object-cover md:w-[700px] md:h-[400px] rounded-lg' />

//             <div className=''>
//                 <p className='text-3xl font-semibold'>{title}</p>

//                 <div className='flex justify-start items-center gap-x-2 mt-2'>
//             <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' /> <FaStar color='orange' /> 4.6 (24 reviews) 
//             </div>
//                 <p className='mt-6 w-[200px] md:max-w-[450px]'>{description}.</p>
//                 <p className='mt-4 text-2xl'>Price: {discount? <span className='font-bold'>{discount}</span> : <span className='font-bold'>{price}</span>}</p> 
//                 <p className='mt-4 text-2xl'>Select Size: <span className='font-normal'>{size}</span></p>
//                 <div className='flex items-center gap-x-4'><p className='mt-4 text-2xl'>Colors: </p>
//                 <div className='flex border px-4 py-1 gap-x-2 rounded-md mt-5'>
//                      <div className='rounded-full text-center h-9 w-9' style={{backgroundColor: `${color}`}}></div>
                                  

//                      </div>

     
       
               
//                 </div>

//                 <div className='flex gap-x-4 mt-6'>
//                     <button onClick={handleDecrease} className='bg-gray-400 text-white rounded-md px-8 py-2'><FiMinus /></button>
//                     <button className='border text-gray-700 font-semibold rounded-md px-12 py-2'>{quantity}</button>
//                     <button onClick={handleIncrease} className='bg-gray-400 text-white font-semibold rounded-md px-8 py-2'><FiPlus /></button>
//                 </div>

//                 <div className='flex gap-x-4 mt-6'>
//                     <button className='bg-blue-600 text-white rounded-md px-12 py-2' onClick={handleBuyNow}>{isLoading2? "Loading . . ." : "Buy Now"}</button>
//                     <button className='border text-gray-700 font-semibold rounded-md px-12 py-2' onClick={() => handleAddToCart(product, quantity)}>Add to Cart</button>
//                 </div>


//             </div>


//         </div>)}

// <div className='px-4 md:px-[260px] mt-12'>
//         <div className='text-xl font-bold'>Make a review</div>
//         <div className='flex gap-x-4 mt-4'>

//         <div onClick={handleFirst} onChange={(e) => setRating(e.target.value)}>{first? (<FaStar color='orange' size={20}/>) : (<GoStar size={20}/>)}</div>
//         <div onClick={handleSecond} onChange={(e) => setRating(e.target.value)}>{second? (<FaStar color='orange' size={20} />) : (<GoStar size={20} />)}</div>
//         <div onClick={handleThird} onChange={(e) => setRating(e.target.value)}>{third? (<FaStar color='orange' size={20} />) : (<GoStar size={20} />)}</div>
//         <div onClick={handleFourth} onChange={(e) => setRating(e.target.value)}>{fourth? (<FaStar color='orange' size={20} />) : (<GoStar size={20} />)}</div>
//         <div onClick={handleFifth} onChange={(e) => setRating(e.target.value)}>{fifth? (<FaStar color='orange' size={20}/>) : (<GoStar size={20}/>)}</div>

//         </div>
//         <textarea  onChange={(e) => setComment(e.target.value)}  className='border px-2 py-2 h-[100px] rounded-md w-[260px] md:w-[400px] text-gray-600 mt-4' placeholder='Write a comment'/>
     
//         <div className='mt-2'><button onClick={handleReview} className='bg-black text-white rounded-md px-4 py-1'>Send Review</button></div>
//         {message && <p className='text-green-600'>{message}</p>}


//         </div>
        

       
// <div className='mb-12'></div>
        
//         </div>
        
//         </>
//   )
// }

// export default ProductDetails


import React, { useState, useEffect, useContext } from 'react'
import gallery from '../assets/grocery.jpg'
import Navbar from '../components/Navbar'
import { FaStar } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { URL } from '../url';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { GoStar } from "react-icons/go";
import toast, { Toaster } from "react-hot-toast";
import { AiFillAndroid } from "react-icons/ai";

const StarRating = ({ rating, onRatingChange }) => {
    const [hover, setHover] = useState(null);
  
    return (
      <div className="flex gap-x-2 mt-2">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
  
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => onRatingChange(ratingValue)}
                className="hidden"
              />
              <div
                className="cursor-pointer"
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              >
                {ratingValue <= (hover || rating) ? (
                  <FaStar color="orange" size={20} />
                ) : (
                  <GoStar size={20} />
                )}
              </div>
            </label>
          );
        })}
      </div>
    );
  };

const ProductDetails = () => {
const {user, logout} = useAuth();
const productId = useParams().id
const { addToCart } = useContext(CartContext);
const navigate = useNavigate()
const [isLoading, setIsLoading] = useState(true)
const [isLoading2, setIsLoading2] = useState(false)
const [quantity, setQuantity] = useState(1)
const [title, setTitle] = useState('')
const [imageUrl, setImageUrl] = useState('')
const [description, setDescription] = useState('')
const [price, setPrice] = useState('')
const [discount, setDiscount] = useState('')
const [size, setSize]= useState('')
const [color, setColor]= useState('')
const [product, setProduct] = useState({});

const [rating, setRating] = useState(0);
const [comment, setComment] = useState('');
const [hover, setHover] = useState(null);
const [message, setMessage] = useState('');

const [first, setFirst] = useState(false)
const [second, setSecond] = useState(false)
const [third, setThird] = useState(false)
const [fourth, setFourth] = useState(false)
const [fifth, setFifth] = useState(false)


const handleFirst = () => {
    setFirst(true)
    setSecond(false)
    setThird(false)
    setFourth(false)
    setFifth(false)
    setRating(1)
}
const handleSecond = () => {
    setSecond(true)
    setFirst(false)
    setThird(false)
    setFourth(false)
    setFifth(false)
    setRating(2)
}
const handleThird = () => {
    setThird(true)
    setFirst(false)
    setSecond(false)
    setFourth(false)
    setFifth(false)
    setRating(3)
}
const handleFourth = () => {
    setFourth(true)
    setFirst(false)
    setSecond(false)
    setThird(false)
    setFifth(false)
    setRating(4)
}
const handleFifth = () => {
    setFifth(true)
    setFirst(false)
    setSecond(false)
    setThird(false)
    setFourth(false)
    setRating(5)
}

const toastStyles = {
  success: {

    duration: 10000,
    // style: {
    //   background: '#4CAF50',
    //   color: 'white',
    //   fontWeight: 'bold',
    // },
    iconTheme: {
      primary: 'white',
      secondary: '#4CAF50',
    },
      style: {

               background: "green",
               color: "whitesmoke",
               icon: <AiFillAndroid background-color="whitesmoke" color='green' />,
             },
  },
  error: {
    duration: 10000,
    style: {
      background: '#F44336',
      color: 'white',
      fontWeight: 'bold',
    },
    iconTheme: {
      primary: 'white',
      secondary: '#F44336',
    },
  },
};

console.log("User details",user)

const email = user?.email;

const fname = user?.fname;

const userId = user?.id;

const handleIncrease = () => {
     setQuantity(quantity + 1)
}

const handleDecrease = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1)
}

const fetchProducts = async() => {
    setIsLoading(true)
    try {
        const res = await axios.get(`${URL}/api/products/${productId}`)
        console.log(res.data)
        setTitle(res.data.title)
        setDescription(res.data.description)
        setImageUrl(res.data.imageUrl)
        setPrice(res.data.price)
        setDiscount(res.data.discount)
        setSize(res.data.size)
        setColor(res.data.color)
        setProduct(res.data)
    }
    catch(err) {
        console.log(err)
    }
    finally {
        setIsLoading(false);
    }
}

useEffect(() => {
    fetchProducts()
}, [productId]);

const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
}

const handleBuyNow = async () => {
    setIsLoading2(true)

    if (!product || !product.id || quantity <= 0) {
        alert('Invalid product or quantity');
        toast.error('Invalid product or quantity');
        return;
    }
    try{
        const totalPrice = product.price * quantity;

        const res = await axios.post(`${URL}/api/purchases/create`,{
            quantity: quantity,
            productId:product.id,
            // price: product.price,
            // discount:product.discount,
            title: product.title,
            description: product.description,
            imageUrl: product.imageUrl,
            size: product.size,
            color: product.color,
            // totalPrice:totalPrice,
            email:email,
            fname:fname,
            userId:userId,
            // productId:productId
        });
        console.log("see purchase", res.data)
        setIsLoading(false)
       
        toast.success('Purchase is Successful', toastStyles.success)

    } catch(error) {
        console.error('Error creating purchase', error)
        alert('Failed to complete purchase');
        toast.error('Failed to complete purchase');

    }
    finally{
        setIsLoading2(false)
    }
}

const handleReview = async () => {
    
    try{
        const res = await axios.post(`${URL}/api/reviews/${productId}`, {
            userId : userId,
            rating,
            comment,
            productId:productId
        });
        console.log('review post',res.data)
        toast.success('Review Submitted successfully!', toastStyles.success);
        setMessage('Review Submitted successfully!');
        setRating(0);
        setComment('');
        


    } catch (error) {
        setMessage(error.res?.data?.message || 'You have to buy this product to review!');
        toast.error(error.res?.data?.message || 'You have to buy this product to review!', toastStyles.error);
     
    }
}


  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 9000,
            style: {
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.05)'
            }
          }}
        />

        <p onClick={() => { navigate(-1) }} className='flex items-center gap-x-2 text-gray-500 mt-4 md:mt-9 cursor-pointer'>
          Home <MdOutlineKeyboardArrowRight /> Product details
        </p>

        {isLoading ? (
          <p className='flex justify-center items-center h-screen'>Loading ...</p>
        ) : (
          <div className='flex flex-col md:flex-row justify-center gap-24 mt-6 md:mt-12'>
            <img
              src={imageUrl ? imageUrl : "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"}
              className='object-cover w-full md:w-[700px] h-[300px] md:h-[400px] rounded-lg'
              alt={title}
            />

            <div className='mt-6 md:mt-0'>
              <p className='text-2xl md:text-3xl font-semibold'>{title}</p>

              <div className='flex items-center gap-x-2 mt-2'>
                <FaStar color='orange' /> <FaStar color='orange' /> <FaStar color='orange' /> <FaStar color='orange' /> <FaStar color='orange' />
                <span className="text-sm md:text-base">4.6 (24 reviews)</span>
              </div>

              <p className='mt-4 md:mt-6 w-full md:max-w-[450px]'>{description}.</p>
              <p className='mt-4 text-xl md:text-2xl'>Price: {discount ? <span className='font-bold'>{discount}</span> : <span className='font-bold'>{price}</span>}</p>
              <p className='mt-4 text-xl md:text-2xl'>Select Size: <span className='font-normal'>{size}</span></p>

              <div className='flex items-center gap-x-4 mt-4'>
                <p className='text-xl md:text-2xl'>Colors: </p>
                <div className='flex border px-4 py-1 gap-x-2 rounded-md'>
                  <div className='rounded-full text-center h-8 w-8 md:h-9 md:w-9' style={{ backgroundColor: `${color}` }}></div>
                </div>
              </div>

              <div className='flex gap-x-4 mt-6'>
                <button onClick={handleDecrease} className='bg-gray-400 text-white rounded-md px-6 md:px-8 py-2'><FiMinus /></button>
                <button className='border text-gray-700 font-semibold rounded-md px-8 md:px-12 py-2'>{quantity}</button>
                <button onClick={handleIncrease} className='bg-gray-400 text-white font-semibold rounded-md px-6 md:px-8 py-2'><FiPlus /></button>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                <button className='bg-blue-600 text-white rounded-md px-8 md:px-12 py-2 w-full sm:w-auto' onClick={handleBuyNow}>{isLoading2 ? "Loading . . ." : "Buy Now"}</button>
                <button className='border text-gray-700 font-semibold rounded-md px-8 md:px-12 py-2 w-full sm:w-auto' onClick={() => handleAddToCart(product, quantity)}>Add to Cart</button>
              </div>
            </div>
          </div>
        )}

        <div className='mt-12 px-0 md:px-[118px]'>
          <div className='text-xl font-bold'>Make a review</div>
          <StarRating rating={rating} onRatingChange={setRating} />
          {/* <div className='flex gap-x-4 mt-4'>
            <div onClick={handleFirst} onChange={(e) => setRating(e.target.value)}>{first ? (<FaStar color='orange' size={20} />) : (<GoStar size={20} />)}</div>
            <div onClick={handleSecond} onChange={(e) => setRating(e.target.value)}>{second ? (<FaStar color='orange' size={20} />) : (<GoStar size={20} />)}</div>
            <div onClick={handleThird} onChange={(e) => setRating(e.target.value)}>{third ? (<FaStar color='orange' size={20} />) : (<GoStar size={20} />)}</div>
            <div onClick={handleFourth} onChange={(e) => setRating(e.target.value)}>{fourth ? (<FaStar color='orange' size={20} />) : (<GoStar size={20} />)}</div>
            <div onClick={handleFifth} onChange={(e) => setRating(e.target.value)}>{fifth ? (<FaStar color='orange' size={20} />) : (<GoStar size={20} />)}</div>
          </div> */}
          <textarea
            onChange={(e) => setComment(e.target.value)}
            className='border px-2 py-2 h-[100px] rounded-md w-full md:w-[400px] text-gray-600 mt-4'
            placeholder='Write a comment'
          />

          <div className='mt-4'>
            <button onClick={handleReview} className='bg-black text-white rounded-md px-4 py-2 w-full sm:w-auto'>Send Review</button>
          </div>
          {message && <p className='text-green-600 mt-2'>{message}</p>}
        </div>

        <div className='mb-12'></div>
      </div>
    </>
  )
}

export default ProductDetails
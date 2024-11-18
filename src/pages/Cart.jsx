import { useState, useEffect } from 'react';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { URL } from '../url';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import { PaystackButton } from 'react-paystack';
import Navbar from '../components/Navbar';


const delivery = [
    {
        id: 1,
        lga:"Ikorodu",
        deliveryCharge:1000
      },
      { 
        id: 2,
        lga:"Surulere",
        deliveryCharge:1500
      },
      {
        id: 3,
        lga:"Magodo",
        deliveryCharge:2000
      },
      {
        id: 4,
        lga:"Lekki",
        deliveryCharge:2500
      },
      {
        id: 5,
        lga:"Ikeja",
        deliveryCharge:3000
      }
]


export default function CartPage() {
  const {user} = useAuth() 
  const { id: cartId } = useParams()
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [loading, setLoading] = useState(false)

  const [cartTotals, setCartTotals] = useState({
    subtotal: 0,
    vat: 0,
    deliveryCharge: 0,
    totalAmount: 0
  });

  const email = user?.email;
  const fname = user?.fname;
  const location = user?.lga;
  console.log("lga", location)
  const userId = user?.id;
  console.log("userId", userId)

  // get delivery charge based on users LGA
  const getDeliveryCharge = (userLga) => {
    const deliveryArea = delivery.find(area => area.lga.toLowerCase() === userLga?.toLowerCase());
    return deliveryArea ? deliveryArea.deliveryCharge : 0;
  }



    const fetchCartItems = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get(`${URL}/api/cart/user/${userId}`)
        setCartItems(res.data.cartItems)
      } catch (err) {
        console.error(err)
        // toast.error('Failed to load product details')
      } finally {
        setIsLoading(false)
      }
    }

    console.log("cartitems", cartItems)


    useEffect(() =>{
    fetchCartItems()
  }, [])

//update delivery charge when location changes
useEffect(() => {
    const deliveryCharge = getDeliveryCharge(location);
    setCartTotals(prev => ({
        ...prev,
        deliveryCharge
    }));
}, [location]);


  // Calculate totals whenever cart items change
  useEffect(() => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    const vat = subtotal * 0.15; // 15% VAT
    const totalAmount = subtotal + vat + cartTotals.deliveryCharge;

    setCartTotals(prev => ({
        ...prev,
        subtotal,
        vat,
        totalAmount
      }));
    }, [cartItems, cartTotals.deliveryCharge]); // Added deliveryCharge as dependency

//     setCartTotals({
//       ...cartTotals,
//       subtotal,
//       vat,
//       totalAmount
//     });
//   }, [cartItems]);

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(cartItems.map(item => {
      if (item.id === itemId) {
        const price = item.discount || item.price;
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: price * newQuantity
        };
      }
      return item;
    }));
  };
  
  const handleDelete = async (itemId) => {
    try{
      // const accessToken = localStorage.getItem("access_token");

      // if(!accessToken){
      //       // Handle the case where the access token is not available
      //   console.error('Access token not found')
      // }
      const res = await axios.delete(URL+"/api/cart/"+itemId
      // ,{
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
      // }
    )
      setCartItems((prevData) => prevData.filter(item => item.id !== itemId));
      console.log(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  const handleDeleteAfterPurchase = async () => {
    try{
      const res = await axios.delete(`${URL}/api/cart/user/${userId}`)
    //   setCartItems((prevData) => prevData.filter(item => item.id !== itemId));
      console.log(res.data)
    }
    catch(err){
      console.log(err)
    }
  }


const handleCheckout = async () => {
    setLoading(true);
    try {
      const purchaseData = {
        email: email,
        fname: fname,
        userId: userId,
        totalAmount: cartTotals.totalAmount,
        items: cartItems.map(item => ({
          cartId: item.id,
          title: item.title,
          description: item.description || '',
          price: item.discount || item.price,
          discount: item.discount || null,
          color: item.color || '',
          size: item.size || '',
          quantity: item.quantity,
          totalPrice: item.totalPrice,
        }))
      };
  
      const res = await axios.post(`${URL}/api/purchases/create`, purchaseData);
      
      if (res.status === 200) {
        await handleDeleteAfterPurchase();
        setLoading(false);
        // Add success notification here
      }
    } catch (error) {
      setLoading(false);
      console.error('Error creating purchase:', error);
      // Add error notification here
    }
  };

  const publicKey = "pk_test_885145b259720168f0ccfc346b9c4a6c5c4694e7";

  const amount = cartTotals.totalAmount;


const paymentProps = {

    email: email,
    fname: fname,
    userId: userId,
    amount: amount * 100,
    items: cartItems.map(item => ({
      cartId: item.id,
      title: item.title,
      description: item.description || '',
      price: item.discount * 100 || item.price * 100,
      discount: item.discount * 100|| null,
      color: item.color || '',
      size: item.size || '',
      quantity: item.quantity,
      totalPrice: item.totalPrice * 100,
    })),
  
    publicKey,
    text:"Proceed to Checkout",

    onClose: () => alert("Are you sure you want to close"),
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      handleCheckout();
      navigate('/')

    },
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <ShoppingCart className="w-6 h-6" />
          Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="lg:w-2/3">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md">
                {cartItems?.map(item => (
                  <div key={item.id} className="flex items-center p-6 border-b border-gray-200">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1 ml-4">
                      <h2 className="font-semibold text-lg">{item.title}</h2>
                      <p className="text-gray-600 text-sm">
                        {item.color} | Size: {item.size}
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="font-semibold">
                          ${(item.discount || item.price).toFixed(2)}
                        </span>
                        {item.discount && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            ${item.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary Section */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${cartTotals.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">VAT (15%)</span>
                  <span>${cartTotals.vat.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Charge</span>
                  <span>${cartTotals.deliveryCharge.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${cartTotals.totalAmount.toFixed(2)}</span>
                  </div>
                </div>
                {/* <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6"
                >
                 {loading ? "processing ..." : "Proceed to Checkout"}
                </button> */}
                  {user ? (
            <PaystackButton 
                {...paymentProps} 
                disabled={loading} 
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6">
                {loading ? "processing ..." : "Proceed to Checkout"}
            </PaystackButton>) :(
                <p>Log in first please</p>
            )

                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
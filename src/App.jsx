import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import CreateProduct from './pages/CreateProduct'
// import Contact from './pages/Contact'
// import About from './pages/About'
// import ProductDetails from './pages/ProductDetails'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Payment from './pages/Payment'
// import Shop from './pages/Shop'
// import Cart from './pages/Cart'
// import Profile from './components/Profile'







const App = () => {
  return (
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/createproduct" element={<CreateProduct/>}/>
    {/* <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
 
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/payment" element={<Payment/>}/>
    <Route exact path="/shop" element={<Shop/>}/>
    <Route exact path="/productdetails" element={<ProductDetails/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
    <Route exact path="/profile" element={<Profile/>}/> */}



    </Routes>
  )
}

export default App
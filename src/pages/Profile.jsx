import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { URL } from '../url'

const Profile = () => {

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [city, setCity] = useState('')
const [state, setState] = useState('')
const [country, setCountry] = useState('')

  return (
    <>
    <Navbar/>
    <div>
        <p className='text-3xl font-semibold text-center mt-12'>Profile</p>


        <div>

        <input onChange={(e) => setFirstName(e.target.value)} className='text-lg text-gray-400' placeholder='first name' />
        
        <input onChange={(e) => setLastName(e.target.value)} className='text-lg text-gray-400' placeholder='last name' />
        
        <input onChange={(e) => setPhone(e.target.value)} className='text-lg text-gray-400' placeholder='phone' />
        
        <input onChange={(e) => setCity(e.target.value)} className='text-lg text-gray-400' placeholder='City' />

        <input onChange={(e) => setState(e.target.value)} className='text-lg text-gray-400' placeholder='State' />
        
        <input onChange={(e) => setCountry(e.target.value)} className='text-lg text-gray-400' placeholder='Country' />

        </div>
        
        
        </div>
        </>
  )
}

export default Profile
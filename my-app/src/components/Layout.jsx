/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './Navbar'
import Gallary from './Gallary'
import { Link, Outlet } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import HotOffers from './HotOffers';
import Bar from './Bar';
import Footer from './Footer';


const Layout = () => {
    const [fixed,setfixed]=useState(false)  
  return (
   <>
  <Navbar/>
  <Gallary/>
  
  <div className="bar-container" >
  
   
  <Link to="/branches">
  
    <div className="bars-btn">
    <button>view menu
    <FaLongArrowAltRight className='ii' />



    </button>
   


    </div>
  </Link>
    </div>
   
  <HotOffers/>

<Footer/>

   </>
  )
}

export default Layout
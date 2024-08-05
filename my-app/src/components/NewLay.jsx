/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import Gallary from './Gallary'
import Bar from './Bar'
import Branches from './Branches'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const NewLay = () => {
  return (
    <>
    <Navbar/>
    <Gallary/>
    
   <Bar/>
    <Branches/>
    <Footer/>
   
    
    </>
  )
}

export default NewLay
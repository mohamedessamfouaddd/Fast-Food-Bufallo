/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { HandleText } from '../utils/auther';


const Burger = ({DataBurger}) => {
  let {rout,setrout}=useContext(HandleText)
 


   
  

  

   
  return (
    <>
   <Link to={`/shop/${DataBurger?.slug}`} onClick={()=>setrout(true)}>
   
   
        <div className="burger-icon">
            <div className="photo">
              <div className='animation'></div>
                <img src={`http://localhost:1337`+DataBurger.img.data[0].attributes.url}alt="" />
            </div>
            <div className="description">
                <h4>{DataBurger.title}</h4>
               <p> {DataBurger.discription}</p>
            </div>
            <div className="price">
                <span>Egp {DataBurger.price}</span>
                <IoMdAddCircleOutline className='svg' />
               
            </div>
        </div>
      
   </Link>
   
    
    </>
  )
}

export default Burger
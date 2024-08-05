/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link, NavLink, Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Kids = ({DataKids}) => {
   
  return (
    <>
   <Link to={`/kid/${DataKids?.slug}`}>

    <div className="kids-icon">
            <div className="photo">
            <div className='animation'></div>
                <img src={`http://localhost:1337`+DataKids.img.data[0].attributes.url}alt="" />
            </div>
            <div className="description">
                <h4>{DataKids.title}</h4>
               <p>{DataKids.description} </p>
            </div>
            <div className="price">
                <span>Egp{DataKids.price}</span>
                <IoMdAddCircleOutline className='svg' />
            </div>
        </div>
      
   
   
   </Link>
    
    
    
    </>
  )
}

export default Kids
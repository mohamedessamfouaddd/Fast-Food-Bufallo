/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const Desert = ({DataDessert}) => {
  return (
   <>
   <Link to={`/dessert/${DataDessert?.slug}`}>
   <div className="dessert-icon">
            <div className="photo">
            <div className='animation'></div>
                <img src={`http://localhost:1337`+DataDessert.img.data[0].attributes.url}alt="" />
            </div>
            <div className="description">
                <h4>{DataDessert.title}</h4>
               <p>{DataDessert.description} </p>
            </div>
            <div className="price">
                <span>Egp{DataDessert.price}</span>
                <IoMdAddCircleOutline className='svg' />
            </div>
        </div>
   
   
   </Link>
    

   
   
   </>
  )
}

export default Desert
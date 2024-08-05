/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { HandleText } from '../utils/auther';

const Chiken = ({DataChiken}) => {
  const {routtwo,setrouttwo}=useContext(HandleText)
  return (
    <>
    <Link to={`/chiken/${DataChiken?.slug}`} onClick={()=>setrouttwo(true)}>




    <div className="chiken-icon">
            <div className="photo">
            <div className='animation'></div>
                <img src={ `http://localhost:1337`+DataChiken.img.data[0].attributes.url}alt="" />
            </div>
            <div className="description">
                <h4>{DataChiken.title}</h4>
               <p>{DataChiken.description} </p>
            </div>
            <div className="price">
                <span>Egp{DataChiken.price} </span>
                <IoMdAddCircleOutline className='svg' />
            </div>
        </div>

    </Link>
    
      
    
    </>
  )
}

export default Chiken
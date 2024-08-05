/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { HandleText } from '../utils/auther';

const Keto = ({DataKeto}) => {
  let {rout,setrout}=useContext(HandleText)




  return (
    <>
    <Link to={`/keto/${DataKeto?.slug}`} onClick={()=>setrout(true)}>
    <div className="keto-icon">
            <div className="photo">
            <div className='animation'></div>
                <img src={ `http://localhost:1337`+DataKeto.img.data[0].attributes.url}alt="" />
            </div>
            <div className="description">
                <h4>{DataKeto.title}</h4>
               <p> {DataKeto.description}</p>
            </div>
            <div className="price">
                <span>Egp{DataKeto.price}</span>
                <IoMdAddCircleOutline className='svg' />
            </div>
        </div>
    
    </Link>
    
    
    
    </>
  )
}

export default Keto
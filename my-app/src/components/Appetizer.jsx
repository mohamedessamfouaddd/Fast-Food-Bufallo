/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { HandleText } from '../utils/auther'
import { useNavigate } from 'react-router-dom';



export const Appetizer = ({DataApe}) => {
  let {cart,setcart}=useContext(HandleText)
  const{count,setcount}=useContext(HandleText)
  const navigate=useNavigate()
  
  const Allcart=[
    {img2:DataApe?.img?.data[0]?.attributes?.url,title:DataApe?.title,description:DataApe?.discription,price:DataApe?.price,id:Math.random(),quntity:1,},
  ]
  const addtocard=([Allcart])=>{

    setcart([...cart,Allcart])
    navigate("/cart")
    setcount(count+1)
  
}




  return (
    <>
    <div className="appetizer-icon" onClick={()=>addtocard(Allcart)}>
            <div className="photo">
            <div className='animation'></div>
                <img src={`http://localhost:1337`+DataApe?.img?.data[0]?.attributes?.url}alt="" />
            </div>
            <div className="description">
                <h4>{DataApe?.title}</h4>
               <p> {DataApe?.description}</p>
            </div>
            <div className="price">
                <span>Egp {DataApe?.price}</span>
                <IoMdAddCircleOutline className='svg' />
            </div>
        </div>
    </>
  )
}

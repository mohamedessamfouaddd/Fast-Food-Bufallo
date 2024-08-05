/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { HandleText } from '../utils/auther'
import { useNavigate } from 'react-router-dom';
const Drinks = ({DataDrinks}) => {
    let {cart,setcart}=useContext(HandleText)
    const{count,setcount}=useContext(HandleText)
    const navigate=useNavigate()

    const Allcart=[
        {img2:DataDrinks?.img?.data[0]?.attributes?.url,title:DataDrinks?.title,description:DataDrinks?.discription,price:DataDrinks?.price,id:Math.random(),quntity:1,},
      ]
     
      const addtocard=([Allcart])=>{

        setcart([...cart,Allcart])
        navigate("/cart")
        setcount(count+1)
      
  }

  return (
    <>

<div className="drinks-icon" onClick={()=>addtocard(Allcart)}>
            <div className="photo">
            <div className='animation'></div>
                <img src={`http://localhost:1337`+DataDrinks.img.data[0].attributes.url}alt="" />
            </div>
            <div className="description">
                <h4>{DataDrinks.title}</h4>
              
            </div>
            <div className="price">
                <span>Egp {DataDrinks.price} </span>
                <IoMdAddCircleOutline className='svg' />
            </div>
        </div>
    
    
    </>
  )
}

export default Drinks
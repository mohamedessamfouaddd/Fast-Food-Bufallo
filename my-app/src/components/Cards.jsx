/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Bar from './Bar'
import {Swiper,SwiperSlide} from 'swiper/react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { HandleText } from '../utils/auther'
import { useNavigate } from 'react-router-dom';
import { Base_url } from '../Api/AxiosConfig';


const Cards = ({Dataicon}) => {
  let {cart,setcart}=useContext(HandleText)
  const{count,setcount}=useContext(HandleText)
  const navigate=useNavigate()
 
  const Allcart=[
    {img2:Dataicon?.img?.data[0]?.attributes?.url,title:Dataicon?.title,description:Dataicon?.discription,price:Dataicon?.price,id:Math.random(),quntity:1,},
  ]
 
  const addtocard=([Allcart])=>{

    setcart([...cart,Allcart])
    navigate("/cart")
    setcount(count+1)
  
}
 
  return (
   <>
   <div className="cards-container" onClick={()=>addtocard(Allcart)}>
    <div className="cards-photo">
        <img src={`http://localhost:1337`+ Dataicon.img.data[0].attributes.url} alt="" />
    </div>
   </div>
  
 
   
   </>
  )
}

export default Cards
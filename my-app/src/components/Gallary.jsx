/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Card from './Card'
import {Swiper,SwiperSlide} from 'swiper/react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import{Navigation,Scrollbar,Autoplay} from "swiper/modules"
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCards, getAllIcons, getAllProduct } from '../ReduxTolkit/Slices';
import Bar from './Bar';






const Gallary = () => {
  const {productData,BarData}=useSelector((state)=>state.products)
 
  const dispatch=useDispatch()
 
  useEffect(()=>{
    dispatch(getAllProduct())

  },[dispatch])
  useEffect(()=>{
    dispatch(getAllIcons())

  },[dispatch])

 
 


  return (
    <>
    <div className="gallary">
   

  <Swiper slidesPerView={1}spaceBetween={30} modules={[Navigation,Scrollbar,Autoplay]}navigation={
    {nextEl: ".right",prevEl: ".left" }
  }scrollbar={{el: ".swiper-progress"}}
  autoplay={{delay:3000}}
  >
    {productData?.data?.map((Data,id,)=><>
        <SwiperSlide key={id}>

    <Card productData={Data?.attributes}  />
        </SwiperSlide> </>
    )}
       

   
      </Swiper>
      <div className="arrows">

<IoIosArrowBack className="left" /> 
<IoIosArrowForward className="right" />
    </div>
    <div className="swiper-progress">


</div>



    </div>






</>

  )

}

export default Gallary
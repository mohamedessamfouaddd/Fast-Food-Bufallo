/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import Card from './Card'
import {Swiper,SwiperSlide} from 'swiper/react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import{Navigation,Scrollbar,Autoplay} from "swiper/modules"
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCards, getAllIcons, getAllProduct } from '../ReduxTolkit/Slices';
import Bar from './Bar';
import Cards from './Cards';
import { HandleText } from '../utils/auther';

const HotOffers = () => {
    const {productData,BarData,cardData}=useSelector((state)=>state.products)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetAllCards())
    
      },[dispatch])
      const{path,setpath}=useContext(HandleText)
     
 
  return (
   <>
   
      <main>
      <h3>hot offers</h3>
      <Swiper slidesPerView={3.5} spaceBetween={15} loop={true} breakpoints={{
        300:{slidesPerView:1.2},
        400:{slidesPerView:1.4},
        500:{slidesPerView:1.8},
        600:{slidesPerView:2.1},
        700:{slidesPerView:2.5},
        800:{slidesPerView:2.9},
        900:{slidesPerView:2.1},
        1050:{slidesPerView:2.5},
        1180:{slidesPerView:2.6},
        1300:{slidesPerView:3},
        1400:{slidesPerView:3.3},
        1550:{slidesPerView:3.5},
        1650:{slidesPerView:3.9},
        1850:{slidesPerView:4.1},
        1950:{slidesPerView:4.3},
        2100:{slidesPerView:4.9},
        

      }}>
        {cardData?.data?.map((Data,id)=><>
       
          <SwiperSlide key={id}>

       <Cards Dataicon={Data?.attributes} />
    </SwiperSlide>
    </>
        
        
        )}




    
      </Swiper>
      
   

    </main>
   
   
 


   
   
   </>
  )
}

export default HotOffers
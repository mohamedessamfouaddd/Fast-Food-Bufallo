/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import Offers from './Offers'
import {Swiper,SwiperSlide} from 'swiper/react';
import { HandleText } from '../utils/auther'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllBurger, GetAlloffers, getAllAppetizer, getAllChiken, getAllDessert, getAllDips, getAllDrinks, getAllKetos, getkid } from '../ReduxTolkit/Slices';
import Burger from './Burger';
import Chiken from './Chiken';
import Kids from './Kids';
import Drinks from './Drinks';
import Keto from './Keto';
import Dips from './Dips';
import { Appetizer } from './Appetizer';
import Desert from './Desert';

const Branches = () => {
 
  const {dessertref,kidsref,appref,drinkref,offersref,chikenref,burgerref,dipsref,ketoref}=useContext(HandleText) 
  const {Offerss,Burgerss,Chenkss,kidss,Drinkss, Ketoss,Dipss,Ape,Deserts}=useSelector((state)=>state.products)
 
 
  const dispatch=useDispatch()
 
  useEffect(()=>{
    dispatch(GetAlloffers())

  },[dispatch])
  useEffect(()=>{
    dispatch(GetAllBurger())

  },[dispatch])
  useEffect(()=>{
    dispatch(getAllChiken())

  },[dispatch])
  useEffect(()=>{
    dispatch(getkid())

  },[dispatch])
  
  useEffect(()=>{
    dispatch(getAllDrinks())

  },[dispatch])
  
  useEffect(()=>{
    dispatch(getAllKetos())

  },[dispatch])
 
  useEffect(()=>{
    dispatch(getAllDips())

  },[dispatch])
  useEffect(()=>{
    dispatch(getAllAppetizer())

  },[dispatch])
  useEffect(()=>{
    dispatch(getAllDessert())

  },[dispatch])
  
 
 
  
 
 
 
  
  
 

 
 
  
  return (
    <>
<div ref={offersref}></div>
     <main className='offers' >
      <h3 id='offers'>offers</h3>
      <Swiper slidesPerView={3.5} spaceBetween={20} loop={true} breakpoints={{
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
        {Offerss?.data?.map((Data,id)=><>
        
          <SwiperSlide key={id}>
            <Offers DataOffers={Data?.attributes}/>

     
    </SwiperSlide>
        
        </>)}
    </Swiper>

    </main>
   


        
   <div  ref={burgerref}> </div>
<div className="burger-container" >
  <h1  >BURGER SANDWICHES</h1>
  <div className="container-style">
    {Burgerss?.data?.map((Data,id)=><>
        <Burger DataBurger={Data?.attributes} key={id}/>
    
    </>)}

       
  </div>
        

    </div>
    <div ref={chikenref}></div>
    <div className="chiken-contanier" >
      <h1>CHICKEN SANDWICHES</h1>
      <div className="container-style">
        {Chenkss?.data?.map((Data,id)=><>
    <Chiken key={id} DataChiken={Data?.attributes}/>
        
        </>)}


      </div>
    </div>
    <div style={{marginBottom:"150cpx"}} ref={kidsref}></div>
    <div className="kids-container" >
      <h1> KIDS MEALS</h1>
      <div className="container-style">
      {kidss?.data?.map((Data,id)=><>
    <Kids key={id} DataKids={Data?.attributes}/>
        
        </>)}
   
    

     

    </div>
    </div>
    <div ref={drinkref}></div>
    <div className="drinks-container" >
      <h1>DRINKS</h1>
      <div className="container-style">
      {Drinkss?.data?.map((Data,id)=><>
    <Drinks key={id} DataDrinks={Data?.attributes}/>
        
        </>)}
   

      </div>
    </div>
    <div ref={ketoref}></div>
    <div className="keto-container" >
      <h1>KETO & LIGHT SANDWICHES</h1>
      <div className="container-style">
      {Ketoss?.data?.map((Data,id)=><>
    <Keto key={id} DataKeto={Data?.attributes}/>
        
        </>)}
        
      </div>
    </div>
    <div ref={dipsref}></div>
    <div className="dips-container" >
      <h1>SAUCES</h1>
      <div className="container-style">
      {Dipss?.data?.map((Data,id)=><>
    <Dips key={id} DataDips={Data?.attributes}/>
        
        </>)}
        
      </div>
    </div>
    <div ref={appref}> </div>
    <div className="appetizer-container" >
      <h1>APPETIZERS</h1>
      <div className="container-style">
      {Ape?.data?.map((Data,id)=><>
    <Appetizer key={id} DataApe={Data?.attributes}/>
        
        </>)}
      </div>
    </div>
    <div ref={dessertref}></div>
    <div  className="dessert-container">
      <h1>DESSERTS</h1>
      <div className="container-style">
      {Deserts?.data?.map((Data,id)=><>
    <Desert key={id} DataDessert={Data?.attributes}/>
        
        </>)}
       
      </div>
    </div>





    


    </>
  
  )
}

export default Branches
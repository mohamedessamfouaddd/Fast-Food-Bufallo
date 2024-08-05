/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider, Route,Link,} from "react-router-dom";
import Navbar from './components/Navbar';
import { HandleProvider, HandleText } from './utils/auther';
import {Provider}   from "react-redux"
import { Store } from './ReduxTolkit/Store';
import "swiper/css"
import NewLay from './components/NewLay';
import ChikenDeatails from './components/ChikenDeatails';
import BergerDatails from './components/BergerDatails';
import { Cart } from './components/Cart';
import Layout from './components/Layout';
import KetoDetails from './components/KetoDetails';
import Profile from './components/Profile';
import CahngePassword from './components/CahngePassword';
import ProfileDetails from './components/ProfileDetails';
import KidDeatails from './components/KidDeatails';
import { DessertDetails } from './components/DessertDetails';
import { Order } from './components/Order';
import Loading from './components/Loading';










const App = () => {
  const [isloading,setisloading]=useState(false)
  const routing=createBrowserRouter([
    {path:"",element:<Layout/>},
      {path:"/branches",element:<NewLay/>},     
      {path:"/shop/:slug" ,element:<BergerDatails/>},
      {path:"/chiken/:slug",element:<ChikenDeatails/>},
      {path:"/keto/:slug",element:<KetoDetails/>},
      {path:"/cart", element:<Cart/>},
      {path:"/profile",element:<Profile/>,children:[
        {path:"",element:<ProfileDetails/>},
        {path:"changepassword",element:<CahngePassword/>}
      ]},
      {path:"/kid/:slug",element:<KidDeatails/>},
      {path:"/dessert/:slug",element:<DessertDetails/>},
      {path:"/history",element:<Order/>},
      
      

   
  ])
  useEffect(()=>{
    setisloading(true)
    setTimeout(()=>{
      setisloading(false)
    },3000)
  },[])

  
  return (
    <>

   
   <Provider store={Store}>


 <HandleProvider>
  {isloading&&
 <Loading/>  
  
  }
 <RouterProvider router={routing}/>

 
 </HandleProvider>
   </Provider>

  








    </>

  )
}

export default App

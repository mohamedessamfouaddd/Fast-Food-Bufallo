/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import { BsCart3 } from "react-icons/bs";
import { HandleText } from '../utils/auther'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDessertDetails } from '../ReduxTolkit/Slices';

export const DessertDetails = () => {
    let {cart,setcart}=useContext(HandleText)
    const{count,setcount}=useContext(HandleText)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {slug}=useParams()
    const{ DessertDetail}=useSelector((state)=>state.products)
    useEffect(()=>{
       dispatch(getDessertDetails(slug))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[slug])
    const Allcart=[
        {img2:DessertDetail?.data?.attributes?.img?.data[0]?.attributes?.url,title:DessertDetail?.data?.attributes?.title,description:DessertDetail?.data?.attributes?.discription,price:DessertDetail?.data?.attributes?.price,id:Math.random(),quntity:1,},
      ]

     const addtocard=([Allcart])=>{

        setcart([...cart,Allcart])
        navigate("/cart")
        setcount(count+1)
      
  }


  return (
   <>
       <Navbar/>
     <div className="kid-details">
    <div className="product">
        <div className="photo">
            <img src={ `http://localhost:1337`+DessertDetail?.data?.attributes?.img?.data[0]?.attributes?.url} alt="" />
        </div>
        <div className="Description">
            <h3>{DessertDetail?.data?.attributes?.title}</h3>
            <p>{DessertDetail?.data?.attributes?.description}</p>
        </div>
    </div>
    <div className="size">
    <h4>size</h4>

  <form >
        <div className="white-bread" >

    
      <div className="radio" >
       
        
        <span className="see"></span>
        
     

      </div>
       
        <label className="strips" htmlFor="">1 size (EGP {DessertDetail?.data?.attributes?.price} ) </label>
        </div>
      
        
  
      </form>

   </div>
   <div className="response">

<div className="total">
   
     <div className="btn" onClick={()=>addtocard(Allcart)}>
     <BsCart3 className='i' />
       <button >add to card</button>
       </div>
       <div className="price">
         <h2>total</h2>
         <p>EGP {DessertDetail?.data?.attributes?.price} </p>
       </div>

     
    
     </div>

    </div>







   </div>
   
   
   </>
  )
}

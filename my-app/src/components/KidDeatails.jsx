/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getKidsDetalis } from '../ReduxTolkit/Slices';
import { useContext } from 'react';
import { HandleText } from '../utils/auther';

const KidDeatails = () => {
    let [see,setsee]=useState(true)
    let [seetwo,setseetwo]=useState(false)
    const dispatch=useDispatch()
    let {cart,setcart}=useContext(HandleText)
    const navigate=useNavigate()
    const{count,setcount}=useContext(HandleText)
    const{ KidsDetails}=useSelector((state)=>state.products)
   const {slug}=useParams()
  useEffect(()=>{
    dispatch(getKidsDetalis(slug))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[slug])
  // eslint-disable-next-line no-undef
 
  const clac =()=>{
   const Allcalc= KidsDetails?.data?.attributes?.price +10
   return Allcalc
  }
  const Allcart=[
    {img2:KidsDetails?.data?.attributes?.img?.data[0]?.attributes?.url,title:KidsDetails?.data?.attributes?.title,description:KidsDetails?.data?.attributes?.discription,price:clac(),id:Math.random(),quntity:1,Drinks:(see||seetwo?"Apple juice":"")},
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
            <img src={`http://localhost:1337`+KidsDetails?.data?.attributes?.img?.data[0]?.attributes?.url} alt="" />
        </div>
        <div className="Description">
            <h3>{KidsDetails?.data?.attributes?.title}</h3>
            <p>{KidsDetails?.data?.attributes?.description}.</p>
        </div>
    </div>
    <div className="size">
    <h4>size</h4>

  <form >
        <div className="white-bread" >

    
      <div className="radio" >
       
        
        <span className="see"></span>
        
     

      </div>
       
        <label className="strips" htmlFor="">regular (EGP {KidsDetails?.data?.attributes?.price} ) </label>
        </div>
      
        
  
      </form>

   </div>
   <div className="bread">
      <h4>toys</h4>
      <form >
        <div className="white-bread" onClick={()=>(setsee(true),setseetwo(false))}>

    
      <div className="radio" >
      
        {see &&
        
        
        <span className="see"></span>
        
        }
        
     

      </div>
       
        <label className={`${see ?"label-color":""}`} htmlFor="white">girl toy</label>
        </div>
        <div className="brown-bread"  onClick={()=>(setsee(false),setseetwo(true))}>

       
        
      <div className="radio">
        {seetwo &&
        
        <span className="see"></span>
        
        }
       


</div>
        <label className={`${seetwo ?"label-color":""}`} htmlFor="brown">boy toy </label>
        </div>
      </form>
    </div>

    <div className="Apple">
    <form >
        <div className="white-bread" >

    
      <div className="radio" >
       
        
        <span className="see"></span>
        
     

      </div>
       
        <label htmlFor="">apple juice (EGP 10) </label>
        </div>
      
        
  
      </form>



    </div>
    <div className="response">
     <div className="total">
    
    <div className="btn" onClick={()=>addtocard(Allcart)}>
    <BsCart3 className='i' />
      <button>add to card</button>
      </div>
    
   
    
      <div className="price">
        <h2>total</h2>
        <p>EGP {clac()} </p>
      </div>

    
   
    </div>



     </div>











    </div>

 
   







    </>
  
   

  )
}

export default KidDeatails
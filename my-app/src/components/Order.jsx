/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Navbar from './Navbar'
import { HandleText } from '../utils/auther'
import { useNavigate } from 'react-router-dom'

export const Order = () => {
    let {cart,setcart,order,setorder,cancell,setcancell}=useContext(HandleText)
    const Totalprice=order.reduce((current,item)=>current+item.price*item.quntity,0)
    const navigat=useNavigate()
    const cancel=()=>{
        setcancell(true)
       setorder([])

    }
  return (
   <>
   <Navbar/>
   <div className="account">
        <h2>order details</h2>
    </div>
   <div className="items">
    <h3>items</h3>
    {order?.map((Data,index)=><>
        <div className={`item-container ${cancell?"cancel":""}`}>
        <div className="left">
            <div className="photo">
                <img src={`http://localhost:1337` +Data.img2} alt="" />
            </div>
            <div className="inf">
                <h4>{Data?.title}, <span>{Data.Des}</span> </h4>
                <p>{Data?.Drinks}<span>{Data?.cheese}</span><span>{Data?.mash}</span><span>{Data?.piceles}</span><span>{Data?.beef}</span></p>
            </div>
        </div>
        <div className="right">
            <p>{Data?.quntity}</p>
            <p>{Data?.price*Data?.quntity}</p>
        </div>
    </div>
   
 
    
    </>)}

    <div className="footer">
                      <div className="totalprice">
                          <h2>total</h2>
                          <p className="cash">EGP {Totalprice} </p>
                      </div>
                      
                     
                          <div className={`btns1${cancell?"cancel":""}`} onClick={()=>cancel()}>
                              <button className={`${cancell?"cancel":""}`}>cancell order</button>

                          </div>
                     
                          <div className={`btns2 ${cancell?"notcancel":""}`} onClick={()=>cancel()}>
                              <button>cancelled</button>

                          </div>
                  


                    
                      <p className={`${cancell?"cancel":""}`}>Estimated delivery time <span>60 min</span></p>


                  </div>
   </div>
   
   
   </>
  )
}

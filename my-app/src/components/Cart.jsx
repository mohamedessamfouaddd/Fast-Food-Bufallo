/* eslint-disable no-unused-vars */
import React, { useContext, useReducer, useState } from 'react'
import Navbar from './Navbar'
import { HandleText } from '../utils/auther'
import { Link, useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const Cart = () => {
    const{count,setcount,cancell,setcancell}=useContext(HandleText)
    let {cart,setcart,order,setorder}=useContext(HandleText)
    let [increment,setincrement]=useState(false)
    const navigate =useNavigate()
    const[need,setneed]=useState(false)
    
   const Totalprice=cart.reduce((current,item)=>current+item.price*item.quntity,0)
 
 
   const getquntityincrease=(id)=>{
    setcart((currentitems)=>{
        if(currentitems.find((item)=>item.id==id)==null){
            return [...currentitems],{id,quntity:1,}
        }
        return (currentitems.map((item)=>{
            if(item.id==id){
                return {...item,quntity:item.quntity +1}
            }else{
                return item
            }
        }))
    })

   }
   const getquntitydecrese=(id)=>{
    setcart((currentitems)=>{
        if(currentitems.find((item)=>item.id==id)==null){
            return currentitems.fillter((item)=>item.id!==id)
        }
        return (currentitems.map((item)=>{
            if(item.id==id){
                return {...item,quntity:item.quntity -1}
                
            }else{
                return item
            }
        }))
    })

   }
   const remove=(id)=>{
    cart.map((Data,index)=>{
        if (Data.quntity==1&& Data.id==id) {
            setcart((currentitem)=>currentitem.filter((item)=>item.id!==id))
            setcount(count-1)
          
            
            
        }
    });

}

const getorder=(cart)=>{
    if(localStorage.getItem("token")||localStorage.getItem("tokenn")||localStorage.getItem("newtoken")){
        setorder(cart)
        setcancell(false)
        navigate("/history")

    }else{
        setneed(true)
    }


}












  return (
   <>
   <Navbar/>
 
   
   
   
   

  
   {count!==0 ?
   
   <>
     <div className="Cart-container">
   <div className="Cart">
    <h1>cart</h1>
    <div className="number">
        
      {count}
          </div>
          </div>
          </div>
      
 
    {cart.map((Data, id) => <>

        <><div className="Cart-two-container">
            <div className="cart-left">
          
             
                 <div className="photo">
                 <img src={`http://localhost:1337`+Data.img2} alt="" />
             </div>        
              
                
              
              
              
              
             
            
          
               
                <div className="title">
                    <h4>{Data?.title}, <span>{Data.Des}</span></h4>
                    <p>{Data?.Drinks}<span>{Data?.cheese}</span><span>{Data?.mash}</span><span>{Data?.piceles}</span><span>{Data?.beef}</span></p>

                </div>



            </div>
            <div className="information">
                <div className="qty">
                    <span>qty</span>
                    <span>total</span>
                </div>
                <div className="cart-right">
                    <div className="quntity">
                        <button className='decrement' onClick={() => (getquntitydecrese(Data?.id), remove(Data?.id))}>-</button>
                        <p>{Data?.quntity}</p>
                        <button className='encrement' onClick={() => getquntityincrease(Data?.id)}>+</button>
                    </div>
                    <div className="totals">
                        <p>{Data.price * Data.quntity}</p>
                    </div>
                </div>
            </div>
        </div>

        </>







    </>)}
   
   
   
   
 

 
 
                  <div className="footer">
                      <div className="totalprice">
                          <h2>total</h2>
                          <p className="cash">EGP {Totalprice}</p>
                      </div>
                      <Link to="/branches">
                          <div className="btn1">
                              <button>+ add more items</button>

                          </div>
                      </Link>


                      <div className="btn2" onClick={()=>getorder(cart)}>
                          <button>place order</button>

                      </div>
                          <p className={`need ${need?"go":""}`}>you need to creat an account</p>


                  </div>




              </>:<>
                      <div className="Cart-container">
                          <div className="Cart">
                              <h1>cart</h1>
                              <div className="number">

                                  {count}
                              </div>

                          </div>
                          <p>There are no items in your cart</p>
                          <div className="information">
                              <div className="qty">
                                  <span>qty</span>
                                  <span>total</span>
                              </div>

                          </div>
                      </div>





                  </>}














              </>
  )
}

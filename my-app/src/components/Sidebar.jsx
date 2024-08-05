/* eslint-disable no-unused-vars */
import React from 'react'

import { FaEarthAsia } from "react-icons/fa6";
import { HandleText } from '../utils/auther';
import { useContext } from 'react';
import { useEffect } from 'react';
import img3 from "../Pages/Screenshot 2024-05-23 164743.png"
import img1 from "../Pages/Screenshot 2024-05-23 144614.png"
import img4 from "../Pages/Screenshot 2024-05-23 164806.png"
import img5 from "../Pages/Screenshot 2024-05-23 164829.png"
import { Link } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";


const Sidebar = () => {
  const{show,setshow}=useContext(HandleText)
  const {login,setlogin,setcancell,setorder}=useContext(HandleText)
  const {creat,setcreat}=useContext(HandleText)
  const clear=()=>{
    
    localStorage.removeItem("token")
    localStorage.removeItem("tokenn")
    localStorage.removeItem("newtoken")
    window.location.reload()
    setcancell(true)
    setorder([])
   
    
    

    
  }



  return (
    <>
    <div className={`sidebar ${show ? "show":""}`} >
    {!localStorage.getItem("tokenn")&&!localStorage.getItem("token")&&!localStorage.getItem("newtoken")?
    <div>
        <h3>Login to unlock exclusive</h3>
       <h4>Discount points and deals</h4>
       <p onClick={()=>(setlogin(true),setshow(false))}>Login</p>
       <p onClick={()=>(setcreat(true),setshow(false))}>Create an account</p>

    

    </div>:""
     
    }
    
      

 
          <div className="lang">
            <div className="frist">
          <FaEarthAsia />
            <p className='frist-p'>Language</p>

            </div>
            <div className="photo">
            <span>العربية</span>
            <img src={img1}/>
          </div>

          </div>
          <hr/>
         <Link to="/cart" onClick={()=>setshow(false)}>
         <div className="cards">
            <img src={img3} alt="" />
         
          <span>cart</span>

          </div>
         </Link>
         
         {localStorage.getItem("tokenn")||localStorage.getItem("token")||localStorage.getItem("newtoken")?
          <Link to="/profile" onClick={()=>setshow(false)}>
          <div className="cards">
             <img src={img4} alt="" />
          
           <span>My Accunt</span>
 
           </div>
          
          </Link>:""
         
         
         
         }
        
         
          <hr />
          <div className="cards">
          <img src={img4} alt="" />
          
          <span>Feedback</span>

          </div>
        
          <div className="cards">
            <img src={img5} alt="" />
          <span className='wrong-span'>Call Support</span>

          </div>
          <hr/>
          {localStorage.getItem("tokenn")||localStorage.getItem("token")||localStorage.getItem("newtoken")?
          
          
          
          
          <div className="icon-log">
          
      <IoIosLogOut className='logout' onClick={clear}/>
          </div>:""
          
          }




        


</div>

    </>
   
  )
}

export default Sidebar
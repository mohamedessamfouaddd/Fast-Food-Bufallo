/* eslint-disable no-unused-vars */
import React, { Fragment, useContext, useState } from 'react'
import { BsCart3 } from "react-icons/bs";
import { IoMenuSharp } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import Sidebar from './Sidebar';
import { HandleText } from '../utils/auther';
import Login from './Form';
import { CreatAc } from './CreatAc';
import img1 from "../Pages/Screenshot 2024-05-23 144614.png"
import img2 from "../Pages/Screenshot 2024-05-22 192002.png"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDown } from "react-icons/io";





const Navbar = () => {
  const{show,setshow}=useContext(HandleText)
  const {login,setlogin}=useContext(HandleText)
  const {creat,setcreat}=useContext(HandleText)
  const{active,setactive}=useContext(HandleText)
  const{activetwo,setactivetwo,order,setorder,cancell,setcancell}=useContext(HandleText)
  const{count,setcount}=useContext(HandleText)
  let [activecolor,setactivecolor]=useState(false)
  const{register,LLogin}=useSelector((state)=>state.products)
  const [menus,setmenus]=useState(false)
  let {logins,setlogins}=useContext(HandleText)
  const dispatch=useDispatch()
  const navigate=useNavigate()
 
  
  


  const clear=()=>{
    
    localStorage.removeItem("token")
    localStorage.removeItem("tokenn")
    localStorage.removeItem("newtoken")
    window.location.reload()
    setcancell(true)
    setorder([])
    
   
    
    

    
  }
 
  const  navigat=()=>{
    if (localStorage.getItem("token")||localStorage.getItem("tokenn")||localStorage.getItem("newtoken")){
      navigate("/history")
      
    }

  }
 
  console.log(register);



  return (
   <Fragment>
      <nav>
        <div className="nav-container">
          <div className="left-side">
            <IoMenuSharp className="menu" onClick={() => setshow(!show)} />


            <div className="photo">
              <span>العربية</span>
              <img src={img1} />
            </div>
            <NavLink to="/cart" onClick={() => setactivecolor(true)}>

              <div className={`icon ${activecolor ? "active" : ""}`}>
                <BsCart3 className='bscart' />
                <span>cart</span>
              </div>


            </NavLink>

            <div className="number">
              {count}
            </div>
          </div>
          <div className="center">
            <img src={img2} alt="" />
          </div>
          <div className="right-side">
          <IoBag className='bag' onClick={navigat}/>
      
              
          
        
         
      
          
         

            
             
            
              { LLogin?.username&&

<div className="log-container">
<div className="hello">
<h4>HELLo,{logins?.username||LLogin?.username}</h4>
<IoIosArrowDown className='i' onClick={()=>setmenus(!menus)}/>
</div>

<div className={`culomn ${menus?"none":""}`}>
<ul>
 <Link to="/profile">
 <li>my account</li>
 </Link>
 <Link to="/history">
 <li>order history</li>
 </Link>
 <Link to="/">
 <li onClick={()=>clear()}>logout</li>
 </Link>



</ul>




</div>



</div>

 }
          
            
            
           
              { register?.user?.confirmed&&
             <div className="log-container">
             <div className="hello">
            <h4>HELLo,{register?.username||register?.user?.username}</h4>
         <IoIosArrowDown className='i' onClick={()=>setmenus(!menus)}/>
           </div>

          <div className={`culomn ${menus?"none":""}`}>
            <ul>
              <Link to="/profile" >
              <li>my account</li>
              </Link>
              <Link to="/history">
              <li>order history</li>
              </Link>
              <Link  to="/">
              <li onClick={()=>clear()} >logout</li>
              </Link>



            </ul>




            </div>
          


        </div>
              

                
            }
              { register?.username&&
             <div className="log-container">
             <div className="hello">
            <h4>HELLo,{logins?.username||register?.username}</h4>
         <IoIosArrowDown className='i' onClick={()=>setmenus(!menus)}/>
           </div>

          <div className={`culomn ${menus?"none":""}`}>
            <ul>
              <Link to="/profile" >
              <li>my account</li>
              </Link>
              <Link to="/history">
              <li>order history</li>
              </Link>
              <Link  to="/">
              <li onClick={()=>clear()} >logout</li>
              </Link>



            </ul>




            </div>
          


        </div>
              

                
            }






              { LLogin?.user?.confirmed&&
            <div className="log-container">
            <div className="hello">
           <h4>HELLo,{LLogin?.user?.username}{LLogin?.username}</h4>
        <IoIosArrowDown className='i' onClick={()=>setmenus(!menus)}/>
          </div>

         <div className={`culomn ${menus?"none":""}`}>
           <ul>
             <Link to="/profile" >
             <li>my account</li>
             </Link>
             <Link to="/history">
             <li>order history</li>
             </Link>
             <Link  to="/">
             <li onClick={()=>clear()}>logout</li>
             </Link>



           </ul>




           </div>
         


       </div>
              

                
            }
            
          









         {!localStorage.getItem("tokenn")&&!localStorage.getItem("token")&&!localStorage.getItem("newtoken")&&

          <div className="tags">

            <h3 onClick={() => (setcreat(true), setactivetwo(true), setactive(false), setlogin(false))}>Create an account</h3>
            <h3 onClick={() => (setlogin(true), setactive(true), setactivetwo(false), setcreat(false))}>Login</h3>
          </div>

         
         
         
         
         
         
         }

       
         

         
          
          
          
          
         
         
        
        

          














        </div>
      </div>
    </nav><Sidebar />
    {login ?
<Login/>
:""
    
}
{creat?
<CreatAc/>
:""

}
   
    
  



   </Fragment>
  )
}

export default Navbar
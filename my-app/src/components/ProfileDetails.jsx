/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getlogin, getregistor} from '../ReduxTolkit/Slices';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup" 
import { useParams } from 'react-router-dom';
import { AxiosConfig } from '../Api/AxiosConfig';
import { HandleText } from '../utils/auther';

const ProfileDetails = () => {
  
  let {logins,setlogins}=useContext(HandleText)
    let{register,LLogin}=useSelector((state)=>state.products)
    let [val,setval]=useState(logins?.email||register?.email||LLogin?.email)
    let [val2,setval2]=useState(logins?.username||register?.username||LLogin.username)
    const [changecolors,setchngecolors]=useState(false)
    const dispatch=useDispatch()
    const [error,seterror]=useState(false)
   




    const changee=(e)=>{
        setval2(e.target.value)
        setchngecolors(true)
    }
    const change=(e)=>{
        setval(e.target.value)
        setchngecolors(true)
    }
   
   const updateusername=async()=>{
       let jwt=LLogin?.jwt||register?.jwt
     
       
      
       
       try{
        
        const {data}= await AxiosConfig("/user/me",{
            method:"PUT",
            data:{
                username:val2,
                email:val,
            },
            
            headers:{
                Accept:"application/json",
               "Content-Type":"application/json",
                Authorization:`Bearer ${jwt}`
            }
    
           
        })
    
        
        localStorage.setItem("newtoken",JSON.stringify({
            username:data?.username,
            jwt:data?.jwt,
            email:data?.email,
            number:data?.numberr,
          }))
          window.location.reload()
          setchngecolors(false)
        
        
       
       
       return data

    }catch(error){
        seterror(true)
       return error

    }

  

   }
  
  

  
  



  return (
   <>
   <form action="" onSubmit={(e)=>updateusername(e.preventDefault())}>
    
<div className="profile-details">
<h3>profile details</h3>
<div className="fullname">
    <h4>full name</h4>
    <input type="text" name='username' value={val2} onChange={changee}/>
</div>
<div className="phone-numbers">
    <h4>phone number</h4>
    <p>0{LLogin?.number||register?.number}</p>
</div>
<div className="e-mail">
    <h4>e-mail</h4>
    <input autoComplete='false'  onChange={change} type=" email" name=" email" value={val}  />
    <p className={`${error?"true":""}`}>Email or Name not valid</p>
   
</div>
<div className="btns" >
    <button  type='submit'  className={`${changecolors?"button":""}`} >save change</button>
</div>
</div>
               
    
      





   </form>







   
   </>
  )
}

export default ProfileDetails
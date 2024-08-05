/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { Fragment,useContext,useEffect,useRef,useState } from 'react'

import {Link,NavLink, useNavigate}from "react-router-dom"
import { Formik, Form, Field, ErrorMessage, isInputEvent, validateYupSchema } from 'formik';
import { HandleText } from '../utils/auther';
import Login from './Form';
import * as yup from "yup" 
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { getregistor } from '../ReduxTolkit/Slices';


export const CreatAc = () => {
const [color,setcolor]=useState(false)
const ref=useRef()
let [reg,setreg]=useState(false)
    const{active,setactive}=useContext(HandleText)
    const{activetwo,setactivetwo}=useContext(HandleText)
    const {login,setlogin,value,setvalue}=useContext(HandleText)
    const {creat,setcreat}=useContext(HandleText)
    const{register}=useSelector((state)=>state.products)
    const dispatch=useDispatch()
    




    const change=()=>{
        if (color==true) {
            setreg(true)
            
        }
    }
   
  
   
   
   
    const initial={
        numberr:"",
        username:"",
        email:"",
        password:"",
       
    }
    useEffect(()=>{
        if (register?.user?.confirmed==true) {  
           
            window.location.reload()
            
        }
        
           
          
    
    
    
    //    eslint-disable-next-line react-hooks/exhaustive-deps
       },[register])
     
   
    const submits=(value)=>{
        setvalue( localStorage.setItem("value",JSON.stringify(value)))
       
        
        
        dispatch(getregistor(value))
        

       
    }
    
   

    
   
    


    const valids=yup.object({
        
         numberr:yup.string().required("You must enter your phone number").min(10,"Phone number is not valid").max(10,"Phone number is not valid"),
         username:yup.string().required("You must enter your UserName"),
         email:yup.string().required("You must enter your Email"),
         password:yup.string().required("You must enter your password")

    })
  
   
  



  return (
   <Fragment>
       <section>

<div className="form-container">
    <div onClick={()=>(setlogin(false),setcreat(false))} className="exit"><TiDeleteOutline /></div>

    <div className="links">
      
       <Link className={`${activetwo?"active-two":""}`} onClick={()=>(setactivetwo(true),setactive(false))}>creat an account</Link>
        
        
    </div>
    
    <Formik initialValues={initial} onSubmit={submits} validationSchema={valids} >
    {(Formik)=>(
        <Form>
            <div   className="phone">
            
            <label htmlFor="phone-three">Phone number</label>
            <Field autocomplete="false" onInput={(e)=>{if (e.target.value.length==11 ) {
                setcolor(true)
            

            }else{
                setcolor(false)
            }}}  type="number" id="phone-three" name="numberr" placeholder="02xxxxxxxxx"/>
            <ErrorMessage name='numberr'/>
           
            </div>
            {reg &&<>
              <div   className="phone">
            
              <label htmlFor="username">userName</label>
              <Field autocomplete="false" type="text" id="username" name="username" placeholder="username"/>
              <ErrorMessage name='username'/>
             
            
            
            
            </div>
              <div   className="phone">
            
              <label htmlFor="email">email</label>
              <Field autocomplete="false" type="email" id="email" name="email" placeholder="Enter Your Email"/>
              <ErrorMessage name='email'/>
             
            
            
            
            </div>
              <div   className="phone">
            
              <label htmlFor="passwords">password</label>
              <Field autocomplete="false" type="password" id="passwords" name="password" placeholder="password"/>
              <ErrorMessage name='password'/>
             
            
            
            
            </div></>
            
            }
          





           
          
            <div  className="btn-two">
                <button className={`${color?"change":""}`} type='Submitt' onClick={()=>change()}>creat an account</button>
            </div>
            <div className='space'></div>
            <p className='span' >by continuing i agree to the     <span>Terms of service</span> and  <span>Privacy policy</span></p>
           
           
    
        </Form>
    )}
    
    </Formik>
   
    
    
    
    





    
  
    

    




</div>








</section>

   </Fragment>
  )
}

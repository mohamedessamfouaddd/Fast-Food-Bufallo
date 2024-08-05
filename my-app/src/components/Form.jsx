/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Children, Fragment, useContext, useEffect, useState } from 'react'
import {Link,NavLink}from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup" 
import { HandleText } from '../utils/auther';
import { CreatAc } from './CreatAc';
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { getlogin } from '../ReduxTolkit/Slices';





const Login = () => {
   const{active,setactive}=useContext(HandleText) 
   const{activetwo,setactivetwo}=useContext(HandleText) 
   const {login,setlogin}=useContext(HandleText)
   const {creat,setcreat}=useContext(HandleText)
   const {value,setvalue}=useContext(HandleText)
    const{LLogin}=useSelector((state)=>state.products)
    const [wrong,setwrong]=useState(false)
   const dispatch=useDispatch()

  



     const [color,setcolor]=useState(false)
    let initialValues={
        identifier:"",
        password:""
    }
   
   
   
   useEffect(()=>{
    if (LLogin?.user?.confirmed==true) {  
       
        window.location.reload()
        
    }
     
  
    
       
      



   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[LLogin])
   
   
 
     
    
    const onsubmit=(values)=>{
        setvalue( localStorage.setItem("value",JSON.stringify(values)))
        dispatch(getlogin(values))
       
       
      
        if (LLogin?.user?.confirmed!==true&& !localStorage.getItem("tokenn")) {
            setTimeout(() => {
                setwrong(true)
                
            },800 );
            
        }
        
        
        
    }
   
  
    let valid=yup.object({
        identifier:yup.string().required(" You must enter your phone Email").email(),
        password:yup.string().required()
    })
  
       
   

  
 return (

 
   <Fragment>
   
    <section>

    <div className="form-container">
    <div onClick={()=>(setlogin(false),setcreat(false))} className="exit"><TiDeleteOutline /></div>
        <div className="links">
           < Link className={`${active?"active":""}`} onClick={()=>(setactive(true),setactivetwo(false))}>login</Link>
           
            
            
        </div>
     
        <Formik   initialValues={initialValues} onSubmit={onsubmit} validationSchema={valid} >
        {(Formik)=>(
            <Form>
                <div className="phone">
    
                <label htmlFor="phone">Email</label>
                <Field autocomplete="false"  type="identifier" name="identifier"  id="phone" placeholder="Enter Your Email"/>
                <ErrorMessage name="identifier"/>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <Field  autocomplete="false" type="password" name="password" id="password" placeholder="********"/>
                    <ErrorMessage name="password" />
                    
                </div>
                <p>Forget Password?</p>
                <div className="btn">
                    <button type='submit'>log in</button>
              
                </div>
                <p className={`wrong ${wrong?"none2":""}`}>Email Or Password Is Not Valid</p>
               
    
            </Form>
        )}
    
        
        </Formik>
     
       
       
        
            





      

    
    </div>
    







    </section>
   
    


   </Fragment>
  )
}


export default Login
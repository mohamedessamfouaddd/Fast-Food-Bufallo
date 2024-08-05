/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { HandleText } from '../utils/auther'
import { useSelector } from 'react-redux'
import { AxiosConfig } from '../Api/AxiosConfig'


const CahngePassword = () => {
  let[old,setold]=useState()
  let[newpass,setnewpass]=useState()
  let {value,setvalue}=useContext(HandleText)
  let{register,LLogin}=useSelector((state)=>state.products)
  const [changecolor,setchngecolor]=useState(false)
 
  
  
  const changeold=(e)=>{
    setold(e.target.value)
    if (old=== value ||old==value?.password && newpass!==undefined ) {
      setchngecolor(true)
      
        }else{
          setchngecolor(false)
        }
    
   
   
}
const changenew=(e)=>{
  setnewpass(e.target.value)
  if (old==value||old==value?.password && newpass!==undefined   ) {
setchngecolor(true)

  }else{
    setchngecolor(false)
  }
   
  
}








  const updatepassword=async()=>{
    if (newpass!==undefined && old!==undefined && old==value?.password || old==value ) {
      

      let jwt=LLogin?.jwt||register?.jwt 
      try{
       
       const {data}= await AxiosConfig("/user/me",{
           method:"PUT",
           data:{
               password:newpass
           },
           
           headers:{
               Accept:"application/json",
              "Content-Type":"application/json",
               Authorization:`Bearer ${jwt}`
           }
   
          
       })
       setvalue(localStorage.setItem("value",JSON.stringify(newpass)))
       setchngecolor(false)
       window.location.reload()
   
       
    
      
       
       
      
      
      return data
  
   }catch(error){
      
      return error
  
   }








    }
  



}
  








  return (
   <>
   <div className="password-container">
    <h1>change password</h1>
    <form action="" onSubmit={(e)=>updatepassword(e.preventDefault())}>
      <div className="old-password">
        <p>Enter old password</p>
        <input onChange={changeold} type="password" placeholder='xxxxx' value={old}/>
      </div>
      <div className="new-password">
        <p>Enter new password</p>
        <input onChange={changenew} type="password"placeholder='xxxxx' value={newpass} />
      </div>
      <div className="btn-pass">
        <button type='submit' className={`${changecolor?"button":""}`}>Save new password</button>
      </div>
     


    </form>
   </div>
  
  






 
  
   
   </>
  )
}

export default CahngePassword
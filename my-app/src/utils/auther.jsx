/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState, } from "react";
import { AxiosConfig } from "../Api/AxiosConfig";
import { useNavigate, useParams } from "react-router-dom";



const HandleText=createContext()
// eslint-disable-next-line no-unused-vars
function HandleProvider({children}) {

   // eslint-disable-next-line no-unused-vars

    // eslint-disable-next-line no-unused-vars
    const[show,setshow]=useState(false)
  const [active,setactive]=useState(false)
  const [activetwo,setactivetwo]=useState(false)
  const [login,setlogin]=useState(false)
  const [creat,setcreat]=useState(false)
  const[ape,setape]=useState(false)
  let [rout,setrout]=useState(false)
  let [routtwo,setrouttwo]=useState(false)
  const savecart=localStorage.getItem("carts")?JSON.parse(localStorage.getItem("carts")):[]
  let [cart,setcart]=useState(savecart)
  const savecount=localStorage.getItem("count")?JSON.parse(localStorage.getItem("count")):0
  let [count,setcount]=useState(savecount)
  const dessertref=useRef()
  const burgerref=useRef()
  const chikenref=useRef()
  const kidsref=useRef()
  const drinkref=useRef()
  const ketoref=useRef()
  const appref=useRef()
  const dipsref=useRef()
  const offersref=useRef()
  let [option,setoption]=useState(false)
  let [optionthree,setoptionthree]=useState(false)
  let [optionfour,setoptionfour]=useState(false)
  let [optionfive,setoptionfive]=useState(false)
  let [optionsix,setoptiosix]=useState(false)
  let [optiontwo,setoptiotwo]=useState(false)
  let [optionone,setoptionone]=useState(true)
  let [bigcola,setbigcola]=useState(false)
  let [greenlemon,setgreenlemon]=useState(false)
  let [orangejuice,setorangejuice]=useState(false)
  let [greencola,setgreencola]=useState(false)
  const savetokens=localStorage.getItem("newtoken")!==null?JSON.parse(localStorage.getItem("newtoken")):""
  const savevalue=localStorage.getItem("value")!==null?JSON.parse(localStorage.getItem("value")):""
  let [logins,setlogins]=useState(savetokens)
  let [value,setvalue]=useState(savevalue)
  const saveorder=localStorage.getItem("order")!==null?JSON.parse(localStorage.getItem("order")):""
  let[order,setorder]=useState(saveorder)
  const savecancell=localStorage.getItem("cancell")!==null?JSON.parse(localStorage.getItem("cancell")):""
  let[cancell,setcancell]=useState(savecancell)
  

   
    
 
 



  useEffect(()=>{
    localStorage.setItem("carts",JSON.stringify(cart))
  },[cart])
  useEffect(()=>{
    localStorage.setItem("count",JSON.stringify(count))
  },[count])
  useEffect(()=>{
    localStorage.setItem("order",JSON.stringify(order))
  },[order])
  useEffect(()=>{
    localStorage.setItem("cancell",JSON.stringify(cancell))
  },[cancell])








  
   

    return(
        <HandleText.Provider value={{show,setshow,active,setactive,activetwo,setactivetwo,login,setlogin,creat,setcreat,ape,setape,rout,setrout,routtwo,setrouttwo,cart,setcart,count,setcount,dessertref,chikenref,burgerref,dipsref,ketoref,kidsref,appref,drinkref,offersref,option,setoption,optionone,setoptionone,optiontwo,setoptiotwo,optionthree,setoptionthree,optionfour,setoptionfour,optionfive,setoptionfive,optionsix,setoptiosix,orangejuice,setorangejuice,bigcola,setbigcola,greenlemon,setgreenlemon,greencola,setgreencola,logins,setlogins,value,setvalue,order,setorder,cancell,setcancell,}}>{children}</HandleText.Provider>
    )
    
}
export{HandleText,HandleProvider}

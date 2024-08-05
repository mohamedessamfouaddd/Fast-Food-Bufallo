/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import Navbar from './Navbar'
import React, { useContext, useEffect, useState } from 'react'
import Bar from './Bar'
import img6 from "../Pages/13.png"
import img7 from "../Pages/weight.svg"
import img8 from "../Pages/weight-1.svg"
import img9 from "../Pages/1.1.png"
import img10 from "../Pages/102.png"
import img11 from "../Pages/103.png"
import img12 from "../Pages/104.png"
import img13 from "../Pages/105.png"
import img14 from "../Pages/100.png"
import { BsCart3 } from "react-icons/bs";
import { HandleText } from '../utils/auther'
import { useDispatch, useSelector } from 'react-redux'
import { getChikenDetails } from '../ReduxTolkit/Slices'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const ChikenDeatails = () => {
    let [see,setsee]=useState(true)
    let [seetwo,setseetwo]=useState(false)
    let [option,setoption]=useState(false)
    let [optionthree,setoptionthree]=useState(false)
    let [optionfour,setoptionfour]=useState(false)
    let [optionfive,setoptionfive]=useState(false)
    let [optionsix,setoptiosix]=useState(false)
    let [optiontwo,setoptiotwo]=useState(false)
    let [optionone,setoptionone]=useState(true)
    let [photoone,setphotoone]=useState(true)
    let [phototwo,setphototwo]=useState(false)
    let [photothree,setphotothree]=useState(false)
    const {routtwo,setrouttwo}=useContext(HandleText)
    let {bigcola,setbigcola,greenlemon,setgreenlemon,greencola,setgreencola,orangejuice,setorangejuice}=useContext(HandleText)
    let {cart,setcart}=useContext(HandleText)
    const{count,setcount}=useContext(HandleText)
    const[mashroom,setmashroom]=useState(false)
    const[pickeles,setpickeles]=useState(false)
    const[beef,setbeef]=useState(false)
    const[cheese,setcheese]=useState(false)
    const navigate=useNavigate()
    const {slug}=useParams()
    const {ChikenDetails}=useSelector((state)=>state.products)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getChikenDetails(slug))
    },[slug])
    console.log(ChikenDetails);
    useEffect(()=>{
        if (routtwo==true) {
          window.scrollTo({
            top:0
          })
          
        }
         
      },[])
      const AllProduct=[
        {price:Number(ChikenDetails?.data?.attributes?.price),rate2: Number( ChikenDetails?.data?.attributes?.rate2),rate1: Number(ChikenDetails?.data?.attributes?.rate1),brownbread:5,opption:65}
      ]

      let calc=()=> {
  
        if(phototwo==true && seetwo==true && optionthree==true){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price) + (item.rate1)+(item.brownbread)+95,0)
        return Allcalc
        
        }
        if(phototwo==true && seetwo==true && optionfive==true){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price) + (item.rate1)+(item.brownbread)+80,0)
        return Allcalc
        
        }
        if(phototwo==true && seetwo==true && optionsix==true){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price) + (item.rate1)+(item.brownbread)+100,0)
        return Allcalc
        
        }
        if(phototwo==true && seetwo==true && option==true){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price) + (item.rate1)+(item.brownbread)+65,0)
        return Allcalc
        
        }
        if(phototwo==true && seetwo==true && optionfour==true){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price) + (item.rate1)+(item.brownbread)+65,0)
        return Allcalc
        
        }
        if(phototwo==true && seetwo==true && optiontwo==true){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price) + (item.rate1)+(item.brownbread)+50,0)
        return Allcalc
        
        }
       
        if(phototwo==true && option==true){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price) + (item.rate1)+65,0)
        return Allcalc
        
        }
        if(phototwo==true && optionfive==true){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price) + (item.rate1)+80,0)
        return Allcalc
        
        }
        if(phototwo==true && optionsix==true){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price) + (item.rate1)+100,0)
        return Allcalc
        
        }
        if(phototwo==true && optiontwo==true){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price) + (item.rate1)+50,0)
        return Allcalc
        
        }
        if(phototwo==true && optionfour==true){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price) + (item.rate1)+65,0)
        return Allcalc
        
        }
       
        if(phototwo==true  && optionthree==true){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price) + (item.rate1)+95,0)
        return Allcalc
        
        }
       
        if(phototwo==true && seetwo==true){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price) + (item.rate1)+(item.brownbread),0)
        return Allcalc
        
        }
      
        if(phototwo==true  ){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price) + (item.rate1),0)
        return Allcalc
        
        }
        
        if(photoone==true && seetwo==true && option==true){
          const Allcalc1=AllProduct.reduce((current,item)=>current + (item.price)+(item.brownbread)+65,0)
        return Allcalc1
        
        }
        if(photoone==true && seetwo==true && optionsix==true){
          const Allcalc1=AllProduct.reduce((current,item)=>current + (item.price)+(item.brownbread)+100,0)
        return Allcalc1
        
        }
        if(photoone==true && seetwo==true && optionfive==true){
          const Allcalc1=AllProduct.reduce((current,item)=>current + (item.price)+(item.brownbread)+80,0)
        return Allcalc1
        
        }
        if(photoone==true && seetwo==true && optionfour==true){
          const Allcalc1=AllProduct.reduce((current,item)=>current + (item.price)+(item.brownbread)+65,0)
        return Allcalc1
        
        }
        if(photoone==true && seetwo==true && optiontwo==true){
          const Allcalc1=AllProduct.reduce((current,item)=>current + (item.price)+(item.brownbread)+50,0)
        return Allcalc1
        
        }
        if(photoone==true && seetwo==true && optionthree==true){
          const Allcalc1=AllProduct.reduce((current,item)=>current + (item.price)+(item.brownbread)+95,0)
        return Allcalc1
        
        }
        if(photoone==true && option==true ){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price)+65,0)
        return Allcalc
        
        }
        if(photoone==true && optionfive==true ){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price)+80,0)
        return Allcalc
        
        }
        if(photoone==true && optionfour==true ){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price)+65,0)
        return Allcalc
        
        }
        if(photoone==true && optionsix==true ){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price)+100,0)
        return Allcalc
        
        }
        if(photoone==true && optionfive==true ){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price)+80,0)
        return Allcalc
        
        }
        if(photoone==true && optiontwo==true ){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price)+50,0)
        return Allcalc
        
        }
        if(photoone==true && optionthree==true ){
          const Allcalc=AllProduct.reduce((current,item)=>current + (item.price)+95,0)
        return Allcalc
        
        }
        if(photoone==true && seetwo==true){
          const Allcalc1=AllProduct.reduce((current,item)=>current + (item.price)+(item.brownbread),0)
        return Allcalc1
        
        }
    
        if(photoone==true){
          const Allcalc1=AllProduct.reduce((current,item)=>current + (item.price),0)
        return Allcalc1
        
        }
       
        if(photothree==true && seetwo==true&&option==true){
          const Allcalc2=AllProduct.reduce((current,item)=>current + (item.price)+(item.rate2)+(item.brownbread)+65,0)
        return Allcalc2
      
        }
        if(photothree==true && seetwo==true&&optionfour==true){
          const Allcalc2=AllProduct.reduce((current,item)=>current + (item.price)+(item.rate2)+(item.brownbread)+65,0)
        return Allcalc2
      
        }
        if(photothree==true && seetwo==true&&optiontwo==true){
          const Allcalc2=AllProduct.reduce((current,item)=>current + (item.price)+(item.rate2)+(item.brownbread)+50,0)
        return Allcalc2
      
        }
        if(photothree==true && seetwo==true&&optionthree==true){
          const Allcalc2=AllProduct.reduce((current,item)=>current + (item.price)+(item.rate2)+(item.brownbread)+95,0)
        return Allcalc2
      
        }
        if(photothree==true && seetwo==true&&optionsix==true){
          const Allcalc2=AllProduct.reduce((current,item)=>current + (item.price)+(item.rate2)+(item.brownbread)+100,0)
        return Allcalc2
      
        }
        if(photothree==true && seetwo==true&&optionfive==true){
          const Allcalc2=AllProduct.reduce((current,item)=>current + (item.price)+(item.rate2)+(item.brownbread)+80,0)
        return Allcalc2
      
        }
        if(photothree==true && seetwo==true){
          const Allcalc2=AllProduct.reduce((current,item)=>current + (item.price)+(item.rate2)+(item.brownbread),0)
        return Allcalc2
      
        }
        if(photothree==true &&option==true ){
          const Allcalc2=AllProduct.reduce((current,item)=>current + (item.price)+(item.rate2)+65,0)
        return Allcalc2
      
        }
        if(photothree==true &&optionfour==true ){
          const Allcalc2=AllProduct.reduce((current,item)=>current + (item.price)+(item.rate2)+65,0)
        return Allcalc2
      
        }
        if(photothree==true &&optiontwo==true ){
          const Allcalc2=AllProduct.reduce((current,item)=>current + (item.price)+(item.rate2)+50,0)
        return Allcalc2
      
        }
        if(photothree==true &&optionthree==true ){
          const Allcalc2=AllProduct.reduce((current,item)=>current + (item.price)+(item.rate2)+95,0)
        return Allcalc2
      
        }
        if(photothree==true &&optionsix==true ){
          const Allcalc2=AllProduct.reduce((current,item)=>current + (item.price)+(item.rate2)+100,0)
        return Allcalc2
      
        }
        if(photothree==true &&optionfive==true ){
          const Allcalc2=AllProduct.reduce((current,item)=>current + (item.price)+(item.rate2)+80,0)
        return Allcalc2
      
        }
      
        if(photothree==true ){
          const Allcalc2=AllProduct.reduce((current,item)=>current + (item.price)+(item.rate2),0)
        return Allcalc2
      
        }
    
      
    
    
    
      }
     
      
      const finalcalc=()=>{

        if (beef==true && mashroom==false && cheese==false && pickeles==false) {
        return calc()+60
        
          
        
        }
        if (pickeles==true && mashroom==false && cheese==false && beef==false) {
        return calc()+5
        
          
        
        }
        if (cheese==true && mashroom==false && beef==false && pickeles==false) {
        return calc()+15
        
          
        
        }
        if (mashroom==true && beef==false && cheese==false && pickeles==false) {
        return calc()+20
        
          
        
        }
        if (beef==true && mashroom==true && cheese==false && pickeles==false) {
        return calc()+80
        
          
        
        }
        if (pickeles==true && mashroom==true && cheese==false && beef==false) {
        return calc()+25
        
          
        
        }
        if (cheese==true && mashroom==true && beef==false && pickeles==false) {
        return calc()+35
        
          
        
        }
        if (mashroom==true && beef==true && cheese==false && pickeles==false) {
        return calc()+80
        
          
        
        }
        if (beef==true && mashroom==true && cheese==true && pickeles==false) {
        return calc()+95
        
          
        
        }
        if (pickeles==true && mashroom==true && cheese==true && beef==false) {
        return calc()+40
        
          
        
        }
        if (cheese==true && mashroom==true && beef==true && pickeles==false) {
        return calc()+95
        
          
        
        }
        if (mashroom==true && beef==true && cheese==true && pickeles==false) {
        return calc()+95
        
          
        
        }
        if (beef==true && mashroom==true && cheese==true && pickeles==true) {
        return calc()+100
        
          
        
        }
        if (pickeles==true && mashroom==true && cheese==true && beef==true) {
        return calc()+100
        
          
        
        }
        if (cheese==true && mashroom==true && beef==true && pickeles==true) {
        return calc()+100
        
          
        
        }
        if (mashroom==true && beef==true && cheese==true && pickeles==true) {
        return calc()+100
        
          
        
        }
        if (beef==true && mashroom==false && cheese==true && pickeles==true) {
        return calc()+80
        
          
        
        }
        if (pickeles==true && mashroom==false && cheese==true && beef==true) {
        return calc()+80
        
          
        
        }
        if (cheese==true && mashroom==false && beef==true && pickeles==true) {
        return calc()+80
        
          
        
        }
        if (mashroom==true && beef==false && cheese==true && pickeles==true) {
        return calc()+40
        
          
        
        }
        if (beef==true && mashroom==true && cheese==false && pickeles==true) {
        return calc()+85
        
          
        
        }
        if (pickeles==true && mashroom==true && cheese==false && beef==true) {
        return calc()+85
        
          
        
        }
        if (cheese==true && mashroom==true && beef==false && pickeles==true) {
        return calc()+40
        
          
        
        }
        if (mashroom==true && beef==true && cheese==false && pickeles==true) {
        return calc()+85
        
          
        
        }
        if (beef==true && mashroom==false && cheese==false && pickeles==true) {
        return calc()+65
        
          
        
        }
        if (pickeles==true && mashroom==false && cheese==false && beef==true) {
        return calc()+65
        
          
        
        }
        if (cheese==true && mashroom==false && beef==false && pickeles==true) {
        return calc()+20
        
          
        
        }
        if (mashroom==true && beef==false && cheese==false && pickeles==true) {
        return calc()+25
        
          
        
        }
        if (beef==true && mashroom==true&& cheese==true && pickeles==false) {
        return calc()+95
        
          
        
        }
        if (pickeles==true && mashroom==true&& cheese==true && beef==false) {
        return calc()+40
        
          
        
        }
        if (cheese==true && mashroom==true&& beef==true && pickeles==false) {
        return calc()+95
        
          
        
        }
        if (mashroom==true && beef==true&& cheese==true && pickeles==false) {
        return calc()+95
        
          
        
        }
        
        if (beef==true && mashroom==false&& cheese==true && pickeles==false) {
        return calc()+75
        
          
        
        }
        if (pickeles==true && mashroom==false&& cheese==true && beef==false) {
        return calc()+20
        
          
        
        }
        if (cheese==true && mashroom==false&& beef==true && pickeles==false) {
        return calc()+75
        
          
        
        }
        if (mashroom==true && beef==false&& cheese==true && pickeles==false) {
        return calc()+35
        
          
        
        }

        
      
      
      
      else{
        return calc()
      }
      }
    
    
      const Allcart=[
        {img:ChikenDetails?.data?.attributes?.img?.data[0]?.attributes?.url,title:ChikenDetails?.data?.attributes?.title,description:ChikenDetails?.data?.attributes?.discription,price:finalcalc(),id:Math.random(),quntity:1,img2:optionone==false? ChikenDetails?.data?.attributes?.img2?.data[0]?.attributes?.url:ChikenDetails?.data?.attributes?.img?.data[0]?.attributes?.url,Drinks:[bigcola?"Big Cola":"",greencola?"green cola":"",greenlemon?"green lemon":"",orangejuice?"orange juice":""],Des:[option?"Onion Rings Combo":"",optionthree?"Cheesy Fries Combo (French Fries)":"",optionsix?"Cheesy Fries Combo (Diablo Fries)":"",optiontwo?"French Fries Combo":"",optionfour?"Diablo Fries Combo":"",optionfive?"Blanco Fries Combo (French Fries)":""],beef:[beef?",Beef Bacon":""],cheese:[  cheese?",Cheddar Cheese":""],piceles:[pickeles?",Pickles":""],mash:[ mashroom?",Sautéed Mushroom":""]},
      ]


      const addtocard=([Allcart])=>{
        if (option==true||optiontwo==true||optionthree==true||optionfour==true||optionfive==true||optionsix==true) {
          if (orangejuice==true||bigcola==true||greencola==true||greenlemon==true) {
      
            setcart([...cart,Allcart])
            navigate("/cart")
            setcount(count+1)
            ,setbigcola(false),setgreencola(false),setgreenlemon(false),setorangejuice(false)
          }
          
        }else{
          setcart([...cart,Allcart])
          navigate("/cart")
          setcount(count+1)
          setbigcola(false),setgreencola(false),setgreenlemon(false),setorangejuice(false)

      
        } 
      }
      





    
  return (
    <>
    <Navbar/>
    <div className="Burger-details">
    <div className="product">
        <div className="photo">
            <img src={`http://localhost:1337`+ChikenDetails?.data?.attributes?.img?.data[0]?.attributes?.url}alt="" />
        </div>
        <div className="Description">
            <h3>{ChikenDetails?.data?.attributes?.title}</h3>
            <p>{ChikenDetails?.data?.attributes?.description}</p>
        </div>
    </div>
   <div className="size">
    <h4>size</h4>

  <form >
        <div className="white-bread" onClick={()=>(setsee(true),((setseetwo(false))))}>

    
      <div className="radio" >
       
        
        <span className="see"></span>
        
     

      </div>
       
        <label className="strips" htmlFor="">strips (EGP {ChikenDetails?.data?.attributes?.price}) </label>
        </div>
      
        
  
      </form>

   </div>


    <div className="bread">
      <h4>bread</h4>
      <form >
        <div className="white-bread" onClick={()=>(setsee(true),((setseetwo(false))))}>

    
      <div className="radio" >
        {see&&
        
        <span className="see"></span>
        
        }

      </div>
       
        <label className={`${see ?"label-color":""}`} htmlFor="white">white bread </label>
        </div>
        <div className="brown-bread" onClick={()=>(setseetwo(true),setsee(false))}>

       
        
      <div className="radio">
        {seetwo &&
        
      <span className="see"></span>
        }

</div>
        <label className={`${seetwo?"label-color":""}`} htmlFor="brown">brown bread (5Egp)</label>
        </div>
      </form>
    </div>
    <div className="combo-option">
      <h4>combo options</h4>
      <div className="choose-options">
        <div className={`option-one ${optionone && "Choose-option"}`} onClick={()=>(setoption(false),setoptionthree(false),setoptionfour(false),setoptionfive(false),setoptiosix(false),setoptiotwo(false),setoptionone(true),setbigcola(false),setgreencola(false),setgreenlemon(false),setorangejuice(false))}>
        <div className="photo">
          <img src={`http://localhost:1337`+ChikenDetails?.data?.attributes?.img?.data[0]?.attributes?.url} alt="" />
        </div>
        <div className="description">
          <p>choose sandwitch only</p>
        </div>
    
        </div>
        <div className={`option-two ${option && "Choose-option"}`} onClick={()=>(setoption(true),setoptionthree(false),setoptionfour(false),setoptionfive(false),setoptiosix(false),setoptiotwo(false),setoptionone(false))}>
        <div className="photo">
          <img src={img9} alt="" />
        </div>
        <div className="description">
          <h3>Onion Rings Combo
Onion Rings Combo</h3>
          <p>

          Onion Rings, soft drink, and a dipping sauce (EGP 65)</p>
        </div>
    
        </div>
        <div className={`option-two ${optionthree&& "Choose-option"}`} onClick={()=>(setoption(false),setoptionthree(true),setoptionfour(false),setoptionfive(false),setoptiosix(false),setoptiotwo(false),setoptionone(false))}>
        <div className="photo">
          <img src={img10} alt="" />
        </div>
        <div className="description">
          <h3>Cheesy Fries Combo (French Fries)</h3>
          <p>

          Cheesy French Fries, soft drink and a dipping sauce (EGP 95)</p>
        </div>
    
        </div>
        <div className={`option-two ${optionfour&& "Choose-option"}`} onClick={()=>(setoption(false),setoptionthree(false),setoptionfour(true),setoptionfive(false),setoptiosix(false),setoptiotwo(false),setoptionone(false))}>
        <div className="photo">
          <img src={img11} alt="" />
        </div>
        <div className="description">
          <h3>Diablo Fries Combo</h3>
          <p>

          Diablo fries, Soft Drink, and a dipping sauce (EGP 65)</p>
        </div>
    
        </div>
        <div className={`option-two ${optionfive&& "Choose-option"}`} onClick={()=>(setoption(false),setoptionthree(false),setoptionfour(false),setoptionfive(true),setoptiosix(false),setoptiotwo(false),setoptionone(false))}>
        <div className="photo">
          <img src={img12} alt="" />
        </div>
        <div className="description">
          <h3>Blanco Fries Combo (French Fries)</h3>
          <p>

          Blanco French Fries, soft drink, and a dipping sauce (EGP 80)</p>
        </div>
    
        </div>
        <div className={`option-two ${optionsix&& "Choose-option"}`}  onClick={()=>(setoption(false),setoptionthree(false),setoptionfour(false),setoptionfive(false),setoptiosix(true),setoptiotwo(false),setoptionone(false))}>
        <div className="photo">
          <img src={img13} alt="" />
        </div>
        <div className="description">
          <h3>Cheesy Fries Combo (Diablo Fries)</h3>
          <p>

          Cheesy Diablo Fries, Soft Drink and A Dipping Sauce (EGP 100)</p>
        </div>
    
        </div>
        <div className={`option-two ${optiontwo&& "Choose-option"}`}  onClick={()=>(setoption(false),setoptionthree(false),setoptionfour(false),setoptionfive(false),setoptiosix(false),setoptiotwo(true),setoptionone(false))}>
        <div className="photo">
          <img src={img14} alt="" />
        </div>
        <div className="description">
          <h3>French Fries Combo</h3>
          <p>
French Fries, Soft Drink, and a Dipping Sauce (EGP 50)</p>
        </div>
    
        </div>



    </div>

    { optionsix || option || optiontwo ||optionfour ||optionfive || optionthree ?
    
    <div className="softdrinks">
      <h2>drinks</h2>
      <form >
        <div className="bigcola" onClick={()=>(setbigcola(true),setgreencola(false),setgreenlemon(false),setorangejuice(false))} >

    
      <div className="radio" >
        {bigcola &&
        
        
        
        <span className="see"></span>
        
        }
     
        
     

      </div>
       
        <label htmlFor="bigcola">big cola </label>
        </div>
        <div className="greenlemon" onClick={()=>(setbigcola(false),setgreencola(false),setgreenlemon(true),setorangejuice(false))}>

       
        
      <div className="radio">
        {greenlemon &&
        
      <span className="see"></span>
        }
      
        
      

</div>
        <label htmlFor="greenlemon">green lemon</label>
        </div>
        <div className="greenlemon" onClick={()=>(setbigcola(false),setgreencola(false),setgreenlemon(false),setorangejuice(true))}>

       
        
      <div className="radio">
      
        {orangejuice &&
        
        
      <span className="see"></span>
        }
      

</div>
        <label htmlFor="greenlemon">orange juice</label>
        </div>
        <div className="greenlemon" onClick={()=>(setbigcola(false),setgreencola(true),setgreenlemon(false),setorangejuice(false))}>

       
        
      <div className="radio">
        {

          greencola &&
      <span className="see"></span>
        }
      
        
      

</div>
        <label htmlFor="greenlemon">green cola</label>
        </div>
      </form>






    </div>:""

    
    
    
    }








 
    



     </div>
     <div className="extra">
      <h3>extras</h3>
      <form action="">
        <div className="beef">

        <input id='beef' type="checkbox" onClick={()=>setbeef(!beef)}/>
        <label htmlFor="beef">Beef Bacon (EGP 60) </label>
        </div>
        <div className="mashroom">

        <input id='mashroom' type="checkbox" onClick={()=>setmashroom(!mashroom)}/>
        <label htmlFor="mashroom">Sautéed Mushroom (EGP 20) </label>
        </div>
        <div className="cheese">

        <input id='cheese' type="checkbox" onClick={()=>setcheese(!cheese)}/>
        <label htmlFor="cheese">Cheddar Cheese (EGP 15) </label>
        </div>
        <div className="pickeles">

        <input id='pickeles' type="checkbox" onClick={()=>setpickeles(!pickeles)}/>
        <label htmlFor="pickeles">Pickles (EGP 5) </label>
        </div>
      </form>
     </div>
     <div className="response">

 <div className="total">
    
      <div className="btn" onClick={()=>addtocard(Allcart)}>
      <BsCart3 className='i' />
        <button >add to card</button>
        </div>
        <div className="price">
          <h2>total</h2>
          <p>EGP{finalcalc()} </p>
        </div>

      
     
      </div>

     </div>
    
     </div>
    
    </>
  )
}

export default ChikenDeatails
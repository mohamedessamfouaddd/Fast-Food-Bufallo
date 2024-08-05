/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {AxiosConfig}from "../Api/AxiosConfig"
import { Await, json } from "react-router-dom";
import KetoDetails from "../components/KetoDetails";
import { useEffect } from "react";
import { DessertDetails } from "../components/DessertDetails";

// eslint-disable-next-line no-unused-vars

 const savetoken=
     localStorage.getItem("token")!==null?JSON.parse(localStorage.getItem("token")):""
        
    

 const savetokenn=localStorage.getItem("tokenn")!==null?JSON.parse(localStorage.getItem("tokenn")):""
 
const initialState={
    productData:[],
    BarData:[],
    Burgerss:[],
    cardData:[],
    Offerss:[],
    Chenkss:[],
    kidss:[],
    Drinkss:[],
    Ketoss:[],
    Dipss:[],
    Ape:[],
    Deserts:[],
    ProductDetails:{},
    ChikenDetails:{},
    KetoDetailss:{},
    register:savetoken,
    LLogin:savetokenn,
    KidsDetails:{},
   DessertDetail:{},
    errors:null,
    isloading:false
};



const getAllIcons=createAsyncThunk("GetIcons",async()=>{
    try{
        const{data}=await AxiosConfig("photos?populate=*")
        return data
    }
    
    
    catch(error){
        return error
    }
})
const getregistor=createAsyncThunk("registor",async(userdata)=>{
    try{
        const{data}=await AxiosConfig("/auth/local/register",{
            method:"POST",
            data:userdata

        })
       
          localStorage.setItem("token",JSON.stringify({
            username:data?.user?.username,
            jwt:data?.jwt,
            number:data?.user?.numberr,
            email:data?.user?.email

          }))
        return data
    }catch(error){
        return error
    }
})

const getlogin=createAsyncThunk("login",async(userdata)=>{
    try{
        const{data}=await AxiosConfig("/auth/local",{
            method:"POST",
            data:userdata

        })
       
          localStorage.setItem("tokenn",JSON.stringify({
            username:data?.user?.username,
            jwt:data?.jwt,
            email:data?.user?.email,
            number:data?.user?.numberr,
          }))
        return data
    }catch(error){
        return error
    }
})


      
       
    

const getkid=createAsyncThunk("Get-kid",async()=>{
    try{
        const{data}=await AxiosConfig("kids?populate=*")
        return data
    }catch(error){
        return error
    }
})
const getAllChiken=createAsyncThunk("Get-Chiken",async()=>{
   
    try{
        const{data}=await AxiosConfig("Chikens?populate=*")
        
        return data
    }catch(error){
        return error
    }
})
const getAllDessert=createAsyncThunk("Get-Dessert",async()=>{
    try{
        const{data}=await AxiosConfig("desserts?populate=*")
        return data
    }catch(error){
        return error
    }
})
const prodectdetails=createAsyncThunk("product-details",async(slug)=>{
    try{
        const{data}=await AxiosConfig({
            url:`Burgers/${slug}?populate=*`
        })
        return data
    }catch(error){
        return error
    }
})
const getChikenDetails=createAsyncThunk("Chiken-details",async(slug)=>{
    try{
        const{data}=await AxiosConfig({
            url:`chikens/${slug}?populate=*`
        })
        return data
    }catch(error){
        return error
    }
})
const getDessertDetails=createAsyncThunk("Dessert-details",async(slug)=>{
    try{
        const{data}=await AxiosConfig({
            url:`desserts/${slug}?populate=*`
        })
        return data
    }catch(error){
        return error
    }
})
const getKetoDetalis=createAsyncThunk("keto-details",async(slug)=>{
    try{
        const{data}=await AxiosConfig({
            url:`ketos/${slug}?populate=*`
        })
        return data
    }catch(error){
        return error
    }
})
const getKidsDetalis=createAsyncThunk("kids-details",async(slug)=>{
    try{
        const{data}=await AxiosConfig({
            url:`Kids/${slug}?populate=*`
        })
        return data
    }catch(error){
        return error
    }
})
const getAllAppetizer=createAsyncThunk("Get-Appetizer",async()=>{
    try{
        const{data}=await AxiosConfig("appetizers?populate=*")
        return data
    }catch(error){
        return error
    }
})
const getAllKetos=createAsyncThunk("Get-keto",async()=>{
    try{
        const{data}=await AxiosConfig("ketos?populate=*")
        return data
    }catch(error){
        return error
    }
})
const getAllDips=createAsyncThunk("Get-Dips",async()=>{
    try{
        const{data}=await AxiosConfig("dips?populate=*")
        return data
    }catch(error){
        return error
    }
})
// eslint-disable-next-line react-refresh/only-export-components
const GetAllCards=createAsyncThunk("Get-All-Cards",async()=>{
    try{
        const {data}=await AxiosConfig(`swipers?populate=*`)
        return data
    }catch(error){
        return error
    }
})
const GetAlloffers=createAsyncThunk("Get-Offers",async()=>{
    try{
        const {data}=await AxiosConfig(`Offers?populate=*`)
        return data

    }catch(error){
        return error
    }
    
})
const GetAllBurger=createAsyncThunk("Get-Burgers",async()=>{
    try{
        const {data}=await AxiosConfig(`Burgers?populate=*`)
        return data

    }catch(error){
        return error
    }
    
})
// eslint-disable-next-line no-unused-vars
const getAllProduct=createAsyncThunk("get-all-product",async()=>{
    try{
        const {data}=await AxiosConfig(`images?populate=*`)
        return data
    }catch (error){
       return error

    }

})
const getAllDrinks=createAsyncThunk("get-all-Drinks",async()=>{
    try{
        const {data}=await AxiosConfig(`Drinks?populate=*`)
        return data
    }catch (error){
       return error

    }

})
const getAllProductSlice=createSlice({
    initialState,
    name:getAllProduct,
    extraReducers:(builder)=>{
        builder.addCase(getAllProduct.fulfilled,(state,action)=>{
            state.productData=action.payload;
            

        })
        builder.addCase(getAllProduct.rejected,(state,action)=>{
          state.errors=action.payload 

        })
        builder.addCase(getAllIcons.fulfilled,(state,action)=>{
            state.BarData=action.payload;
        })
        builder.addCase(getAllIcons.rejected,(state,action)=>{
            state.errors=action.payload;
        })
        builder.addCase(GetAllCards.fulfilled,(state,action)=>{
            state.cardData=action.payload;
        })
        builder.addCase(GetAllCards.rejected,(state,action)=>{
            state.errors=action.payload
        })
        builder.addCase(GetAlloffers.fulfilled,(state,action)=>{
            state.Offerss=action.payload
        })
        builder.addCase(GetAllBurger.fulfilled,(state,action)=>{
            state.Burgerss=action.payload
        })
        builder.addCase(GetAllBurger.rejected,(state,action)=>{
            state.errors=action.error.message
        })
        builder.addCase(getAllChiken.fulfilled,(state,action)=>{
            state.Chenkss=action.payload;
        })
       
        builder.addCase(getAllChiken.rejected,(state,action)=>{
            state.errors=action.error.message;
        })
        builder.addCase(getkid.fulfilled,(state,action)=>{
            state.kidss=action.payload;
            
        })
        builder.addCase(getAllDrinks.fulfilled,(state,action)=>{
            state.Drinkss=action.payload
        })
        builder.addCase(getAllKetos.fulfilled,(state,action)=>{
            state.Ketoss=action.payload;
        })
        builder.addCase(getAllDips.fulfilled,(state,action)=>{
            state.Dipss=action.payload
        })
        
        builder.addCase(getAllAppetizer.fulfilled,(state,action)=>{
            state.Ape=action.payload
        })
        builder.addCase(getAllDessert.fulfilled,(state,action)=>{
            state.Deserts=action.payload
            
        })
        builder.addCase(prodectdetails.fulfilled,(state,action)=>{
            state.ProductDetails=action.payload
        })
        builder.addCase(getChikenDetails.fulfilled,(state,action)=>{
            state.ChikenDetails=action.payload;
        })
        builder.addCase(getKetoDetalis.fulfilled,(state,action)=>{
            state.KetoDetailss=action.payload;
        })
        builder.addCase(getregistor.fulfilled,(state,action)=>{
            state.register=action.payload
        })
        
        builder.addCase(getregistor.rejected,(state,action)=>{
            state.errors=action.error
        })
        builder.addCase(getlogin.fulfilled,(state,action)=>{
            state.LLogin=action.payload
        })
        
        builder.addCase(getlogin.rejected,(state,action)=>{
            state.errors=action.error
        })
      builder.addCase(getKidsDetalis.fulfilled,(state,action)=>{
        state.KidsDetails=action.payload;
      })
        
      builder.addCase(getDessertDetails.fulfilled,(state,action)=>{
        state.DessertDetail=action.payload;
      })
        
       
        

    }
        
    
    
    
})
const getAllProductreducer=getAllProductSlice.reducer;
export{getAllProduct,getAllProductreducer,getAllIcons,GetAllCards,GetAlloffers,GetAllBurger,getAllChiken,getkid,getAllDrinks,getAllKetos,getAllDips,getAllAppetizer,getAllDessert,prodectdetails,getChikenDetails,getKetoDetalis,getregistor,getlogin,getKidsDetalis,getDessertDetails}
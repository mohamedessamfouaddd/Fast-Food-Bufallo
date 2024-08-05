/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Form } from 'formik'
import React, { useContext } from 'react'
import Bar from './Bar'


const Card = ({ productData}) => {


 
  return (
    <>
  

 <div className="photo-container">
    

        <div className="photo">
            <img src={ `http://localhost:1337`+productData.photo.data[0].attributes.url} alt="" />
          
         
        </div>
      

    </div>
    


    
    
    </>
  )
}

export default Card
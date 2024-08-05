/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import stars from "../Pages/footer-stars.png"
import buffalo from "../Pages/buffalo-app-CTA-img.png"
import screen from "../Pages/Screenshot 2024-05-22 192002.png"

const Footer = () => {
    const navigatee=useNavigate()
  return (
    <>

    
    <div className="footer-contaier">
        <div className="frist-footer">
            <p>Revolutionize Your</p>
            <p>Food Delivery Experience</p>

        </div>
        <div className="second-footer">
    
            <div className="photo">
                <img src={stars} alt="" />
            </div>
         
            <div className="space-container">
            
         
            <div className="rights">


       
            <h1>DOWNLOAD OUR MOBILE APPLICATION NOW!!!</h1>
            <p>Supercharge your experience with our mobile app! Unbeatable deals, personalized food suggestions, easy address management, loyalty points, and a user-friendly interface.</p>

            <div className="btnss">
                <a href='https://play.google.com/store/apps/details?id=com.thebuffaloburger&pli=1' target='_blank'>
                <button>
           <div className="icon">
<FaGooglePlay className='google' />

</div>

                    <div className="flex">
                    <span>get in on</span> 
                   google play

                    </div>
                    
                     
                     </button>




                </a>



          

                     <a href="https://apps.apple.com/us/app/buffalo-burger/id1661414221" target='_blank'>
                     <button>  
                <div className="icon">
                <FaApple className='apple' />  

                </div>
                <div className="flex">
                    <span>download on the</span>
                    
                    app store
                    
                    </div>
                    
                    </button>
                     
                     
                     
                     </a>  

      

               
            </div>
      



            </div>
            <div className="leftss">
           
                <div className="photo">

                <img src={buffalo} alt="" />
                </div>
            </div>
            

          


            </div>

          
          
        </div>
      
       
    </div>
    <div className="last-footer">
 
        <hr/>
            <div className="photo">
                <img src={screen} alt="" />
            </div>
            <div className="parent-container">
                <div className="le">
                    <ul>
                        <Link to="/branches" >
                        <li>menu</li>
                        </Link>
                        <Link to="">
                        <li>home</li>
                        </Link>
                        <Link to="/cart">
                        <li>cart details</li>
                        </Link>
                        <Link>
                        <li>loyalty</li>
                        </Link>
                    </ul>
                </div>
                <div className="center">
                    <ul>
                        <Link>
                        <li>about us</li>
                        </Link>
                        <Link>
                        <li>our branches</li>
                        </Link>
                        <Link>
                        <li>privacy policy</li>
                        </Link>
                        <Link>
                        <li>terms and conditions</li>
                        </Link>
                    </ul>
                </div>
                <div className="ri">
                    <p>talk to us</p>
                    <h4>19914</h4>
                </div>


            </div>

             <div className="site">
               <a href='https://www.facebook.com' target='_blank'><FaFacebook /></a>
               <a href='https://www.instagram.com' target='_blank'><RxInstagramLogo /></a>
               <a href='https://www.twitter.com' target='_blank'><BsTwitterX /></a>
               <a href='https://www.linkedin.com' target='_blank'><BsLinkedin /></a>
            </div>
          

        </div>
      
        
    
    </>
  )
}

export default Footer
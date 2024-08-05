/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import { NavLink, Outlet } from 'react-router-dom'



const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className="account">
        <h2>account</h2>
    </div>
    <div className="profile-container">
        <div className="headlines">
            <NavLink to="" end={"true"}>
                <h4>profile details</h4>
            </NavLink>
            <NavLink to="changepassword">
                <h4>change password</h4>
            </NavLink>
        </div>
        <Outlet></Outlet>
    </div>
   





   
    </>
  )
}

export default Profile
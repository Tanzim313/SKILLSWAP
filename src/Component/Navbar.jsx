import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Authprovider/AuthContext";


const Navbar =()=>{

    const {user,signOutUser} = use(AuthContext);

    const handleSignOut =()=>{
        signOutUser()
        .then(()=>{})
        .catch(error=>{
            console.log(error)
        })
    }

    const links = <>
            { !user && <>
                        <li className="text-xl font-bold"><NavLink to="/home">Home</NavLink></li>
                        <li className="text-xl font-bold"><NavLink to="/login">Login</NavLink></li>
                        <li className="text-xl font-bold"><NavLink to="/register">Register</NavLink></li>
                        
                </>
            }
            {
                user && <>
                        <li className="text-xl font-bold"><NavLink to="/profile">My Profile</NavLink></li>
                        <li className="text-xl font-bold"><NavLink to="/home">Home</NavLink></li>
                </>
            }
    </>

    return(

        <div>
                <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">SKILLSWAP</a>
  </div>
  <div className="navbar-center hidden sm:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end">
   {user?
   <div className="flex gap-x-4 items-center">

<div className="tooltip tooltip-bottom" data-tip={user.displayName}>
   <img className="w-[50px] h-[50px] rounded-full border-2 border-b-cyan-800 border-e-amber-400 border-l-blue-400 " src={user.photoURL} alt="" /> 
</div>

    <a onClick={handleSignOut} className="btn btn-primary">Signout</a>
   </div>
   :<Link to="/login">Login</Link>}
  </div>
</div>
        </div>

    )
}

export default Navbar;
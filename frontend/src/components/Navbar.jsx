import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    
    const navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)
    // const [token, setToken] = useState(localStorage.getItem("token"))
    const token = localStorage.getItem("token")

  return (
    <div className='flex items-center justify-between text-sm pt-2 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>{navigate("/")}} className=' mx-6 w-48 cursor-pointer' src="https://suvidhafoundationedutech.org/img/SuvidhaLogo.png"  alt="" />
      <ul className='hidden md:flex items-start gap-5 font-sans text-lg'>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 w-3/3 m-auto bg-purple-300 hidden'/>
        </NavLink>
        <NavLink to='/'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 w-3/3 m-auto bg-purple-300 hidden'/>
        </NavLink>
        <NavLink to='/'>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 w-3/3 m-auto bg-purple-300 hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token ? 
            <div className='group flex items-center gap-2 cursor-pointer relative'>
                <img className='w-12 mx-4 rounded-full' src='https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' alt="" />
                <img className='w-7 rounded-full'  alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 rounded flex flex-col gap-2 p-2'>
                        <p onClick={()=>{navigate("/")}} className='hover:text-purple-500 text-lg font-semibold cursor-pointer'>My Profile</p>

                        <p onClick={()=>{localStorage.setItem("token","");navigate("/login")}} className='hover:text-purple-500 text-lg font-semibold cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div> : 
            <button onClick={()=>{navigate("/login"); setToken(token)}} className='bg-purple-300 text-black py-3 px-8 mx-8 rounded-full font-semibold hidden md:block'>Create Account</button>
        }
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { navlink } from '../utils/link'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full h-16 p-3 flex justify-between items-center bg-black'>
      <div>
        <h1 className='text-white font-bold text-3xl'>Redux Concept</h1>
      </div>
      <div>
        <ul className='flex justify-between items-center p-1 space-x-10'>
        {
          navlink.map((link)=>(
            <li key={link.id} className='text-white font-semibold text-xl'>
              <NavLink to={link.link}>{link.name}</NavLink>
              
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
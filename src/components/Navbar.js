
import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return(
        <div className='bg-gray-200 h-[10%] p-1 flex content-around'>
            <img className="-my-16 h-[200px] w-[200px]" src={logo} alt="logo" />
            {/* <div className=' space-x-12 my-4 mr-40 ml-5'>
                Logo
            </div> */}
            <div>

            <ul className='flex space-x-12 my-4 ml-96'>
               <li className='cursor-pointer'><Link to='/'>Home</Link></li>
                <li className='cursor-pointer'><Link to='/about'>About</Link></li>
                <li className='cursor-pointer'><Link to='allProblems'>Real Time Feed</Link></li>
                <li className='cursor-pointer'><Link to='contact'>Contact Us</Link></li>

              
                <div className='cursor-pointer'>
                    <button className='mr-2 bg-blue-400 p-2 rounded-lg cursor-pointer'><Link to='login'>Login</Link></button>
                    <button className='bg-blue-400 p-2 rounded-lg cursor-pointer'><Link to='signup'>Signup</Link></button>
                </div>
            </ul>
            </div>
        </div>
    )
}

export default Navbar;

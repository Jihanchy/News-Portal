import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1'></div>
            <div className='flex space-x-3 flex-1'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className='flex gap-3 items-center'>
                <img className='h-9' src={profile} alt="" />
                <button className='btn btn-neutral btn-sm text-white rounded-none px-7'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;
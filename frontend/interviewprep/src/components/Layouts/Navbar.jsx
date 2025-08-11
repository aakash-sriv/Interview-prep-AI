import React from 'react';
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import { Link } from "react-router-dom";
import demologo from "../../assets/demologo.jpg"

const Navbar = () => {
  return (
    <div className='h-16 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30'>
        <div className='container mx-auto flex items-center justify-between gap-5'>
            <Link to="/dashboard">
            <div className='flex items-center'>            
                <img src={demologo} alt="logo" className='w-12 h-12 mr-3 rounded-full'/>
                <h2 className='text-lg md:text-xl font-semibold text-indigo-950 leading-5'>
                    PrepPerfect
                </h2>
            </div>
            </Link>
            
            <ProfileInfoCard />
        </div>
    </div>
  )
}

export default Navbar;
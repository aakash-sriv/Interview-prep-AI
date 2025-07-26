import React, { useState } from 'react';

import hero_page from "../assets/hero_page.png";
import {APP_FEATURES} from "../utils/data"; 
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  const navigate = useNavigate();
  const[openAuthModel , setOpenAuthModel] = useState(false);
  
  const[currentPage , setCurrentPage] = useState("login");

  const handleCTA = () => {}; 

  return (
    <>
      <div className='w-full min-h-full bg-[#FFFCEF]'>
        <div className='w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0'/>
          <div className='container mx-auto px-4 pt-6 pb-[200px] relative z-10'>
          {/*Header*/}
          <header className='flex justify-between items-center mb-16'>
            <div className='text-xl text-black font-bold'>Interview Prep AI</div>
            <button
            className='bg-linear-to-r from-[#FF9234] to-[#e8974b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer '
            onClick={()=> setOpenAuthModel(true)}
            >
              Login / Sign  Up
            </button>
          </header>

        {/* Hero content */}
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 pr-4 mb-8 md:mb-0'>
            <div className='flex items-center justify-left mb-2'>
              <div className='flex items-center gap-2 text-[13px] text-orange-500 font-semibold bg-amber-100  px-3 py-1 rounded-full border border-amber-300'>
                AI Powered
              </div>
            </div>
            <h1 className='text-5xl text-black font-medium mb-6 leading-tight'>
              Ace Interviews with <br />
              <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold '>
                AI-Powered
              </span> {" "}
              Learning
            </h1>
          </div>

          <div className='w-full md:w-1/2'>
            <p className='text-[17px] text-gray-900 mr-0 md:mr-20 mb-6'>
              Get role-specified questions , expand answers when u need them , deep dive into concepts & organize everything in ur way.
              From preparation to mastery , your ultimate toolkit , all u ever need is HERE! 
            </p>
            <button className='bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100  hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer '
                    onClick={handleCTA}>
                      Get Started
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
    
  );
};

export default LandingPage;
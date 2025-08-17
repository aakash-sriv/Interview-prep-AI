import React, { useContext, useState } from 'react';
import Modal from "../components/Modal"
import hero_page from "../assets/hero_page.png";
import {APP_FEATURES} from "../utils/data"; 
import { useNavigate } from 'react-router-dom';
import { LuSparkles } from 'react-icons/lu';
import { div } from 'framer-motion/client';
import  ProfileInfoCard  from "../components/Cards/ProfileInfoCard"
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import { UserContext } from '../context/Usercontext';
import demologo from "../assets/demologo.jpg"
import { useDarkMode } from '../context/DarkModeContext';
import DarkModeToggle from '../components/DarkModeToggle';

const LandingPage = () => {

  const { user } = useContext(UserContext);
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const[openAuthModel , setOpenAuthModel] = useState(false);
  
  const[currentPage , setCurrentPage] = useState("login");

  const handleCTA = () => {
    if(!user) {
      setOpenAuthModel(true);
    } else {
      navigate("/dashboard");
    }
  }; 

  return (
    <>
      <div className='w-full min-h-full'>
        <div className={`w-[500px] h-[500px]  blur-[65px] absolute top-0 left-0 ${darkMode ?  'bg-amber-200/20' : 'bg-amber-600/20'}`}/>
          <div className='container mx-auto px-4 pt-6 pb-[200px] relative z-10'>
          {/*Header*/}
          <header className='flex justify-between items-center mb-16'>
            <div className='flex items-center mr-3'>
              <img src={demologo} alt="logo" className='w-[100px] h-[100px] mt-5 mr-6 rounded-sm '/>
              <div className='text-3xl text-sky-950 font-bold mt-4 hover:shadow-2xl hover:shadow-orange-500'>
                PrepPerfect
              </div>
            </div>
            <div className="flex items-center gap-7">
            <DarkModeToggle />
            {user ? (<ProfileInfoCard /> 
            ) : (
            <button
            className='bg-linear-to-r from-[#FF9234] to-[#e8974b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer '
            onClick={()=> setOpenAuthModel(true)}
            >
              Login / Sign  Up
            </button>
            )}
            </div>

          </header>
    

        {/* Hero content */}
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 pr-4 mb-8 md:mb-0'>
            <div className='flex items-center justify-left mb-2'>
              <div className='flex items-center gap-2 text-[13px] text-orange-500 font-semibold bg-amber-100  px-3 py-1 rounded-full border border-amber-300'>
                 <LuSparkles/>AI Powered
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
            <p className='text-[17px] text-gray-900 mr-0 md:mr-20 mb-6 font-quicksand'>
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

      <div className='w-full min-h-full relative z-10 '>
        <div>
          <section className='flex items-center justify-center -mt-36'>
            <img 
              src={hero_page}
              alt="Hero Image" 
              className='w-[70vw]  rounded-2xl'/>
          </section>
        </div>


        <div className='w-full min-h-full bg-[#FFFCEF] mt-10'>
          <div className='container mx-auto px-4 pt-10 pb-20'>
            <section className='mt-5'>
              <h2 className='text-2xl font-medium text-center mb-12'>
                Features that make you shine
              </h2>

              <div className='flex flex-col items-center gap-8'>
                {/*First 3 cards*/}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
                  {APP_FEATURES.slice(0,3).map((feature) => (
                    <div
                    key={feature.id}
                    className='bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100'
                    >
                      <h3 className='text-base font-semibold mb-3'>
                        {feature.title}
                      </h3>
                      <p className='text-gray-600'>{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/*Remaining 2 cards*/}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                    key={feature.id}
                    className='bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100 '
                    >
                      <h3 className='text-base font-semibold mb-3'>
                        {feature.title}
                      </h3>
                      <p className='text-gray-600'>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>


      <div className='text-sm bg-gray-50 text-secondary text-center p-5 mt-5 '>
        Made with 💌 ©️Aakash</div>
     </div>


      <Modal
          isOpen ={openAuthModel}
          onClose ={()=> {
            setOpenAuthModel(false);
            setCurrentPage('login');
          }}
          hideHeader
        >
          <div>
            {currentPage ==='login' && (
              <Login setCurrentPage ={setCurrentPage}/>
            )}
            {currentPage ==='signup' && (
              <SignUp setCurrentPage ={setCurrentPage}/>
            )}
          </div>
      </Modal>
   </>
  );
};

export default LandingPage;
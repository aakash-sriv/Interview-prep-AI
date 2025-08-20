/*
import React, { useContext, useState } from 'react';
import Modal from "../components/Modal"
import {APP_FEATURES} from "../utils/data"; 
import { useNavigate } from 'react-router-dom';
import { LuSparkles } from 'react-icons/lu';
import { div } from 'framer-motion/client';
import  ProfileInfoCard  from "../components/Cards/ProfileInfoCard"
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import { UserContext } from '../context/Usercontext';
import demologo from "../assets/demologo.jpg"
import heropage_light from "../assets/heropage_light.png"
import heropage_dark from "../assets/heropage_dark.png"
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
      <div className='w-full min-h-full relative'>
        {/*${darkMode ?  'bg-amber-200/20' : 'bg-amber-600/20'}/}
          <div className={`w-[500px] h-[500px]  blur-[65px] absolute top-0 left-0 `}/>
          <div className='container mx-auto px-4 pt-6 pb-[200px] relative z-10'>
          {/*Header/}
          <header className='flex justify-between items-center mb-16'>
            <div className='flex items-center mr-3'>
              <img 
                src={demologo} 
                alt="logo" 
                className={`w-[100px] h-[100px] mt-5 mr-6 rounded-sm  border ${darkMode ?  'border-[#aa487e] ' : 'border-[#485b7a]'}`}/>
              <div className={`text-3xl ${darkMode ?  'text-[#aa487e] ' : 'text-[#485b7a]'} font-bold mt-4 hover:shadow-2xl hover:shadow-teal-600`}>
                PrepPerfect
              </div>
            </div>
            <div className="flex items-center gap-1">
            
            {user ? (<ProfileInfoCard /> 
            ) : (
            <button
            className='bg-linear-to-r from-[#c9257d] to-[#ab1ece] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer '
            onClick={()=> setOpenAuthModel(true)}
            >
              Login / Sign  Up
            </button>
            )}
            <DarkModeToggle />
            </div>

          </header>
    

        {/* Hero content /}
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 pr-4 mb-8 md:mb-0'>
            <div className='flex items-center justify-left mb-2'>
              <div className='flex items-center gap-2 text-[13px] bg-[#d3abe7] font-semibold text-[#7c0539]  px-3 py-1 rounded-full border border-[#ff00ff]'>
                 <LuSparkles/>AI Powered
              </div>
            </div>
            <h1 className='text-5xl text-black font-medium mb-6 leading-tight'>
              Ace Interviews with <br />
              <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,_#C9257D_0%,_#4b0cca_100%)] bg-[length:200%_200%] animate-text-shine font-semibold '>
                AI-Powered
              </span> {" "}
              Learning
            </h1>
          </div>

          <div className='w-full md:w-1/2'>
            <p className={`text-[19px] ${darkMode ?  'text-[#99c0d9]' : 'text-[#05314c]'} mr-0 md:mr-20 mb-6 font-sans`}>
              Get role-specified questions , expand answers when u need them , deep dive into concepts & organize everything in ur way.
              From preparation to mastery , your ultimate toolkit , all u ever need is HERE! 
            </p>
            <button className='bg-linear-to-r from-[#c9257d] to-[#ab1ece] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100  hover:text-[#eeb6dc]  transition-colors cursor-pointer '
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
              src={darkMode ? heropage_dark : heropage_light}
              alt="Hero Image" 
              className='w-[70vw]  rounded-2xl'/>
          </section>
        </div>


        <div className='w-full min-h-full  mt-10'>
          <div className={`container mx-auto px-4 pt-10 pb-20 `}>
            <section className='mt-5'>
              <h2 className='text-2xl font-medium text-center mb-12'>
                Features that make you shine
              </h2>

              <div className={`flex flex-col items-center gap-8`}>
                {/*First 3 cards/}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 w-full `}>
                  {APP_FEATURES.slice(0,3).map((feature) => (
                    <div
                    key={feature.id}
                    className={` ${darkMode ?  ' text-gray-50 bg-teal-800/20' : 'text-gray-700 bg-teal-300/20'} p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100`}
                    >
                      <h3 className='text-base font-sans font-semibold mb-3'>
                        {feature.title}
                      </h3>
                      <p className='font-mono'>{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/*Remaining 2 cards/}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                    key={feature.id}
                    className={`${darkMode ?  ' text-gray-50 bg-teal-800/20' : 'text-gray-700 bg-teal-300/20'} p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100 `}
                    >
                      <h3 className='text-base font-sans font-semibold mb-3'>
                        {feature.title}
                      </h3>
                      <p className=' font-mono'>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>


      <div className='text-sm bg-[#22C55E25] text-secondary text-center p-5 mt-5 '>
        Made with 💌 | ©️Aakash</div>
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
*/
import React, { useContext, useState } from 'react';
import Modal from "../components/Modal"
import { APP_FEATURES } from "../utils/data"; 
import { useNavigate } from 'react-router-dom';
import { LuSparkles } from 'react-icons/lu';
import ProfileInfoCard from "../components/Cards/ProfileInfoCard"
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import { UserContext } from '../context/Usercontext';
import demologo from "../assets/demologo.jpg"
import heropage_light from "../assets/heropage_light.png"
import heropage_dark from "../assets/heropage_dark.png"
import { useDarkMode } from '../context/DarkModeContext';
import DarkModeToggle from '../components/DarkModeToggle';

const LandingPage = () => {

  const { user } = useContext(UserContext);
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModel(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className='w-full min-h-full relative'>
        {/* Background blob */}
        <div className={`w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] blur-[65px] absolute top-0 left-0 `} />

        <div className='container mx-auto px-2 sm:px-4 pt-6 pb-[100px] sm:pb-[200px] relative z-10'>

          {/* Header */}
          <header className='mb-10 sm:mb-16'>
            
            {/* MOBILE HEADER */}
            <div className='flex flex-col sm:hidden'>
              {/* Top row: logo (left/centered) + buttons on right */}
              <div className='flex items-center justify-between'>
                <div className='flex gap-2 '>
                <img
                  src={demologo}
                  alt="logo"
                  className={`w-[45px] h-[45px] rounded-sm border ${darkMode ? 'border-[#aa487e]' : 'border-[#485b7a]'}`}
                />
                <div className={`text-lg ${darkMode ? 'text-[#aa487e]' : 'text-[#485b7a]'} font-bold mb-2 mt-2`}>
                  PrepPerfect
                </div>
                </div>
                <div className="flex items-center gap-2">
                  {user ? (
                    <ProfileInfoCard />
                  ) : (
                    <button
                      className='bg-linear-to-r from-[#c9257d] to-[#ab1ece] text-xs font-semibold text-white px-3 py-1.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer'
                      onClick={() => setOpenAuthModel(true)}
                    >
                      Login / Sign Up
                    </button>
                  )}
                  <DarkModeToggle />
                </div>
              </div>

              {/* Title + AI powered badge */}
              <div className='flex flex-col items-center mt-4'>
                
                <div className='flex items-center gap-2 text-[11px] bg-[#d3abe7] font-semibold text-[#7c0539] px-2 py-1 rounded-full border border-[#ff00ff]'>
                  <LuSparkles /> AI Powered
                </div>
              </div>
            </div>

            {/* DESKTOP HEADER */}
            <div className='hidden sm:flex flex-row justify-between items-center'>
              <div className='flex items-center mr-3'>
                <img
                  src={demologo}
                  alt="logo"
                  className={`w-[100px] h-[100px] mt-5 mr-6 rounded-sm border ${darkMode ? 'border-[#aa487e]' : 'border-[#485b7a]'}`}
                />
                <div className={`text-3xl ${darkMode ? 'text-[#aa487e]' : 'text-[#485b7a]'} font-bold mt-4 hover:shadow-2xl hover:shadow-teal-600`}>
                  PrepPerfect
                </div>
              </div>
              <div className="flex items-center gap-4">
                {user ? (
                  <ProfileInfoCard />
                ) : (
                  <button
                    className='bg-linear-to-r from-[#c9257d] to-[#ab1ece] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer'
                    onClick={() => setOpenAuthModel(true)}
                  >
                    Login / Sign Up
                  </button>
                )}
                <DarkModeToggle />
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <div className='flex flex-col md:flex-row items-center text-center md:text-left'>
            <div className='w-full md:w-1/2 pr-0 md:pr-4 mb-6 md:mb-0'>
              {/* Only show AI badge here on desktop */}
              <div className='hidden md:flex items-center justify-start mb-2'>
                <div className='flex items-center gap-2 text-[13px] bg-[#d3abe7] font-semibold text-[#7c0539] px-3 py-1 rounded-full border border-[#ff00ff]'>
                  <LuSparkles /> AI Powered
                </div>
              </div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl text-black font-medium mb-4 sm:mb-6 leading-tight'>
                Ace Interviews with <br />
                <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,_#C9257D_0%,_#4b0cca_100%)] bg-[length:200%_200%] animate-text-shine font-semibold '>
                  AI-Powered
                </span>{" "}
                Learning
              </h1>
            </div>

            <div className='w-full md:w-1/2'>
              <p className={`text-sm sm:text-base md:text-[19px] ${darkMode ? 'text-[#99c0d9]' : 'text-[#05314c]'} mr-0 md:mr-20 mb-6 font-sans`}>
                Get role-specified questions , expand answers when u need them , deep dive into concepts & organize everything in ur way.
                From preparation to mastery , your ultimate toolkit , all u ever need is HERE! 
              </p>
              <button
                className='w-full sm:w-auto bg-linear-to-r from-[#c9257d] to-[#ab1ece] text-sm font-semibold text-white px-5 sm:px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-[#eeb6dc] transition-colors cursor-pointer'
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className='w-full min-h-full relative z-10'>
        <section className='flex items-center justify-center -mt-20 sm:-mt-36'>
          <img
            src={darkMode ? heropage_dark : heropage_light}
            alt="Hero Image"
            className='w-[90vw] sm:w-[70vw] rounded-2xl'
          />
        </section>

        {/* Features */}
        <div className='w-full min-h-full mt-10'>
          <div className={`container mx-auto px-2 sm:px-4 pt-10 pb-20`}>
            <section className='mt-5'>
              <h2 className='text-xl sm:text-2xl font-medium text-center mb-8 sm:mb-12'>
                Features that make you shine
              </h2>
              <div className={`flex flex-col items-center gap-6 sm:gap-8`}>
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full`}>
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <div
                      key={feature.id}
                      className={`${darkMode ? ' text-gray-50 bg-teal-800/20' : 'text-gray-700 bg-teal-300/20'} p-4 sm:p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100`}
                    >
                      <h3 className='text-sm sm:text-base font-sans font-semibold mb-2 sm:mb-3'>
                        {feature.title}
                      </h3>
                      <p className='text-xs sm:text-sm font-mono'>{feature.description}</p>
                    </div>
                  ))}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                      key={feature.id}
                      className={`${darkMode ? ' text-gray-50 bg-teal-800/20' : 'text-gray-700 bg-teal-300/20'} p-4 sm:p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100 `}
                    >
                      <h3 className='text-sm sm:text-base font-sans font-semibold mb-2 sm:mb-3'>
                        {feature.title}
                      </h3>
                      <p className='text-xs sm:text-sm font-mono'>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className='text-xs sm:text-sm bg-[#22C55E25] text-secondary text-center p-3 sm:p-5 mt-5 '>
          Made with 💌 | ©️Aakash
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={openAuthModel}
        onClose={() => {
          setOpenAuthModel(false);
          setCurrentPage('login');
        }}
        hideHeader
      >
        <div>
          {currentPage === 'login' && (
            <Login setCurrentPage={setCurrentPage} />
          )}
          {currentPage === 'signup' && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;

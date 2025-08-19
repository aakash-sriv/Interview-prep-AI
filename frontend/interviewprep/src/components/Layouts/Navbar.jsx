/*
import React from 'react';
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import { Link } from "react-router-dom";
import demologo from "../../assets/demologo.jpg";


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
*/
/*
import React from 'react';
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import { Link } from "react-router-dom";
import demologo from "../../assets/demologo.jpg";
import DarkModeToggle from '../../components/DarkModeToggle';

const Navbar = () => {
  return (
    <div className="h-16 bg-white dark:bg-gray-900 text-black dark:text-white border-b border-gray-200 dark:border-gray-700 backdrop-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30 transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between gap-5">
        
        <Link to="/dashboard">
          <div className="flex items-center">            
            <img src={demologo} alt="logo" className="w-12 h-12 mr-3 rounded-full" />
            <h2 className="text-lg md:text-xl font-semibold leading-5">
              PrepPerfect
            </h2>
          </div>
        </Link>
        
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <ProfileInfoCard />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
*/
/*
import React from 'react';
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import { Link } from "react-router-dom";
import demologo from "../../assets/demologo.jpg";
import DarkModeToggle from '../../components/DarkModeToggle';

const Navbar = () => {
  return (
    <div className="h-16 bg-amber-600 dark:bg-gray-500 text-black dark:text-white transition-colors duration-300 border-b border-gray-200/50 dark:border-gray-700 backdrop-blur-md py-2.5 px-4 md:px-0 sticky top-0 z-30">
      <div className='container mx-auto flex items-center text-black dark:text-white justify-between gap-5'>
        <Link to="/dashboard">  
          <div className='flex items-center'>            
            <img src={demologo} alt="logo" className='w-12 h-12 mr-3 rounded-full'/>
            <h2 className='text-lg md:text-xl font-semibold leading-5'>
              PrepPerfect
            </h2>
          </div>
        </Link>
        
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <ProfileInfoCard />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
*/
/*
// src/components/Layouts/Navbar.jsx
import React from 'react';
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import { Link } from "react-router-dom";
import demologo from "../../assets/demologo.jpg";
import DarkModeToggle from '../../components/DarkModeToggle';
import { useDarkMode } from '../../context/DarkModeContext';

const Navbar = () => {
  // This line ensures the component re-renders when dark mode changes
  const { darkMode } = useDarkMode();

  return (
    <div className="h-16 bg-amber-600 dark:bg-gray-500 text-black dark:text-white transition-colors duration-300 border-b border-gray-200/50 dark:border-gray-700 backdrop-blur-md py-2.5 px-4 md:px-0 sticky top-0 z-30">
      <div className='container mx-auto flex items-center text-black dark:text-white justify-between gap-5'>
        <Link to="/dashboard">  
          <div className='flex items-center'>            
            <img src={demologo} alt="logo" className='w-12 h-12 mr-3 rounded-full'/>
            <h2 className='text-lg md:text-xl font-semibold leading-5'>
              PrepPerfect
            </h2>
          </div>
        </Link>
        
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <ProfileInfoCard />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
*/
// src/components/Layouts/Navbar.jsx
/*
import React from 'react';
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import { Link } from "react-router-dom";
import demologo from "../../assets/demologo.jpg";
import DarkModeToggle from '../../components/DarkModeToggle';
import { useDarkMode } from '../../context/DarkModeContext';

const Navbar = () => {
  const { darkMode } = useDarkMode();
  
  console.log("Navbar re-rendered, darkMode:", darkMode); // Debug log

  return (
    <div 
      className="h-16 transition-all duration-300 border-b backdrop-blur-md py-2.5 px-4 md:px-0 sticky top-0 z-30"
      style={{
        backgroundColor: darkMode ? '#6b7280' : '#f59e0b', // gray-500 : amber-600
        color: darkMode ? 'white' : 'black',
        borderColor: darkMode ? '#374151' : 'rgba(229, 231, 235, 0.5)' // gray-700 : gray-200/50
      }}
    >
      <div 
        className='container mx-auto flex items-center justify-between gap-5'
        style={{ color: darkMode ? 'white' : 'black' }}
      >
        <Link to="/dashboard">  
          <div className='flex items-center'>            
            <img src={demologo} alt="logo" className='w-12 h-12 mr-3 rounded-full'/>
            <h2 
              className='text-lg md:text-xl font-semibold leading-5'
              style={{ color: darkMode ? 'white' : 'black' }}
            >
              PrepPerfect
            </h2>
          </div>
        </Link>
        
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <ProfileInfoCard />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// src/components/Layouts/Navbar.jsx
import React from 'react';
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import { Link } from "react-router-dom";
import demologo from "../../assets/demologo.jpg";
import DarkModeToggle from '../../components/DarkModeToggle';
import { useDarkMode } from '../../context/DarkModeContext';

const Navbar = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`h-16 transition-all duration-300 border-b backdrop-blur-md py-2.5 px-4 md:px-0 sticky top-0 z-30 ${
      darkMode 
        ? 'bg-gray-500 text-white border-gray-700' 
        : 'bg-amber-100 text-black border-gray-200/50'
    }`}>
      <div className='container mx-auto flex items-center justify-between gap-5'>
        <Link to="/dashboard">  
          <div className='flex items-center'>            
            <img src={demologo} alt="logo" className='w-12 h-12 mr-3 rounded-full'/>
            <h2 className={`text-lg md:text-xl font-semibold leading-5 ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              PrepPerfect
            </h2>
          </div>
        </Link>
        
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <ProfileInfoCard />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
*/
// src/components/Layouts/Navbar.jsx
import React from 'react';
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import { Link } from "react-router-dom";
import demologo from "../../assets/demologo.jpg";
import DarkModeToggle from '../../components/DarkModeToggle';
import { useDarkMode } from '../../context/DarkModeContext';

const Navbar = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className="h-16 navbar-theme text-theme-primary backdrop-blur-md py-2.5 px-4 md:px-0 sticky top-0 z-30 border-b border-theme-primary">
      <div className='container mx-auto flex items-center justify-between gap-5'>
        <Link to="/dashboard">  
          <div className='flex items-center'>            
            <img src={demologo} alt="logo" className={`w-12 h-12 mr-3 rounded-full border ${darkMode ?  'border-[#aa487e] ' : 'border-[#485b7a]'}`}/>
            <h2 className={`text-lg md:text-xl font-semibold leading-5 text-theme-primary ${darkMode ?  'text-[#6cabba] ' : 'text-[#485b7a]'}`}>
              PrepPerfect
            </h2>
          </div>
        </Link>
        
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <ProfileInfoCard />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
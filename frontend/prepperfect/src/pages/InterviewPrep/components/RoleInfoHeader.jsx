/*
import React from 'react'
import { useDarkMode } from '../../../context/DarkModeContext';

const RoleInfoHeader = ({
    role , topicsToFocus , experience , questions , description , lastUpdated
}) => {
  const { darkMode } = useDarkMode();

  return <div className={`relative `}>
    <div className='container mx-auto px-10 md:px-0'>
        <div className='h-[200px] flex flex-col justify-center relative z-10'>
            <div className='flex items-start'>
                <div className='flex-grow'> 
                    <div className='flex justify-between items-start'>
                        <div>
                            <h2 className={`text-2xl font-medium ${darkMode ? 'text-black' : 'text-black'}`}>
                              {role}
                            </h2>
                            <p className={`text-sm text-medium mt-1 ${darkMode ? 'text-gray-800' : 'text-gray-900'}`}>
                                {topicsToFocus}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-3 mt-4'>
                <div className='text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full'>
                    Experience: {experience} {experience == 1 ? "Year" : "Years"}
                </div>

                <div className='text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full'>
                    {questions} Q&A
                </div>

                <div className='text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full'>
                    Last Updated: {lastUpdated}
                </div>
            </div>
        </div>

        <div className={`w-[40vw] md:w-[30vw] h-[200px] flex items-center justify-center overflow-hidden absolute top-0 right-0 `}>
            <div className='w-30 h-30 bg-lime-400 blur-[30px] animate-blob1'/>
            <div className='w-30 h-30 bg-teal-400 blur-[30px] animate-blob2'/>
            <div className='w-30 h-30 bg-cyan-300 blur-[30px] animate-blob3'/>
            <div className='w-30 h-30 bg-fuchsia-200 blur-[30px] animate-blob1'/>
        </div>
    </div>
  </div>
}

export default RoleInfoHeader
*/
import React from 'react'
import { useDarkMode } from '../../../context/DarkModeContext';

const RoleInfoHeader = ({
    role, topicsToFocus, experience, questions, description, lastUpdated
}) => {
    const { darkMode } = useDarkMode();

    return (
        <div className={`relative h-[200px] overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {/* Animated blob background covering entire header */}
            <div className={`absolute inset-0 flex items-center justify-center ${darkMode ? 'bg-[#5221ad4a]' : 'bg-[#a4e8e7]'}`}>
                {/* Light mode blobs */}
                {!darkMode && (
                    <>
                        <div className='w-20 h-20 bg-lime-400 blur-[40px] animate-blob1 absolute top-8 left-1/6' />
                        <div className='w-24 h-24 bg-teal-400 blur-[40px] animate-blob2 absolute top-12 left-0' />
                        <div className='w-24 h-24 bg-cyan-300 blur-[40px] animate-blob3 absolute bottom-8 left-1/3' />
                        <div className='w-24 h-24 bg-sky-400 blur-[40px] animate-blob2 absolute bottom-8 right-1/6' />
                        <div className='w-24 h-24 bg-pink-500 blur-[40px] animate-blob1 absolute bottom-8 top-0 right-1/8' />
                        <div className='w-24 h-24 bg-fuchsia-200 blur-[40px] animate-blob2 absolute bottom-12 right-1/3' />
                        <div className='w-24 h-24 bg-rose-300 blur-[50px] animate-blob3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                    </>
                )}
                
                {/* Dark mode blobs */}
                {darkMode && (
                    <>                        
                        <div className='w-20 h-20 bg-purple-600 blur-[40px] animate-blob1 absolute top-8 left-1/6' />
                        <div className='w-24 h-24 bg-blue-600 blur-[40px] animate-blob2 absolute top-12 left-0' />
                        <div className='w-24 h-24 bg-indigo-500 blur-[40px] animate-blob3 absolute bottom-8 left-1/3' />
                        <div className='w-24 h-24 bg-violet-600 blur-[40px] animate-blob2 absolute bottom-8 right-1/6' />
                        <div className='w-24 h-24 bg-pink-500 blur-[40px] animate-blob1 absolute bottom-8 top-0 right-0' />
                        <div className='w-24 h-24 bg-fuchsia-700 blur-[40px] animate-blob2 absolute bottom-12 right-1/3' />
                        <div className='w-24 h-24 bg-emerald-700 blur-[50px] animate-blob3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                    </>
                )}
            </div>

            {/* Content container */}
            <div className='container mx-auto px-10 md:px-0 relative z-10 h-full'>
                <div className='h-full flex flex-col justify-center'>
                    <div className='flex items-start'>
                        <div className='flex-grow'> 
                            <div className='flex justify-between items-start'>
                                <div>
                                    <h2 className={`text-2xl font-medium ${darkMode ? 'text-white' : 'text-black'}`}>
                                        {role}
                                    </h2>
                                    <p className={`text-sm font-medium mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {topicsToFocus}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mt-4'>
                        <div className={`text-[10px] font-semibold px-3 py-1 rounded-full ${
                            darkMode 
                                ? 'text-black bg-white' 
                                : 'text-white bg-black'
                        }`}>
                            Experience: {experience} {experience == 1 ? "Year" : "Years"}
                        </div>

                        <div className={`text-[10px] font-semibold px-3 py-1 rounded-full ${
                            darkMode 
                                ? 'text-black bg-white' 
                                : 'text-white bg-black'
                        }`}>
                            {questions} Q&A
                        </div>

                        <div className={`text-[10px] font-semibold px-3 py-1 rounded-full ${
                            darkMode 
                                ? 'text-black bg-white' 
                                : 'text-white bg-black'
                        }`}>
                            Last Updated: {lastUpdated}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoleInfoHeader
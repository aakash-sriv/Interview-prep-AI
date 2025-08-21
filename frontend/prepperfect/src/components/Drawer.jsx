import React from 'react';
import { LuX } from 'react-icons/lu';
import { useDarkMode } from '../context/DarkModeContext';

const Drawer = ({ isOpen , onClose , title , children}) => {
    const { darkMode } = useDarkMode();
    
    return <div 
    className= {`fixed top-[64px] right-0 z-40 h-[calc(100dvh-64px)] ${darkMode ?  'bg-indigo-900/75' : 'bg-sky-200/75'} p-4 overflow-y-auto transition-transform drawer-theme w-full md:w-[40vw] shadow-2xl shadow-cyan-800/10 border-r border-theme-primary ${
        isOpen ? "translate-x-0" : "translate-x-full"
    }`}
        tabIndex = "-1"
        aria-labelledby='drawer-right-label'
    >
        {/* Header */}
        <div className='flex items-center justify-between mb-4'>
            <h5
                id='drawer-right-label'
                className='flex items-center text-base font-semibold text-theme-primary'
            >
                {title}
            </h5>
            {/* Close Button*/}
            <button
                type='button'
                onClick={onClose}
                className='text-theme-muted bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center'
            >
                <LuX className='text-lg'/>
            </button>
        </div>

        {/*Body Content*/}
        <div className='text-sm mx-3 mb-6 text-theme-secondary'>{children}</div>
    </div>
}

export default Drawer;





import React from 'react';
import { LuTrash2 } from 'react-icons/lu';
import { getInitials } from '../../utils/helper';
import { useDarkMode } from '../../context/DarkModeContext';


const SummaryCard = ({colors,role,topicsToFocus,experience ,questions,description,lastUpdated,onSelect,onDelete
}) => {

    const { darkMode } = useDarkMode();
    
    return <div 
            className={`${darkMode ?  ' text-gray-50 bg-teal-800/20' : 'text-gray-700 bg-teal-300/20'} border border-gray-300/40 rounded-xl p-2 overflow-hidden cursor-pointer hover:shadow-sm shadow-[#13a397] relative group`}
            onClick = {onSelect}
        >
        <div
            className='rounded-lg p-4 cursor-pointer relative'
            style={{
                background : colors.bgcolor,
            }}
        >
            <div className='flex items-start'>
                <div className='flex-shrink-0 w-12 h-12 bg-white rounded-md flex items-center justify-center mr-4'>
                    <span className='text-lg font-semibold text-black'>
                        {getInitials(role)}
                    </span>
                </div>
                {/*Content container*/}
                <div className='flex-grow'>
                    <div className='flex justify-between items-start'>
                        {/*Title and skills*/}
                        <div>
                            <h2 className='text-[17px] font-medium dark:text-black'>{role}</h2>
                            <p className='text-xs text-medium text-gray-900'>
                                {topicsToFocus}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button 
                className='hidden group-hover:flex items-center gap-2 text-xs text-rose-500 font-medium bg-rose-50 px-3 py-1 rounded text-nowrap border border-rose-100 hover:border-rose-200 cursor-pointer absolute top-0 right-0'
                onClick ={(e) => {
                    e.stopPropagation();
                    onDelete();
                }}
            >
                <LuTrash2/>
            </button>
        </div>

        <div className={`px-3 pb-3 ${darkMode ?  ' text-gray-50' : 'text-gray-700'}`}>
            <div className='flex items-center gap-3 mt-4'>
                <div className='text-[10px] font-medium  px-3 py-1 border-[0.5px] border-gray-900 rounded-full'>
                    Experience: {experience} {experience == 1 ? "Year" : "Years"}
                </div>

                <div className='text-[10px] font-medium  px-3 py-1 border-[0.5px] border-gray-900 rounded-full'>
                    {/* chatgpt-idea*/}
                    {questions?.length} Q&A 
                </div>

                <div className='text-[10px] font-medium px-3 py-1 border-[0.5px] border-gray-900 rounded-full'>
                    Last Updated : {lastUpdated}
                </div>
            </div>
            {/*Description*/}
            <p className={`text-[12px] ${darkMode ?  ' text-gray-50' : 'text-gray-700'} font-medium line-clamp-2 mt-3`}>
                {description}
            </p>
        </div>
    </div>  
};

export default SummaryCard
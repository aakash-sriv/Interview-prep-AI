import React from 'react'
import { useDarkMode } from '../context/DarkModeContext';


const DeleteAlertContent = ({content , onDelete}) => {
    const { darkMode } = useDarkMode();
  
  return (
      
    <div>
    <div className='p-5'>
        <p className='text-[14px]'>{content}</p>

        <div className='flex justify-end mt-6'>
            <button
               type='button'
               className={`btn-small `}
               onClick={onDelete}
            >
                Delete
            </button>
        </div>
    </div>
    </div>
  )
}

export default DeleteAlertContent
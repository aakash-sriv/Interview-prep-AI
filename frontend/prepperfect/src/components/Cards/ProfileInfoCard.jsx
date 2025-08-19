
import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/Usercontext'
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../../context/DarkModeContext';

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  }

  const handleImageError = () => {
    setImageError(true);
  }

  // Fallback to user initials if image fails to load
  const getInitials = (name) => {
    return name
      ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
      : 'U';
  };

  return user && (
    <div className='flex items-center'>
      {!imageError && user.profileImageUrl ? (
        <img  
          src={user.profileImageUrl} 
          alt={user.name || "Profile"} 
          className='w-11 h-11 bg-gray-300 rounded-full mr-3 object-cover'
          onError={handleImageError}
        />
      ) : (
        <div className='w-11 h-11 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mr-3 flex items-center justify-center text-white font-semibold text-sm'>
          {getInitials(user.name)}
        </div>
      )}
      <div>
        <div className={`text-[15px] font-bold leading-3 ${
          darkMode ? 'text-white' : 'text-black'
        }`}>
          {user.name || ""}
        </div>
        <button 
          className='text-amber-600 text-sm font-semibold cursor-pointer hover:underline'
          onClick={handleLogout}   
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default ProfileInfoCard;
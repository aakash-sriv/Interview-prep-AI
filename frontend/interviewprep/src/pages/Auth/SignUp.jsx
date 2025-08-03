import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { div } from 'framer-motion/client';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import { validateEmail } from '../../utils/helper';
import { UserContext } from '../../context/Usercontext';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import uploadImage from '../../utils/uploadImage';

const SignUp = ({setCurrentPage}) => {
  const[profilePic ,setProfilePic] = useState(null);
  const[fullName ,setfullName] = useState("");
  const[email ,setEmail] = useState("");
  const[password ,setPassword] = useState("");

  const[error , setError]  = useState(null)

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  //Handle signup form submit

  const handleSignUp = async(e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if(!fullName) {
      setError("Please full name.")
      return;
    }

    if(!validateEmail(email)) {
      setError("Please enter a valid email address")
      return;
    }

    if(!password){
      setError("Please enter a password ")
      return;
    }

    setError("");

    //signup api call
    try {
      //upload image if present
      if(profilePic){
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER , {
        name : fullName,
        email,
        password,
        profileImageUrl
      });

      const { token } = response.data;

      if(token) {
        localStorage.setItem("token" , token);
        updateUser(response.data);
        navigate("/dashboard")
      }
    } catch (error) {
      if(error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong.  bro try again na")
      }
    }    
};

  return <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
          <h3 className='text-lg font-semibold text-black'>Create an account</h3>
            <p className='text-xs text-slate-700 mt-[5px] mb-6'>
              Join us today by entering your details below.
            </p>

            <form onSubmit={handleSignUp}>

            <ProfilePhotoSelector image={profilePic} setImage= {setProfilePic}/>



              <div className='grid grid-cols-1 md:grid-cols-1 gap-2'>
                <Input
                  value={fullName}
                  onChange={({target}) => setfullName(target.value)}
                  label= "Full Name"
                  placeholder= "Aakash"
                  type="text"
                />

                <Input
                  value={email}
                  onChange={({target}) => setEmail(target.value)}
                  label= "Email address"
                  placeholder= "Aakash@example.com"
                  type="text"
                />

                <Input
                  value={password}
                  onChange={({target}) => setPassword(target.value)}
                  label= "password"
                  placeholder= "Min 8 characters"
                  type="password"
                />
              </div>

              {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

                <button type='submit' className='btn-primary'>
                  Sign Up
                </button>
                <p className='text-[13px] text-slate-800 mt-3'>
                  Already an account ? {" "}
                  <button 
                    className='font-medium text-primary underline cursor-pointer'
                    onClick={() => {
                    setCurrentPage("login");
                  }}
                  >
                    Login
                </button>
              </p>
            </form>
          </div>
};

export default SignUp
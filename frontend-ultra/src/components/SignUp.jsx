import React, { useState } from 'react';
import { FaGoogle, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/signUpForm',{name,email,password})
    .then(result => {console.log(result)
      localStorage.setItem('signUp' , 'true')
navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-16 mx-4 lg:mx-16">
      <div className="flex-1 flex flex-col h-full bg-white border-none shadow-lg outline-none rounded-lg lg:rounded-r-none p-6 sm:p-8 md:p-10 md:w-full lg:p-10">
        <h1 className="text-3xl font-serif font-bold text-center pt-4 lg:pt-10">Create Account</h1>
        <div className="flex text-2xl gap-4 justify-center items-center py-4 lg:gap-8">
          <FaGoogle />
          <FaFacebookSquare />
          <FaLinkedin />
        </div>
        <h2 className="text-[16px] text-center">or use your email for registration</h2>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-5 gap-3 flex-grow">
          <input
            className="p-3 text-xl w-full bg-[#EEEEEE]"
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            className="p-3 text-xl w-full bg-[#EEEEEE]"
            type="email"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            className="p-3 text-xl w-full bg-[#EEEEEE]"
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button
            className="px-4 mt-4 bg-[#4B59F7] text-white text-lg py-2 rounded-md w-full lg:w-auto"
          >
            SignUp
          </button>
        </form>
      </div>
      <div className="flex-1 flex flex-col h-full py-8 lg:py-32 border-none shadow-lg outline-none rounded-lg lg:rounded-l-none bg-[#101522] text-white p-6 sm:p-8 md:p-10 md:w-full  lg:p-10 justify-center items-center">
        <h1 className="text-center mb-5 text-2xl lg:text-5xl">Already have an account?</h1>
        <p className="text-center px-2 sm:px-16">
          To keep connected with us please login with your personal info
        </p>
        <Link to='/signIn'
          className="my-8 bg-[#4B59F7] text-white text-lg py-2 px-4 rounded-md"
        >
          SignIn
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
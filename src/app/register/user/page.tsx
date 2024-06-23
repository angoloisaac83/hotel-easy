// pages/register.tsx
"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import Link from 'next/link'
import { IoIosEyeOff } from "react-icons/io";
// import data from ''
const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/server/controllers/authController.js', {
        username,
        email,
        password
      });
      console.log(response.data); // Handle success response
    } catch (error: any) {
      console.error(error.response.data); // Handle error response
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  return (
    <main className='w-full h-screen bg-opacity-50 bg-no-repeat bg-cover bg-center bg-[url("https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg")] flex items-center justify-center'>
    <form method='POST' className="flex flex-col bg-[rgba(0,0,0,0.34)] gap-[25px] w-[24%] text-white shadow-xl rounded-lg p-[23px] h-fit items-center justify-center text-center">
      <span>
        <h1>Create new account</h1>
        <p>Please fill the for to continue</p>
      </span>
      <input
        className='w-full h-fit px-[10px] py-[6px] bg-[rgba(0,0,0,0.44)] rounded-[4px] placeholder:text-[15px]'
        type="text"
        placeholder="Username"
        onChange={handleUsernameChange}
        required
      />
      <input
        className='w-full h-fit px-[10px] py-[6px] bg-[rgba(0,0,0,0.44)] rounded-[4px] placeholder:text-[15px]'
        type="email"
        placeholder="Email"
        onChange={handleEmailChange}
        required
      />
      <input
        className='w-full h-fit px-[10px] py-[6px] bg-[rgba(0,0,0,0.44)] rounded-[4px] placeholder:text-[15px]'
        type="text"
        placeholder="Phone Number"
        onChange={handlePhoneChange}
        required
      />
      <span className='w-full h-fit flex items-center justify-end'>
      <input
        className='w-full h-fit px-[10px] py-[6px] bg-[rgba(0,0,0,0.44)] rounded-[4px] placeholder:text-[15px]'
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
        required
      />
      <IoIosEyeOff className='absolute mr-[1%]' />
      </span>
      <button onClick={handleSubmit} className='w-full h-fit py-[7px] text-white rounded-[6px] bg-purple-600' type="submit">Register</button>
      <div className='text-[14px] flex flex-col gap-[30px] items-center justify-center w-full h-fit'>
        <span>
          <p>Have an account?</p>
          <p className='font-semibold'>Sign In</p>
        </span>
        <ul>
          <li>By registering in you agree to our</li>
          <li className='pt-[10px]'><Link href="" className="underline">Terms and Conditions</Link> and <Link href="" className="underline">Privacy Policy</Link></li>
        </ul>
      </div>
    </form>
    </main>
  );
};

export default Register;

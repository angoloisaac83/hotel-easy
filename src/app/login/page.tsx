// pages/login.tsx
"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Link from 'next/link'
import { IoIosEyeOff } from "react-icons/io";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res: AxiosResponse<{ token: string }> = await axios.post('/api/auth/login', { email, password });
      console.log(res.data.token); // assuming response has { token: string } structure
    } catch (error: any) {
      handleAxiosError(error);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleAxiosError = (error: any) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      setError(error.response.data.msg); // handle specific error message from server
    } else if (error.request) {
      // The request was made but no response was received
      setError('No response from server');
    } else {
      // Something happened in setting up the request that triggered an Error
      setError(error.message);
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   {error && <p>{error}</p>}
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     value={email}
    //     onChange={handleEmailChange}
    //     required
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={handlePasswordChange}
    //     required
    //   />
    //   <button type="submit">Login</button>
    // </form>
    <main className='w-full h-screen bg-opacity-50 bg-no-repeat bg-cover bg-center bg-[url("https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg")] flex items-center justify-center'>
    {error && <p>{error}</p>}
    <form className="flex flex-col bg-[rgba(0,0,0,0.34)] gap-[25px] w-[24%] text-white shadow-xl rounded-lg p-[23px] h-fit items-center justify-center text-center" onSubmit={handleSubmit}>
      <span>
        <h1>Create new account</h1>
        <p>Please fill the for to continue</p>
      </span>
      <input
        className='w-full h-fit px-[10px] py-[6px] bg-[rgba(0,0,0,0.44)] rounded-[4px] placeholder:text-[15px]'
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <span className='w-full h-fit flex items-center justify-end'>
      <input
        className='w-full h-fit px-[10px] py-[6px] bg-[rgba(0,0,0,0.44)] rounded-[4px] placeholder:text-[15px]'
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <IoIosEyeOff className='absolute mr-[1%]' />
      </span>
      <span className='flex w-full h-fit items-center justify-end'>
        <p>Forgot Password?</p>
      </span>
      <button className='w-full h-fit py-[7px] text-white rounded-[6px] bg-purple-600' type="submit">Login</button>
      <div className='text-[14px] flex flex-col gap-[30px] items-center justify-center w-full h-fit'>
        <span>
          <p>Don't have an account?</p>
          <Link href='/register'><p className='font-semibold'>Register</p></Link>
        </span>
      </div>
    </form>
    </main>
  );
};

export default Login;

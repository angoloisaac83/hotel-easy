import React from 'react'
import Head from 'next/head';
import Link from 'next/link'
export default function Welcome(){

    return(
        <>
    <div className="min-h-screen bg-slate-100 gap-[30px] flex items-center justify-center">
      <Head>
        <title>Register as Vendor or User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          {/* User Registration Box */}
          <Link href="/register/user">
          <div
            className="p-6 w-[270px] bg-white border-[1px] border-purple-500 rounded-lg text-black shadow-xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-4">Register as User</h2>
            <p className="text-lg">Click here to register as a user.</p>
          </div>
        </Link>
          {/* Vendor Registration Box */}
          <Link href='/vendor'>
          <div
            className="p-6 w-[270px] bg-white border-[1px] border-green-500 rounded-lg text-green-500 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-4">Register as Vendor</h2>
            <p className="text-lg">Click here to register as a vendor.</p>
          </div>
          </Link>
    </div>
</>
    )
}
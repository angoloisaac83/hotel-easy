"use client";
import React from 'react';
import Image from 'next/image'
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import Link from 'next/link';
import { TbLogout2 } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { usePathname } from 'next/navigation';    
import { TbDatabaseDollar } from "react-icons/tb";
import { BsPersonBoundingBox } from "react-icons/bs";
export default function Sidebar(){
    const router = usePathname();
    // console.log(router)
    return(
        <>
            <section className='bg-white fixed top-0 left-0'>
                <header className='p-[20px] px-[20px] text-slate-900 text-[17px] w-fit flex flex-col items-start justify-ceter shadow-2xl h-[100vh]'>
                    <h1 className='text-2xl font-[800] flex items-center gap-[10px] justify-center'><IoSettingsOutline />Dashboard</h1>
                    <br /><br />
                    <ul className='flex flex-col items-start justify-center gap-[12px]'>
                        <Link href="/vendor/"><li className={`flex w-full h-fit p-[10px] hover:bg-purple-800 rounded-lg cursor-pointer hover:text-white items-center justify-between gap-[8px] ${router === '/vendor' ? 'bg-purple-800 text-white' : 'bg-white text-black'}`}><IoSettingsOutline />Dashboard<FaAngleRight /></li></Link>
                        <Link href="/vendor/services"><li className={`flex w-full h-fit p-[10px] hover:bg-purple-800 rounded-lg cursor-pointer hover:text-white items-center justify-between gap-[8px] ${router === '/vendor/services' ? 'bg-purple-800 text-white' : 'bg-white text-black'}`}><AiOutlineProduct />Services<FaAngleRight /></li></Link>
                        <Link href="/vendor/income"><li className={`flex w-full h-fit p-[10px] hover:bg-purple-800 rounded-lg cursor-pointer hover:text-white items-center justify-between gap-[8px] ${router === '/vendor/income' ? 'bg-purple-800 text-white' : 'bg-white text-black'}`}><TbDatabaseDollar />Income<FaAngleRight /></li></Link>
                        <Link href="/vendor/profile"><li className={`flex w-full h-fit p-[10px] hover:bg-purple-800 rounded-lg cursor-pointer hover:text-white items-center justify-between gap-[8px] ${router === '/vendor/profile' ? 'bg-purple-800 text-white' : 'bg-white text-black'}`}><BsPersonBoundingBox />Profile<FaAngleRight /></li></Link>
                    </ul>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <ul>
                        <button className='flex w-full h-fit p-[10px] hover:bg-purple-800 rounded-lg cursor-pointer hover:text-white items-center justify-center gap-[8px]'><TbLogout2 />Log Out</button>
                    </ul>
                </header>
            </section>
        </>
    )
}

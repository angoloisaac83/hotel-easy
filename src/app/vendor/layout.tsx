import React from 'react';
import Sidebar from './sidebar/sidebar'
import TopNav from './topnav/topnav'
import Vendor from './page'
import { Toaster } from "@/components/ui/sonner"
export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <>
        <section className='flex items-center justify-start p-[30px] bg-slate-100 '>
        <Sidebar />
        <TopNav />
        {children}
        <Toaster /></section>
     </>
    );
  }
  
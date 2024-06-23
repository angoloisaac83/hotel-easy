import React from 'react';
import { VendorData } from '../../data';
import { CiSearch } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa6";
import { TbDatabaseDollar } from "react-icons/tb";

interface VendorData {
  id: number;
  CompanyName: string;
  RoomTypes: any;
  totalcustomers: number;
  totalincome: number;
  activeusers: number;
}


export default function Card() {
  const filteredData = VendorData.filter((item) => item.CompanyName === 'Brass Suites');

  return (
    <>
      <section className='w-full flex flex-col items-center p-[30px] pt-[15px] justify-start gap-[40px]'>
        <header className='w-full flex flex-col items-center justify-center'>
          {filteredData.map((item) => (
            <section className="w-[90%] h-fit p-[20px] rounded-xl flex flex-1 items-center justify-between" key={item.id}>
              <div className='flex flex-row-reverse w-[23%] shadow-xl items-center rounded-xl p-[20px] bg-white justify-between gap-[10px]'>
                <span className=' w-[45px] h-[45px] font-[500] rounded-full flex items-center justify-center bg-green-200'>
                  <IoPeopleOutline className='w-[32px] h-[32px] text-green-500' />
                </span>
                <ul>
                  <span className='flex flex-col gap-[5px]'>
                  <li>Total Customers</li>
                  <li className='text-2xl font-[500]'>{item.totalcustomers}</li>
                  </span>
                </ul>
              </div>
              <div className='flex flex-row-reverse w-[23%] shadow-xl bg-white rounded-xl p-[20px] items-center justify-between gap-[10px]'>
                <span className=' w-[45px] h-[45px] font-[500] rounded-full flex items-center justify-center bg-green-200'>
                  <TbDatabaseDollar className='w-[32px] h-[32px] text-green-500' />
                </span>
                <ul className='flex flex-col gap-[5px]'>
                  <li>Total Income</li>
                  <li className='text-2xl font-[500]'>₦{item.totalincome}</li>
                </ul>
              </div>
              <div className='flex flex-row-reverse w-[23%] p-[20px] rounded-xl shadow-xl px-[20px] bg-white items-center justify-between gap-[10px]'>
                <span className=' w-[45px] h-[45px] font-[500] rounded-full flex items-center justify-center bg-green-200'>
                  <IoPeopleOutline className='w-[32px] h-[32px] text-green-500' />
                </span>
                <ul className='flex flex-col gap-[5px]'>
                  <li>Active Users</li>
                  <li className='text-2xl font-[500]'>{item.activeusers}</li>
                </ul>
              </div>
              <div className='flex flex-row-reverse w-[23%] p-[20px] rounded-xl shadow-xl px-[20px] bg-white items-center justify-between gap-[10px]'>
                <span className=' w-[45px] h-[45px] font-[500] rounded-full flex items-center justify-center bg-green-200'>
                  <IoPeopleOutline className='w-[32px] h-[32px] text-green-500' />
                </span>
                <ul className='flex flex-col gap-[5px]'>
                  <li>Total Rooms</li>
                  <li className='text-2xl font-[500]'>{item.RoomTypes.length}</li>
                </ul>
              </div>
            </section>
          ))}
        </header>
      </section>
    </>
  );
};

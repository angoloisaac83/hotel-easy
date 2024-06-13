import { CiSearch } from "react-icons/ci";
export default function TopNav(){

    return(
        <>
        <nav className='w-[86%] bg-white p-[12px] shadow-md h-fit top-0 right-0 fixed flex items-center justify-between'>
          <h1 className='text-[28px] font-[600]'>Hello Angolo,</h1>
          <span className='flex items-center justify-center w-fit h-fit'>
            <CiSearch className='absolute ml-[-16%] text-xl font-[600]' />
            <input type="search" className='pl-[35px] shadow-2xl bg-slate-100 py-[5px] placeholder:text-lg rounded-[5px]' placeholder='Search' name="" id="" />
          </span>
        </nav>
        </>
    )
}
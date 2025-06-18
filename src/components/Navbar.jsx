import React from 'react'
import '@fontsource/josefin-sans'
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
        <div className='h-[70px] w-[100vw] flex justify-center font-josefin'>
            <div className='mt-[20px] w-[1038px] flex items-center justify-between h-[40px] '>
                <p className='text-[#0D0E43] text-[34px] font-[600]'>Hekto</p>
                <div>
                    <ul className='flex items-center'>
                        <li className='flex items-center'>Home<IoIosArrowDown/></li>
                        <li>Pages</li>
                        <li>Products</li>
                        <li>Blog</li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='flex'>
                    <input type="text" className='w-[240px] border-[2px] border-[#E7E6EF] focus:outline-none rounded-l-[2px] '/>
                    <div className='w-[51px] h-[40px] flex justify-center items-center bg-[#FB2E86] rounded-r-[2px] '>
                        <IoSearch className='text-[24px] text-white'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
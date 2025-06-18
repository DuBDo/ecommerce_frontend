import React from 'react'
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import '@fontsource/josefin-sans'

const Header = () => {
  return (
    <>
        <div className='w-[100vw] h-[44px] flex justify-around bg-[#7E33E0] text-[#F1F1F1] font-josefin'>
            <div className='flex gap-[48px]'>
                <div className='flex justify-center items-center gap-[10px]'>
                    <MdOutlineMail className='text-white'/>
                    <p className='font-[600]'>mhhasanul@gmail.com</p>
                </div>
                <div className='flex justify-center items-center gap-[10px]'>
                    <BiPhoneCall className='text-white'/>
                    <p className='font-[700]'>(12345)67890</p>
                </div>
            </div>
            <div className='flex items-center gap-[17px]'>
                <div className='flex items-center gap-0'>
                    <p className='font-[700]'>English</p>
                    <IoIosArrowDown className='font-[600]'/>
                </div>
                <div className='flex items-center gap-0'>
                    <p className='font-[700]'>USD</p>
                    <IoIosArrowDown className='font-[600]'/>
                </div>
                <div className='flex items-center gap-0'>
                    <p className='font-[700]'>Login</p>
                    <FiUser className='font-[600]'/>
                </div>
                <div className='flex items-center gap-0'>
                    <p className='font-[700]'>Wishlist</p>
                    <FaRegHeart className='font-[600]'/>
                </div>
                <div className='flex items-center gap-0'>
                    <BsCart className='font-[600] text-[20px]'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
"use client";

import Image from 'next/image'
import React, { useState } from 'react'



const Header = () => {
    const [serachText, setSearchText] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const isLoggedIn = true;
    const userName = "Pramod"


    return (
        <header className='py-[10px] px-10 flex items-center bg-blue-500  justify-between relative'>
            <Image
                src={"/images/logo1.png"}
                alt=""
                className="rounded-full"
                width={35}
                height={35}
            />
            <div className=' w-1/3  bg-white  items-center justify-between ml-10 hidden sm:flex'>
                <input
                    type="text"
                    className='outline-none px-2 py-1 w-full'
                    onChange={(e) => setSearchText(e.target.value)}
                    value={serachText}
                />
                <button className='  pr-1 bg-white self-stretch text-blue-800'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>


            </div>

            <div className='flex items-center   gap-x-4'>
                {isLoggedIn ?
                    <>
                        <div
                            onClick={() => setShowMenu(!showMenu)}
                            className='bg-gradient-to-bl from-purple-900 to-fuchsia-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold cursor-pointer'>{userName[0]}</div>
                        {
                            showMenu
                             &&
                            <div className='z-[1] bg-gray-200 absolute top-[100%] right-3  font-semibold  min-w-[150px]'>
                              <p className='py-2 border border-b border-b-gray-300 px-4 cursor-pointer hover:bg-gray-300 '>My Profile</p>
                              <p className='py-2 border border-b border-b-gray-300 px-4 cursor-pointer hover:bg-gray-300'>Cart</p>
                              <p className='py-2 border border-b border-b-gray-300 px-4 cursor-pointer hover:bg-gray-300'>Orders</p>
                              <p className='py-2 border border-b border-b-gray-300 px-4 cursor-pointer hover:bg-gray-300'>Wish List</p>
                              <p className='py-2 border  px-4 cursor-pointer hover:bg-gray-300'>Logout</p>
                            </div>
                        }


                    </> :
                    <button className=' bg-white px-8 py-1 text-blue-500 font-semibold'>Login</button>
                }
                <button className='text-white  relative'>
                    <span className='bg-red-500 -top-[30%]  text-white absolute text-xs px-2 rounded-[4px]'>0</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </button>
            </div>



        </header>
    )
}

export default Header

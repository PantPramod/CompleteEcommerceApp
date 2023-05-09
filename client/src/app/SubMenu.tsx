import React from 'react'

const SubMenu = () => {
  return (
    <>
      <div className='bg-black text-white px-10  text-[14px] flex'>
        <p className='border border-black hover:border-white px-4 cursor-pointer py-2 hidden sm:block'>Best Seller</p>
        <p className='border border-black hover:border-white px-4 cursor-pointer py-2 hidden sm:block'>Todays Deals</p>
        <p className='border border-black hover:border-white px-4 cursor-pointer py-2 hidden sm:block'>Mobile</p>
        <p className='border border-black hover:border-white px-4 cursor-pointer py-2 hidden sm:block'>Electronics</p>
        <p className='border border-black hover:border-white px-4 cursor-pointer py-2 hidden sm:block'>New Release</p>
        <p className='border border-black hover:border-white px-4 cursor-pointer py-2 hidden sm:block'>Prime</p>
        <p className='cursor-pointer py-2 sm:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </p>
      </div>
    </>
  )
}

export default SubMenu

import React from 'react'

const Card = () => {
  return (
    <div className='max-w-[300px] bg-white p-4 rounded-md cursor-pointer'>
      <h1 className='font-bold text-xl'>Up to 30% off | School essentials at best prices</h1>
      <div className='flex flex-wrap '>
        <div className='w-1/2 p-2'>
          <img src="https://source.unsplash.com/200x200/?books,pen" className='' alt="" />
          <p className='text-xs'>School textbook and guides</p>
        </div>
        <div className='w-1/2 p-2'>
          <img src="https://source.unsplash.com/200x200/?books,pen1" className='' alt="" />
          <p className='text-xs'>School book combo sets</p>
        </div>
        <div className='w-1/2 p-2'>
          <img src="https://source.unsplash.com/200x200/?books,pen2" className='' alt="" />
          <p className='text-xs'>School textbook and guides</p>
        </div>
        <div className='w-1/2 p-2'>
          <img src="https://source.unsplash.com/200x200/?books,pen3" className='' alt="" />
          <p className='text-xs'>School book combo sets</p>
        </div>
      </div>
    </div>
  )
}

export default Card

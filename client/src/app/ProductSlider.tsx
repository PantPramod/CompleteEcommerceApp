"use client"
import  { useRef } from 'react'

type propTypes={
  heading?:string
}
const ProductSlider = ({heading}:propTypes) => {
const scrollBarRef = useRef<any>();
const scrollContainerRef = useRef<any>();
  return (
    <div 
    ref={scrollContainerRef}
    className='relative  my-10  bg-white '>
      <p className='font-bold text-left ml-10 text-2xl pt-4'>{heading}</p>
    <div 
    ref={scrollBarRef}
    className='flex overflow-x-scroll scroll-hide'>
      <div 
      onClick={()=>scrollBarRef.current.scrollLeft-=window.innerWidth}
      className='absolute bg-[rgba(245, 240, 240, 0.301)] hover:bg-black w-[50px] left-0 top-0 bottom-0 text-white flex items-center justify-center cursor-pointer ' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      <div 
      onClick={()=>scrollBarRef.current.scrollLeft+=window.innerWidth}
      className='absolute bg-[rgba(245, 240, 240, 0.301)] hover:bg-black w-[50px] right-0 top-0 bottom-0 text-white flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      {
        arr.map((product) => <div className=''>
          <Product
            imgSrc={product.imgSrc}
            name={product.name}
            price={product.price}
            desc={product.desc}
          />
        </div>)
      }
    </div>
    </div>
  )
}

export default ProductSlider


type productProps = {
  imgSrc: string,
  name: string,
  price: number,
  desc: string
}

const Product = ({ imgSrc, name, price, desc }: productProps) => {
  return <div className='w-[100vw] sm:w-[33.33vw]   lg:w-[20vw] h-[200] flex flex-col justify-center items-center p-4'>
    <img
      src={imgSrc}
      alt={imgSrc}
      width={200}
      height={200}
      className='w-[200px] h-[200px]'
    />
    <p className='font-bold'>{name}</p>
    <p className='text-green-500 font-bold'>Price: ₹{price}</p>
    <p className="text-xs">{desc}</p>
  </div>
}


const arr = [
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,5g", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,5g4", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,5g10", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,4g", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,3g", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {

    imgSrc: "https://source.unsplash.com/400x400/?tech,5g", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,5g4", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,5g10", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,4g", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,3g", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {

    imgSrc: "https://source.unsplash.com/400x400/?tech,5g", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,5g4", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,5g10", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,4g", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,3g", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {

    imgSrc: "https://source.unsplash.com/400x400/?tech,5g", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,5g4", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,5g10", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,4g", name: "Mobile Phone", price: 10, desc: "One Plus"
  },
  {
    imgSrc: "https://source.unsplash.com/400x400/?tech,3g", name: "Mobile Phone", price: 10, desc: "One Plus"
  }


]
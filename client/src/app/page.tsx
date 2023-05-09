import React from 'react'
import ControlledCarousel from './Carousel'
import ProductSlider from './ProductSlider'
import Card from './Card'



const Home = () => {
  return (
    <div className='bg-[#E3E6E6]'>
      <ControlledCarousel />
      <ProductSlider heading="Best Sellers in Computers & Accessories" />
      <div className='flex px-10 gap-x-5 flex-wrap gap-y-10'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <ProductSlider heading="Festive wear from small businesses" />
      <div className='flex px-10 gap-x-5 flex-wrap gap-y-10 pb-10'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
   
    </div>
  )
}

export default Home




"use client"



import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const carouselStyles = {
  carousel: "w-full bg-green-400",
  slide: "flex justify-center bg-blue-400 items-center h-80 bg-gray-200 w-full",
  image: "object-cover max-h-full w-full bg-red-400",
};

const images = [
    "https://source.unsplash.com/1200x300/?tech,5g1",
    "https://source.unsplash.com/1200x300/?tech,5g2",
    "https://source.unsplash.com/1200x300/?tech,5g3",
    "https://source.unsplash.com/1200x300/?tech,5g4",
  
  ];

const HomePage = () => {
  return (
    <div className=" mx-auto  w-full hidden sm:block">
     {/* @ts-ignore   */}
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        interval={3000}
        // styles={carouselStyles}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img 
            src={image} 
            className={carouselStyles.image}  
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePage;

import React, { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

import HeroBg1 from '../assets/hero-images/home-hero-bg.jpg';
import HeroBg3 from '../assets/hero-images/home-hero-bg-3.jpg';
import HeroBg4 from '../assets/hero-images/home-hero-bg-4.jpeg';

import Logo from '../assets/latest-hero-logo.png'


const Hero = () => {

  const heroImages = [
    HeroBg1,
    HeroBg4,
    HeroBg3,
  ]



const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

return () => clearInterval(interval);

},[])




  return (
    <Fade triggerOnce>
      <div
        style={{
          backgroundImage: `url(${heroImages[currentIndex]})`,
        }}
        className="bg-black relative h-[360px] sm:h-[440px] md:h-[540px] lg:h-screen w-full bg-cover bg-center poppins-regular transition-all"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Slide triggerOnce direction="up">
            <div className="text-center text-white flex flex-col items-center">
              {/* Hero Title */}
              {/* <h1 className="text-5xl min-[425px]:text-6xl sm:text-8xl lg:text-9xl font-bold drop-shadow-2xl flex justify-center items-center">
                Max<span className="text-red-600">V</span>coco
              </h1> */}
              <img src={Logo} alt="logo" className='h-16 w-[260px] min-[425px]:h-20 min-[425px]:w-[320px] sm:h-24 sm:w-[400px] md:h-28 md:w-[440px] lg:h-36 lg:w-[760px] xl:h-44 xl:w-[820] object-contain object-center' />
           

              {/* Subheading */}
              <div className="bg-[#fdf6f0] bg-opacity-80 text-[#4e3620] py-2 sm:py-3 lg:py-4 rounded mt-4 mx-auto max-w-lg">
                <p className="min-[425px]:text-xl sm:text-2xl lg:text-4xl font-semibold text-center px-6">
                  Chocolates & Cocoa
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </Fade>
  );
};

export default Hero;

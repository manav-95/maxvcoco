import React, { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import HeroBg1 from '../assets/hero-images/home-hero-bg.jpg';
import HeroBg2 from '../assets/hero-images/home-hero-bg-2.webp';
import HeroBg3 from '../assets/hero-images/home-hero-bg-3.jpg';

const Hero = () => {

  const heroImages = [
    HeroBg1,
    HeroBg2,
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
        className="relative h-[360px] sm:h-[440px] md:h-[540px] lg:h-screen w-full bg-cover bg-center poppins-regular transition-all"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Slide triggerOnce direction="up">
            <div className="text-center text-white">
              {/* Hero Title */}
              <h1 className="text-5xl min-[425px]:text-6xl sm:text-8xl lg:text-9xl font-bold drop-shadow-2xl flex justify-center items-center">
                Max<span className="text-red-600">V</span>coco
              </h1>

              {/* Subheading */}
              <div className="bg-white bg-opacity-80 text-gray-800 py-2 sm:py-3 lg:py-4 rounded mt-4 mx-auto max-w-lg">
                <p className="min-[425px]:text-xl sm:text-2xl lg:text-4xl font-semibold text-center">
                  Chocolates & Cocoa
                </p>
              </div>

              {/* Optional Tagline */}
              {/* <p className="text-center text-xl sm:text-2xl lg:text-3xl font-medium mt-4 drop-shadow-2xl">
                Where Chocolate Meets Perfection
              </p> */}
            </div>
          </Slide>
        </div>
      </div>
    </Fade>
  );
};

export default Hero;

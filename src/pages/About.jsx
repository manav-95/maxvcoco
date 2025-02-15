import React,{useRef} from 'react';

import { Fade, Zoom, Slide } from 'react-awesome-reveal'

import { GoDotFill } from "react-icons/go";

import { motion } from "motion/react"

import ServicesHeroBg from '../assets/hero-images/services-hero-bg.webp'


import Who_We_Are from '../assets/about-images/who-we-are-image.webp'
import Vision from '../assets/about-images/our-vision.webp'

import ProfileExample from '../assets/profile-example.webp'
import Member1 from '../assets/about-images/member-1.webp'
import Member2 from '../assets/about-images/member-2.webp'
import Member3 from '../assets/about-images/member-3.webp'

import Quality from '../assets/about-images/our-values-images/quality.webp'
import Sustainability from '../assets/about-images/our-values-images/sustainability.webp'
import Innovation from '../assets/about-images/our-values-images/innovation.webp'
import Integrity from '../assets/about-images/our-values-images/integrity.webp'
import Teamwork from '../assets/about-images/our-values-images/teamwork.webp'

const About = () => {
  
  const whoWeAreRef = useRef(null);

  const scrollToWhoWeAre = () => {
    whoWeAreRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const ourValues = [
    { id: 1, delay: 0, colSpan: 'sm:col-span-6 lg:col-span-4', image: Quality, title: 'Quality', description: 'Every product is crafted with precision and care, ensuring an unparalleled experience for our customers. Excellence is our standard.', },
    { id: 2, delay: 150, colSpan: 'sm:col-span-6 lg:col-span-4', image: Sustainability, title: 'Sustainability', description: 'We are committed to eco-friendly practices, minimizing our environmental footprint while maximizing social impact.', },
    { id: 3, delay: 300, colSpan: 'sm:col-span-6 lg:col-span-4', image: Innovation, title: 'Innovation', description: 'Through creativity and adaptability, we continuously explore new ideas to elevate our products and services.', },
    { id: 4, delay: 450, colSpan: 'sm:col-span-6 lg:col-span-6', image: Integrity, title: 'Integrity', description: 'Transparency and honesty are at the core of everything we do, ensuring trust and credibility with our stakeholders.', },
    { id: 5, delay: 600, colSpan: 'sm:col-span-6 lg:col-span-6', image: Teamwork, title: 'Teamwork', description: ' Collaboration and mutual respect drive our efforts, bringing together diverse talents to achieve common goals.', },
  ]

  const teamMembers = [
    { id: 1, delay: 0, image: Member1, name: 'Harish Kothari', role: 'Founder & CEO', },
    { id: 2, delay: 200, image: Member2, name: 'Makarand Parturkar', role: 'Chief Technology Officer', },
    { id: 3, delay: 400, image: Member3, name: 'Meghana Kothari', role: 'Director', }
  ]

  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 }, // Start below the view
    visible: { opacity: 1, y: 0 }, // Slide to its position
    exit: { opacity: 0, y: 50 }, // Slide out downward (optional)
  };

  return (
    <div className=" min-h-screen poppins-regular">

      <Fade triggerOnce duration={1200}>
        <header
          style={{ backgroundImage: `url(${ServicesHeroBg})` }}
          className="relative bg-cover bg-center h-[300px] md:h-[320px] lg:h-[340px] flex items-center justify-center text-center text-white kanit-regular"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className='max-w-7xl container mx-auto flex flex-col justify-center items-center px-4'>
            <h1 className="text-3xl min-[425px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold drop-shadow-2xl">
              Crafting Moments Of Pure Joy
            </h1>
          </div>
        </header>
      </Fade>

      {/* Who We Are */}
      <section  ref={whoWeAreRef} className="py-10 lg:py-14 px-4 bg-[#4E3620] text-[#FDF6F0]">
        <div className="max-w-7xl container mx-auto">
          <h2 className="text-5xl font-bold text-brown-800 mb-8 text-center kanit-semibold">Who We Are</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 items-center lg:py-4">
            <motion.div
              variants={slideFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full h-full px-4 sm:px-10 md:px-10 lg:px-0">
              <img
                src={Who_We_Are}
                alt="Cocoa beans"
                className="rounded-xl object-center object-cover aspect-auto shadow-lg w-full h-full"

              />
            </motion.div>
            <motion.div
              variants={slideFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              className="flex flex-col space-y-6 px-4 sm:px-10 md:px-10 lg:px-0 lg:pl-12">
              <div>
                <h1 className='text-xl font-semibold mb-1.5'>FOUNDER AND CEO</h1>
                <p className="text-base font-medium leading-relaxed">
                  Harish Kothari is a distinguished entrepreneur from Mumbai. A self-made visionary, he built his food
                  processing business from the ground up. With a strong consumer-focused approach, he excels in
                  creating delicious chocolate formulations. Driven by passion and enthusiasm, he is always eager to
                  support and uplift others.
                </p>
              </div>
              <div>
                <h1 className='text-xl font-semibold mb-1.5'>CHIEF TECHNOLOGY OFFICER</h1>
                <p className='text-base font-medium leading-relaxed'>
                  Makarand Parturkar is a seasoned professional in food processing with an M. Tech in Food Sciences
                  from Marathwada Agricultural University and an MBA from Birla Institute of Technology. He has
                  played a key role in developing indulgent yet nutritious food products, combining expertise with
                  innovation.
                </p>
              </div>
              <div>
                <h1 className='text-xl font-semibold mb-1.5'>DIRECTOR</h1>
                <p className='text-base font-medium leading-relaxed'>
                  Meghana Kothari, a distinguished nutrition expert and accomplished businesswoman, has ventured
                  into the hotel industry and cocoa imports in India, catering to multinational companies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission  */}
      <section className="py-10 lg:py-14 px-4 bg-[#FDF6F0]">
        <div className="max-w-7xl container mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-center text-[#4E3620] kanit-semibold">Our Mission</h2>
          <motion.div
            variants={slideFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            className="bg-[#4E3620] text-[#fdf6f0] rounded-lg shadow-lg p-8 sm:p-12">
            <p className="text-lg font-medium leading-relaxed">
              At MAXVCOCO, we deliver maximum value through premium chocolate solutions that
              elevate products, drive business success, and delight consumers. Our commitment to
              excellence ensures:
            </p>
            <div className='mt-6 flex flex-col space-y-4 text-lg font-medium'>
              <p className='flex items-start justify-start'><GoDotFill className='h-4 w-4 flex-shrink-0 mt-1 mr-1' />Superior chocolate products designed for impact and indulgence.</p>
              <p className='flex items-start justify-start'><GoDotFill className='h-4 w-4 flex-shrink-0 mt-1 mr-1' />Innovative, customizable solutions that enhance brand appeal and consumer experience.</p>
              <p className='flex items-start justify-start'><GoDotFill className='h-4 w-4 flex-shrink-0 mt-1 mr-1' />Expert guidance to help partners create market-leading offerings.</p>
              <p className='flex items-start justify-start'><GoDotFill className='h-4 w-4 flex-shrink-0 mt-1 mr-1' />Optimized production for efficiency, quality, and scalability.</p>
              <p className='flex items-start justify-start'><GoDotFill className='h-4 w-4 flex-shrink-0 mt-1 mr-1' />Sustainable practices that balance performance and responsibility.</p>
            </div>
            <div className='mt-6'>
              <p className="text-lg font-medium leading-relaxed" >MAXVCOCO helps businesses create chocolate experiences that captivate and satisfy.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Vision  */}
      <section className="pb-10 lg:pb-14 px-4 bg-[#FDF6F0]">
        <div className="max-w-7xl container mx-auto">
          <h2 className="text-5xl font-bold text-[#4E3620] mb-8 text-center kanit-semibold">Our Vision</h2>
          <div className="bg-[#4E3620] text-[#fdf6f0] rounded-lg shadow-lg p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <p className="text-lg font-medium leading-relaxed">
                To be the leading partner for businesses seeking premium chocolate solutions that maximize
                value, drive innovation, and create unforgettable consumer experiences. We envision a future
                where every product infused with MAXVCOCO chocolate sets new standards of quality,
                indulgence, and market success.
              </p>
              <div className='mt-6 flex flex-col space-y-4 text-lg font-medium'>
                <p className='flex items-start justify-start'><GoDotFill className='h-4 w-4 flex-shrink-0 mt-1 mr-1' />Become the most beloved and respected chocolate brand worldwide</p>
                <p className='flex items-start justify-start'><GoDotFill className='h-4 w-4 flex-shrink-0 mt-1 mr-1' />Lead the industry in sustainable and innovative chocolate production</p>
                <p className='flex items-start justify-start'><GoDotFill className='h-4 w-4 flex-shrink-0 mt-1 mr-1' />Inspire a global community of chocolate enthusiasts and conscious consumers</p>
                <p className='flex items-start justify-start'><GoDotFill className='h-4 w-4 flex-shrink-0 mt-1 mr-1' />Create a positive ripple effect from bean to bar, improving lives and ecosystems</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={Vision} alt="Chocolate assortment" className="object-center object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>



      {/* VALUES SECTION */}
      <section className='w-full px-4 py-10 bg-[#4E3620] text-[#FDF6F0] poppins-regular'>
        <div className='max-w-7xl container mx-auto'>

          <Zoom triggerOnce>
            <h2 className="text-5xl  rounded-lg font-extrabold text-center mb-8 kanit-semibold">Our Core Values</h2>
          </Zoom>

          <div className='grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12 gap-10 mt-16 sm:px-4'>
            {ourValues.map(value => (
              <Zoom delay={value.delay} duration={1200} triggerOnce className={`${value.colSpan} group flex flex-col justify-center items-center text-center bg-[#fdf6f0] text-[#664436] hover:bg-[#FDF6F0] p-6 rounded-lg shadow-lg md:bg-[#664436] md:bg-opacity-50 transition-all duration-200 ease-in-out`}>
                <div key={value.id} className='flex flex-col justify-center items-center text-center'>
                  <img src={value.image} alt={value.title} className='h-32 w-32 p-4 mb-2 rounded' />
                  <h3 className="text-2xl font-semibold text-[#664436] md:text-[#fdf6f0] kanit-semibold group-hover:text-[#4E3620] transition-all duration-200 ease-in-out">{value.title}</h3>
                  <p className="mt-4 text-[#664436] md:text-[#fdf6f0] font-medium group-hover:text-[#4E3620] transition-all duration-200 ease-in-out">
                    {value.description}
                  </p>
                </div>
              </Zoom>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className='bg-[#4E3620] text-[#FDF6F0] poppins-regular'>
        <section className="py-14 px-4 max-w-7xl mx-auto">

          <Slide triggerOnce direction='up'>
            <h2 className="text-4xl font-bold text-center">Meet Our Team</h2>
          </Slide>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 sm:px-4">
            {teamMembers.map(member => (
              <Slide triggerOnce direction='up' delay={member.delay}>
                <div
                onClick={scrollToWhoWeAre}
                  key={member.id}
                  className="text-center bg-[#FDF6F0] text-[#4E3620] rounded-lg shadow-lg p-6 cursor-pointer"
                >
                  <img
                    src={member.image}
                    alt={member.role}
                    className="w-28 h-28 object-cover rounded-full mx-auto bg-[#d6b596]"
                  />
                  <h3 className="mt-4 text-xl font-semibold ">{member.name}</h3>
                  <p className=" text-md font-semibold uppercase">{member.role}</p>
                </div>
              </Slide>
            ))}

          </div>
        </section>
      </div>

    </div>
  );
};

export default About;

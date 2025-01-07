import React from 'react';

import { Fade, Zoom, Slide } from 'react-awesome-reveal'

import AboutHeroBg from '../assets/hero-images/about-hero-bg.jpeg';
import ServicesHeroBg from '../assets/hero-images/services-hero-bg.jpg'

import Mission from '../assets/about-images/mission-image.png';

import ProfileExample from '../assets/profile-example.jpeg'

import Quality from '../assets/about-images/our-values-images/quality.png'
import Sustainability from '../assets/about-images/our-values-images/sustainability.png'
import Innovation from '../assets/about-images/our-values-images/innovation.png'
import Integrity from '../assets/about-images/our-values-images/integrity.png'
import Teamwork from '../assets/about-images/our-values-images/teamwork.png'

const About = () => {

  const ourValues = [
    { id: 1, delay: 0, colSpan: 'sm:col-span-6 lg:col-span-4', image: Quality, title: 'Quality', description: 'Every product is crafted with precision and care, ensuring an unparalleled experience for our customers. Excellence is our standard.', },
    { id: 2, delay: 150, colSpan: 'sm:col-span-6 lg:col-span-4', image: Sustainability, title: 'Sustainability', description: 'We are committed to eco-friendly practices, minimizing our environmental footprint while maximizing social impact.', },
    { id: 3, delay: 300, colSpan: 'sm:col-span-6 lg:col-span-4', image: Innovation, title: 'Innovation', description: 'Through creativity and adaptability, we continuously explore new ideas to elevate our products and services.', },
    { id: 4, delay: 450, colSpan: 'sm:col-span-6 lg:col-span-6', image: Integrity, title: 'Integrity', description: 'Transparency and honesty are at the core of everything we do, ensuring trust and credibility with our stakeholders.', },
    { id: 5, delay: 600, colSpan: 'sm:col-span-6 lg:col-span-6', image: Teamwork, title: 'Teamwork', description: ' Collaboration and mutual respect drive our efforts, bringing together diverse talents to achieve common goals.', },
  ]

  const teamMembers = [
    { id: 1, delay: 0, image: ProfileExample, name: 'Member 1', role: 'Founder & CEO', },
    { id: 2, delay: 200, image: ProfileExample, name: 'Member 2', role: 'Head of Marketing', },
    { id: 3, delay: 400, image: ProfileExample, name: 'Member 3', role: 'Product Manager', }
  ]

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
            {/* <p className="mt-2 text-md min-[425px]:text-lg md:text-xl lg:text-3xl drop-shadow-2xl">
        Discover a variety of chocolate delights for baking, snacking, and creating
        </p> */}
          </div>
        </header>
      </Fade>


      {/* Mission Section */}
      <div className='w-full bg-[#4E3620] text-[#FDF6F0]'>
        <section className="py-6 lg:py-16 px-4 max-w-7xl mx-auto poppins-regular">
          <div className="flex flex-col-reverse items-center justify-center space-y-12 lg:flex-row lg:space-y-0 lg:items-center lg:justify-between">

            <Slide triggerOnce direction='up' className='lg:w-6/12 mt-16 lg:mt-0'>
              <div>
                <h2 className="text-5xl font-bold kanit-semibold text-center lg:text-left">Our Mission</h2>
                <p className="mt-6 text-lg min-[425px]:text-center lg:text-left">
                  Our mission is to deliver not just products but experiences that inspire joy and
                  connection. With a relentless focus on quality and innovation, we strive to bring
                  our customers closer to moments that matter.
                </p>
                <p className="mt-4 text-lg min-[425px]:text-center lg:text-left">
                  We believe in empowering communities, supporting sustainable practices, and
                  fostering creativity to leave a lasting positive impact on society. Our journey
                  is fueled by passion and guided by purpose.
                </p>
              </div>
            </Slide>

            <Slide triggerOnce direction='up' delay={200} className='lg:w-5/12 flex justify-center items-center bg-[#FDF6F0] bg-opacity-5 rounded-xl p-4'>
              <div>
                <img
                  src={Mission}
                  alt="Mission"
                  className="h-[400px] w-[400px] object-contain rounded-lg xl:rotate-45"
                />
              </div>
            </Slide>

          </div>
        </section>
      </div>

      {/* VALUES SECTION */}
      <section className='w-full px-4 py-10 bg-[#4E3620] text-[#FDF6F0] poppins-regular'>
        <div className='max-w-7xl container mx-auto'>

          <Zoom triggerOnce>
            <h2 className="text-5xl  rounded-lg font-extrabold text-center mb-8 kanit-semibold">Our Core Values</h2>
          </Zoom>

          <div className='grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12 gap-10 mt-16'>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
            {teamMembers.map(member => (
              <Slide triggerOnce direction='up' delay={member.delay}>
                <div
                  key={member.id}
                  className="text-center bg-[#FDF6F0] text-[#4E3620] rounded-lg shadow-lg p-6"
                >
                  <img
                    src={member.image}
                    alt={member.role}
                    className="w-24 h-24 object-cover rounded-full mx-auto"
                  />
                  <h3 className="mt-4 text-xl font-semibold ">{member.name}</h3>
                  <p className=" text-md font-semibold">{member.role}</p>
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

import React from 'react';
import AboutHeroBg from '../assets/hero-images/about-hero-bg.jpeg';
import Mission from '../assets/about-images/our-mission-image.jpeg';

import Quality from '../assets/about-images/our-values-images/quality.png'
import Sustainability from '../assets/about-images/our-values-images/sustainability.png'
import Innovation from '../assets/about-images/our-values-images/innovation.png'
import Integrity from '../assets/about-images/our-values-images/integrity.png'
import Teamwork from '../assets/about-images/our-values-images/teamwork.png'

const About = () => {

  const ourValues = [
    { id: 1, colSpan: 'col-span-4', image: Quality, title: 'Quality', description: 'Every product is crafted with precision and care, ensuring an unparalleled experience for our customers. Excellence is our standard.', },
    { id: 2, colSpan: 'col-span-4', image: Sustainability, title: 'Sustainability', description: 'We are committed to eco-friendly practices, minimizing our environmental footprint while maximizing social impact.', },
    { id: 3, colSpan: 'col-span-4', image: Innovation, title: 'Innovation', description: 'Through creativity and adaptability, we continuously explore new ideas to elevate our products and services.', },
    { id: 4, colSpan: 'col-span-6', image: Integrity, title: 'Integrity', description: 'Transparency and honesty are at the core of everything we do, ensuring trust and credibility with our stakeholders.', },
    { id: 5, colSpan: 'col-span-6', image: Teamwork, title: 'Teamwork', description: ' Collaboration and mutual respect drive our efforts, bringing together diverse talents to achieve common goals.', },
  ]

  return (
    <div className="bg-gray-100 min-h-screen poppins-regular">

      <header
        className="relative bg-cover bg-center h-[400px] kanit-regular"
        style={{ backgroundImage: `url(${AboutHeroBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-65 flex items-center justify-center text-center text-white">
          <div className='flex flex-col items-center'>
            <h1 className="text-5xl font-extrabold drop-shadow-lg">Crafting Moments of Pure Joy</h1>
            <p className="max-w-xl mt-4 text-xl sm:text-2xl drop-shadow-lg">
            Discover our journey of passion, excellence, and commitment to delivering exceptional chocolate experiences to brighten every occasion.
            </p>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto poppins-regular">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 kanit-semibold">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              Our mission is to deliver not just products but experiences that inspire joy and
              connection. With a relentless focus on quality and innovation, we strive to bring
              our customers closer to moments that matter.
            </p>
            <p className="mt-4 text-gray-600">
              We believe in empowering communities, supporting sustainable practices, and
              fostering creativity to leave a lasting positive impact on society. Our journey
              is fueled by passion and guided by purpose.
            </p>
          </div>
          <img
            src={Mission}
            alt="Mission"
            className="h-[500px] w-[500px] rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className='px-4 py-16 bg-white poppins-regular'>
        <div className='max-w-7xl container mx-auto'>
          <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-8 kanit-semibold">Our Core Values</h2>
          <div className='grid grid-cols-1 gap-10 my-6'>
            {ourValues.map(value => (
                <div key={value.id} className={`${value.colSpan} group flex flex-col justify-center items-center text-center bg-gray-50 p-6  rounded-lg shadow-lg hover:bg-[#664436] hover:bg-opacity-85 transition-all duration-200 ease-in-out`}>
                  <img src={value.image} alt={value.title} className='h-32 w-32 p-4 mb-2 rounded' />
                <h3 className="text-2xl font-semibold text-gray-800 kanit-semibold group-hover:text-white transition-all duration-200 ease-in-out">{value.title}</h3>
                <p className="mt-4 text-gray-600 font-medium group-hover:text-white transition-all duration-200 ease-in-out">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600 text-sm">Founder & CEO</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600 text-sm">Head of Marketing</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Sarah Johnson</h3>
            <p className="text-gray-600 text-sm">Product Manager</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold">Want to Get in Touch?</h3>
          <p className="mt-2">Feel free to reach out to us for inquiries, feedback, or collaboration.</p>
          <button className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded text-white font-medium">
            Contact Us
          </button>
        </div>
      </footer>
    </div>
  );
};

export default About;

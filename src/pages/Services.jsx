import { FaSeedling, FaMugHot, FaBox, FaChartLine, FaRegHeart, FaHandsHelping } from 'react-icons/fa';

import { Fade, Zoom } from 'react-awesome-reveal'

import ServicesHeroBg from '../assets/hero-images/services-hero-bg.jpg'

const Services = () => {

  const services = [
    {
      id: 1,
      icon: FaSeedling,
      delay: 0,
      title: 'Sustainable Sourcing',
      description: 'Ethically sourced cocoa beans from farmers committed to sustainable and eco-friendly practices.'
    },
    {
      id: 2,
      icon: FaMugHot,
      delay: 150,
      title: 'Premium Hot Cocoa',
      description: 'Rich and creamy hot cocoa blends crafted with the finest ingredients for an indulgent experience.'
    },
    {
      id: 3,
      icon: FaBox,
      delay: 300,
      title: 'Custom Gift Boxes',
      description: 'Beautifully curated chocolate gift boxes for every occasion, tailored to delight your loved ones.'
    },
    {
      id: 4,
      icon: FaChartLine,
      delay: 450,
      title: 'Wholesale Partnerships',
      description: 'Reliable supply and competitive pricing for businesses looking to source premium chocolate products.'
    },
    {
      id: 5,
      icon: FaRegHeart,
      delay: 600,
      title: 'Artisan Creations',
      description: 'Handcrafted chocolates with unique flavors and designs, made to elevate your chocolate experience.'
    },
    {
      id: 6,
      icon: FaHandsHelping,
      delay: 750,
      title: 'Community Support',
      description: 'Giving back to cocoa farming communities through education, resources, and fair trade practices.'
    }
  ];

  return (
    <div className="bg-[#4E3620] poppins-regular">

      <Fade triggerOnce duration={1200}>
        <header
          style={{ backgroundImage: `url(${ServicesHeroBg})` }}
          className="relative bg-cover bg-center h-[300px] md:h-[320px] lg:h-[340px] flex items-center justify-center text-center text-white kanit-regular"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className='max-w-7xl container mx-auto flex flex-col justify-center items-center px-4'>
            <h1 className="text-5xl min-[425px]:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold drop-shadow-2xl">
              Our Services
            </h1>
            <p className="mt-2 text-xl sm:text-2xl lg:text-3xl xl:text-4xl drop-shadow-2xl">
              Crafting the finest chocolate experiences, sustainably.
            </p>
          </div>
        </header>
      </Fade>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Zoom key={service.id} triggerOnce duration={1200} delay={service.delay} className=" text-[#4E3620] bg-[#FDF6F0] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div >

                <div className="p-6">

                  <div className='bg-[#4E3620] lg:bg-transparent p-4 lg:p-0 rounded-xl flex justify-center items-center lg:justify-start mb-4'>
                    <service.icon className="h-12 w-12 text-[#FDF6F0] lg:text-[#FDF6F0] lg:bg-[#443620] lg:p-4 lg:h-16 lg:w-16 lg:rounded-lg" />
                  </div>

                  <h3 className="text-xl font-bold text-[#4E3620] mb-2">{service.title}</h3>
                  <p className="text-sm font-medium text-[#4E3620]">{service.description}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Services;
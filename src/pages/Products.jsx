// import React from 'react';
// import products from '../data/products';
// import { Fade, Slide } from 'react-awesome-reveal'
// import HeroImage from '../assets/hero-images/products-hero-bg.jpg'


// const Products = () => {



//   return (  
//     <>
//     <div className=" bg-white min-h-screen">
//       {/* Hero Section */}
//       <Fade triggerOnce>

//         <header style={{ backgroundImage: `url(${HeroImage})` }} className="relative bg-cover h-[400px] flex items-center justify-center text-center text-white kanit-regular">
//           <div className='absolute inset-0 bg-black bg-opacity-25 '>
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
//               <h1 className="text-5xl font-extrabold drop-shadow-2xl opacity-100">Our Premium Chocolate Products</h1>
//               <p className="mt-2 text-2xl drop-shadow-2xl opacity-100">Discover a variety of chocolate delights for baking, snacking, and creating</p>
//             </div>
//           </div>
//         </header>
//       </Fade>

//       {/* Products Grid */}
//       <section className="poppins-regular">
//         <Slide triggerOnce direction='up'>
//           <h2 className="text-4xl font-bold text-center my-14 uppercase">Our Products</h2>
//         </Slide>
//         <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
//           {products.map((product) => (
//             <Slide
//               triggerOnce
//               direction='up'
//               delay={product.delay}
//               key={product.id}
//               className={`${product.colSpan} ${product.rowSpan} group overflow-hidden hover:scale-105 transition-transform bg-white shadow-lg rounded-lg  hover:shadow-xl`}
//               >
//               <div
//               >
//                 {product.image && (
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className={`${product.imageHeight} h-64 w-full object-cover`}
//                   />
//                 )}
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold">{product.name}</h3>
//                   <p className="text-gray-600 mt-2 text-sm group-hover:text-red-500 transition-all duration-200 ease-in-out">{product.description}</p>
//                 </div>
//               </div>
//             </Slide>
//           ))}
//         </div>
//       </section>

//       {/* Call to Action */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 className="text-2xl font-bold">Want to Learn More?</h3>
//           <p className="mt-2">Contact us or explore our collection to discover more chocolate varieties.</p>
//           <button className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded text-white font-medium">
//             Contact Us
//           </button>
//         </div>
//       </footer>
//     </div>
//     </>
//   );
// };

// export default Products;

import React, { useState } from 'react';
import products from '../data/productPageData';

import { FaChevronDown } from "react-icons/fa";

import { Fade, Slide } from 'react-awesome-reveal'
import HeroImage from '../assets/hero-images/products-hero-bg.jpg'

const Products = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const categories = Object.keys(products);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);


  // Get Filtered Products 
  const filteredProducts = selectedCategory === ''
    ? Object.values(products).flat()
    : products[selectedCategory];
  return (
    <>

      <Fade triggerOnce>
        <header style={{ backgroundImage: `url(${HeroImage})` }} className="relative bg-cover h-[400px] flex items-center justify-center text-center text-white kanit-regular">
          <div className='absolute inset-0 bg-black bg-opacity-25 '>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              <h1 className="text-5xl font-extrabold drop-shadow-2xl opacity-100">Our Premium Chocolate Products</h1>
              <p className="mt-2 text-2xl drop-shadow-2xl opacity-100">Discover a variety of chocolate delights for baking, snacking, and creating</p>
            </div>
          </div>
        </header>
      </Fade>

      <div className='w-full bg-[#4e3620] poppins-regular'>
        <div className='max-w-7xl container mx-auto px-4 lg:py-10'>
          <div className='flex flex-col space-y-4 lg:flex-row lg:items-start lg:space-y-0 justify-center'>

            {/* For Small Screens  */}
            <Slide triggerOnce direction='up' duration={1200}>
              <div className='lg:hidden mt-4'>
                <button onClick={toggleDropdown} className='w-full flex justify-between items-center text-xl text-[#4E3620] font-semibold bg-[#fbecdf] py-3 px-4 rounded'>
                  Select Category
                  {dropdownOpen ? <FaChevronDown className='rotate-180 transition-all duration-200 ease-in-out' /> : <FaChevronDown className='rotate-0 transition-all duration-200 ease-in-out' />}
                </button>
                {dropdownOpen &&
                  <div className='bg-[#fbecdf] rounded p-2 mt-2 w-full'>
                    {categories.map(category => (
                      <button
                        key={category}
                        className={`w-full text-left px-6 py-3 rounded ${selectedCategory === category
                          ? 'bg-red-400  font-medium text-white'
                          : 'bg-[#fbecdf]  font-medium text-[#4e3620]'
                          }`}
                        onClick={() => { setSelectedCategory(category); setDropdownOpen(false) }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                }
              </div>
            </Slide>


            {/* For Medium + Screens  */}
            <Slide triggerOnce direction='up'>
              <div className="hidden lg:w-4/12 lg:grid content-center gap-3 lg:mr-4">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-6 py-3 rounded ${selectedCategory === category
                      ? 'bg-red-400  font-medium text-white'
                      : 'bg-[#fbecdf]  font-medium text-[#4e3620]'
                      }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Slide>

            <section className="w-full poppins-regular">
              {/* <Slide triggerOnce direction='up'>
              <h2 className="text-4xl font-bold text-center uppercase">Our Products</h2>
            </Slide> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Slide
                    triggerOnce
                    direction='up'
                    key={product.id}
                    className='bg-[#fbecdf] p-2 shadow-lg rounded-lg hover:shadow-xl'
                  >
                    <div
                      className=''
                    >
                      {product.image && (
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`h-56 w-full object-cover`}
                        />
                      )}
                      <div className="p-3 text-center bg-red-400 rounded-md">
                        <h3 className="text-lg font-semibold text-[#fff]">{product.name}</h3>
                      </div>
                    </div>
                  </Slide>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>


    </>
  )
}

export default Products
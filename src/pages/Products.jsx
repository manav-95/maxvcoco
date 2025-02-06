import React, { useEffect, useState } from 'react';
import products from '../data/productPageData';

import { motion } from "motion/react"

import { FaChevronDown } from "react-icons/fa";

import ServicesHeroBg from '../assets/hero-images/services-hero-bg.jpg'

import { useNavigate, useParams, useSearchParams, Link } from 'react-router-dom';

const Products = () => {


  const { category } = useParams();


  const [searchParams] = useSearchParams();
  const start = parseInt(searchParams.get("start") || "0", "10"); // Default to 0 if not provided
  const end = parseInt(searchParams.get("end") || "4", "10"); // Default to 4 if not provided
  const title1 = searchParams.get("title1");
  const title2 = searchParams.get("title2");



  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = Object.keys(products);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [filteredProducts, setFilteredProducts] = useState(products['Premixes']);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory); // Update the selected category state
    navigate(`/products/${newCategory}`); // Navigate to the category route
  };


  const reloadProducts = (category) => {
    switch (category) {
      case "Premixes":
        setFilteredProducts(products["Premixes"]);
        navigate(`/products/Premixes?start=0&end=4&title1=Cake Premixes&title2=Muffin Premixes`);
        break;
      case "Chocolate Compounds":
        setFilteredProducts(products["Chocolate Compounds"]);
        navigate(`/products/Chocolate Compounds?start=0&end=2&title1=Chocolate Compounds&title2=Flavoured Chocolate Compounds`);
        break;
      case "Real Chocolates":
        setFilteredProducts(products["Real Chocolates"]);
        navigate(`/products/Real Chocolates?start=0&end=5&title1=Real Chocolates`);
        break;
      case "Choco Pastes":
        setFilteredProducts(products["Choco Pastes"]);
        navigate(`/products/Choco Pastes?start=0&end=3&title1=Choco Pastes&title2=Flavoured Choco Pastes`);
        break;
      case "Choco Chips":
        setFilteredProducts(products["Choco Chips"]);
        navigate(`/products/Choco Chips?start=0&end=3&title1=Choco Chips`);
        break;
      case "Cocoa Substitute":
        setFilteredProducts(products["Cocoa Substitute"]);
        navigate(`/products/Cocoa Substitute?start=0&end=2&title1=Carob Powder&title2=Formulated Cocoa Substitute`);
        break;
      case "Consumer Chocolates":
        setFilteredProducts(products["Consumer Chocolates"]);
        navigate(`/products/Consumer Chocolates?start=0&end=2&title1=Consumer Chocolates`);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (category) {
      setSelectedCategory(category); // Sync the selected category with the current URL
      reloadProducts(category);      // Reload products for the new category
    }
  }, [category]);

  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 }, // Start below the view
    visible: { opacity: 1, y: 0 }, // Slide to its position
    exit: { opacity: 0, y: 50 }, // Slide out downward (optional)
  };


  const setupGrid = (start, end) => {
    return filteredProducts.slice(start, end).map((product) => (
     
        <Link
        to={`/products/product-details/${product.name}`}
        >

        <motion.div
         variants={slideFromBottom}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.2 }}
         transition={{ duration: 1, ease: "easeInOut" }} 
        key={product.id}
           className='bg-[#fbecdf] p-3 shadow-lg rounded-lg hover:shadow-xl'
        >

          <div className=''>
            <img
              src={product.image}
              alt={product.name}
              className={`h-56 w-full object-contain bg-[#855141] bg-opacity-10 rounded-lg`}
            />
          </div>

          <div className="w-full text-center mt-3">
            <h3 className="text-lg font-semibold text-[#fff] bg-[#4e3620] p-2 rounded-md ">{product.name}</h3>
          </div>
        </motion.div>
        </Link>
     
    ))
  }

  return (
    <>
      
        <header
          style={{ backgroundImage: `url(${ServicesHeroBg})` }}
          className="relative bg-cover bg-center h-[300px] md:h-[320px] lg:h-[340px] flex items-center justify-center text-center text-white kanit-regular"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className='max-w-7xl container mx-auto flex flex-col justify-center items-center px-4'>
            <h1 className="text-4xl min-[425px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-extrabold drop-shadow-2xl">
              Our Premium Chocolate Products
            </h1>
          </div>
        </header>

     

      <div className='w-full bg-[#4e3620] poppins-regular'>
        <div className='max-w-7xl container mx-auto px-4 py-2 pb-8 lg:py-10 grid grid-cols-12 gap-4'>


          {/* For Small Screens  */}
          <div className='col-span-12 lg:col-span-4 xl:col-span-3'>
              <div className='lg:hidden mt-4'>
                <button onClick={toggleDropdown} className='w-full flex justify-between items-center text-xl text-[#4E3620] font-semibold bg-[#fbecdf] py-3 px-4 rounded'>
                  Select Category
                  {dropdownOpen ? <FaChevronDown className='rotate-180 transition-all duration-200 ease-in-out' /> : <FaChevronDown className='rotate-0 transition-all duration-200 ease-in-out' />}
                </button>
                {dropdownOpen &&
                  <div className='bg-[#fbecdf] rounded p-2 mt-2 w-full'>
                    {categories.map((category, index) => (
                      <button

                        key={index}
                        className={`w-full text-left px-6 py-3 rounded ${selectedCategory === category
                          ? 'bg-red-400  font-medium text-white'
                          : 'bg-[#fbecdf]  font-medium text-[#4e3620]'
                          }`}
                        onClick={() => { navigate(`/products/${category}`); setDropdownOpen(false) }}
                        disabled={selectedCategory === category}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                }
              </div>
           


            {/* left Side For Categories  */}

            
              <motion.div
              variants={slideFromBottom}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 1, ease: "easeInOut" }} 
              className="hidden lg:grid content-center gap-3 lg:mr-4">
                {categories.map((cat, index) => (
                  <button
                    key={index}
                    className={`px-6 py-3 rounded ${selectedCategory === cat
                        ? "bg-red-400 font-medium text-white"
                        : "bg-[#fbecdf] font-medium text-[#4e3620]"
                      }`}
                    onClick={() => handleCategoryChange(cat)} // Trigger category change
                    disabled={selectedCategory === cat} 
                  >
                    {cat}
                  </button>
                ))}

              </motion.div>
           
          </div>



          {/* Right Side For Display Products */}
          <div className='col-span-12 lg:col-span-8 xl:col-span-9'>
            <section className="w-full poppins-regular">

              <h1 className='text-3xl font-semibold text-[#fbecdf] mb-6 text-center sm:text-left'>{title1}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {setupGrid(start, end + 1)}
              </div>

              {/* if not title is empty */}
              {title2 && (
                <>
                  <h1 className="text-3xl font-semibold text-[#fbecdf] my-6 text-center sm:text-left">
                    {title2}
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {setupGrid(end + 1, filteredProducts.length)}
                  </div>
                </>
              )}

            </section>
          </div>



        </div>
      </div>
    </>
  )
}

export default Products
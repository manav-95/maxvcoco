import React, { useEffect, useState } from 'react';
import products from '../data/productPageData';

import { FaChevronDown } from "react-icons/fa";

import { Fade, Slide, Zoom } from 'react-awesome-reveal'

import HeroImage from '../assets/hero-images/products-hero-bg.jpg'
import ServicesHeroBg from '../assets/hero-images/services-hero-bg.jpg'

import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const Products = () => {


  const { category } = useParams();


  const [searchParams] = useSearchParams();
  const start = parseInt(searchParams.get("start") || "0", 10); // Default to 0 if not provided
  const end = parseInt(searchParams.get("end") || "4", 10); // Default to 4 if not provided
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

  useEffect(() => {
    switch (category) {
      case "Premixes":
        setSelectedCategory(categories[0])
        setFilteredProducts(products['Premixes'])
        navigate(`/products/Premixes?start=0&end=4&title1=Cake Premixes&title2=Muffin Premixes`)
        break;
      case "Chocolate Compounds":
        setSelectedCategory(categories[1])
        setFilteredProducts(products['Chocolate Compounds'])
        navigate(`/products/Chocolate Compounds?start=0&end=2&title1=Chocolate Compounds&title2=Flavoured Compounds`)
        break;
      case "Real Chocolates":
        setSelectedCategory(categories[2])
        setFilteredProducts(products['Real Chocolates'])
        navigate(`/products/Real Chocolates?start=0&end=5&title1=Real Chocolates`)
        break;
      case "Choco Pastes":
        setSelectedCategory(categories[3])
        setFilteredProducts(products['Choco Pastes'])
        navigate(`/products/Choco Pastes?start=0&end=3&title1=Choco Pastes&title2=Flavoured Choco Pastes`)
        break;
      case "Choco Chips":
        setSelectedCategory(categories[4])
        setFilteredProducts(products['Choco Chips'])
        navigate(`/products/Choco Chips?start=0&end=3&title1=Choco Chips`)
        break;
      case "Cocoa Substitute":
        setSelectedCategory(categories[5])
        setFilteredProducts(products['Cocoa Substitute'])
        navigate(`/products/Cocoa Substitute?start=0&end=2&title1=Carob Powder&title2=Formulated Cocoa Substitute`)
        break;
      case "Consumer Chocolates":
        setSelectedCategory(categories[6])
        setFilteredProducts(products['Consumer Chocolates'])
        navigate(`/products/Consumer Chocolates?start=0&end=2&title1=Consumer Chocolates`)
        break;
      default:
        break;
    }
  }, [category])


  const setupGrid = (start, end) => {
    return filteredProducts.slice(start, end).map((product) => (
      <Slide
        delay={product.delay}
        triggerOnce
        direction='up'
        key={product.id}
        className='bg-[#fbecdf] p-3 shadow-lg rounded-lg hover:shadow-xl'
      >
        <div
          className=''
        >

          <div className=''>
            <img
              src={product.image}
              alt={product.name}
              className={`h-56 w-full object-contain bg-[#4e3620] bg-opacity-10 rounded-lg`}
            />
          </div>

          <div className="w-full text-center mt-3">
            <h3 className="text-lg font-semibold text-[#fff] bg-[#4e3620] p-2 rounded-md ">{product.name}</h3>
          </div>
        </div>
      </Slide>
    ))
  }

  return (
    <>
      <Fade triggerOnce duration={1200}>
        <header
          style={{ backgroundImage: `url(${ServicesHeroBg})` }}
          className="relative bg-cover bg-center h-[300px] md:h-[320px] lg:h-[340px] flex items-center justify-center text-center text-white kanit-regular"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className='max-w-7xl container mx-auto flex flex-col justify-center items-center px-4'>
            <h1 className="text-4xl min-[425px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-extrabold drop-shadow-2xl">
              Our Premium Chocolate Products
            </h1>
            {/* <p className="mt-2 text-md min-[425px]:text-lg md:text-xl lg:text-3xl drop-shadow-2xl">
           Discover a variety of chocolate delights for baking, snacking, and creating
         </p> */}
          </div>
        </header>

      </Fade>

      <div className='w-full bg-[#4e3620] poppins-regular'>
        <div className='max-w-7xl container mx-auto px-4 py-2 pb-8 lg:py-10 grid grid-cols-12 gap-4'>


          {/* For Small Screens  */}
          <div className='col-span-12 lg:col-span-4 xl:col-span-3'>
            <Slide triggerOnce direction='up' duration={1200} className='lg:hidden mt-4'>
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
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                }
              </div>
            </Slide>


            {/* left Side For Categories  */}

            <Slide triggerOnce direction='up'>
              <div className="hidden lg:grid content-center gap-3 lg:mr-4">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-6 py-3 rounded ${selectedCategory === category
                      ? 'bg-red-400  font-medium text-white'
                      : 'bg-[#fbecdf]  font-medium text-[#4e3620]'
                      }`}
                    onClick={() => navigate(`/products/${category}`)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Slide>
          </div>



          {/* Right Side For Display Products */}
          <div className='col-span-12 lg:col-span-8 xl:col-span-9'>
            <section className="w-full poppins-regular">

              <h1 className='text-3xl font-semibold text-[#fbecdf] mb-6 text-center sm:text-left'>{title1 ? title1 : "Category 1"}</h1>
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
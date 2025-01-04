import React from 'react'
import products from '../data/products'
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { Zoom, Slide } from 'react-awesome-reveal'

import Chocolate_Slabs from '../assets/products-images/chocolate-slabs-2.jpg'
import Dark_Chocolate_Compound from '../assets/products-images/dark-chocolate-compound.jpg'
import White_Chocolate_Compound from '../assets/products-images/white-chocolate-compound.png'
import Chocolate_Paste from '../assets/chcoc-paste-images/choco-paste-example.png'

const FeaturedProducts = () => {

    const featuredProducts = [
        {
            id: 1,
            image: Chocolate_Paste,
            name: "Chocolate Slabs",
            description: "Premium chocolate slabs made for baking, coating, and snacking.",
            delay: 0,
        },
        {
            id: 2,
            image: Chocolate_Paste,
            name: "Dark Chocolate Compound",
            description: "Rich and smooth dark chocolate compound, perfect for confectionery and baking.",
            delay: 150,
        },
        {
            id: 3,
            image: Chocolate_Paste,
            name: "Chocolate Paste",
            description: "Thick and indulgent chocolate paste used in fillings, cakes, and spreads.",
            delay: 300,
        },
        {
            id: 4,
            name: "White Chocolate Compound",
            image: Chocolate_Paste,
            description: "Velvety and creamy white chocolate compound, ideal for coatings and desserts.",
            delay: 150,
        },
    ];

    return (
        <>
        <div className='w-full  bg-[#4e3620]  py-14'>
            <div className='max-w-7xl container mx-auto px-4 poppins-regular'>

                {/* For Small Screens */}
                <div className='md:hidden text-center'>
                    <h1 className='text-4xl min-[425px]:text-5xl font-semibold text-[#fbecdf] uppercase'>featured Products</h1>
                </div>

                {/* For Medium and above */}
                <div className='hidden md:flex justify-between items-center'>
                    <Slide triggerOnce direction='left'>
                        <h1 className='text-4xl font-semibold text-[#fbecdf] uppercase'>featured Products</h1>
                    </Slide>
                    <Slide triggerOnce direction='right'>
                        <NavLink to='/products' className='flex items-center bg-[#fbecdf] text-[#4e3620] font-medium text-lg px-6 py-2 rounded-full  transition-all duration-75 ease-in-out'>View More<FaArrowRight className="h-6 w-6 ml-2" /></NavLink>
                    </Slide>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-14'>
                    {featuredProducts.map((product, index) => (
                        <Zoom triggerOnce delay={product.delay} className={`bg-[#fbecdf] rounded-lg shadow-md overflow-hidden ${index === 3 ? 'lg:hidden' : ''}`}>
                            <div key={product.id} className="">
                                <img src={product.image} alt={product.name} className="w-full h-60 object-contain" />
                                <div className="p-4">
                                    <h3 className="font-semibold text-xl mb-2 text-[#4e3620]">{product.name}</h3>
                                    <p className="text-sm md:text-base text-[#4e3620]">{product.description}</p>
                                </div>
                            </div>
                        </Zoom>
                    ))}

                    {/* View More Button For Small Screens*/}
                    <div className='md:hidden w-full sm:col-span-2'>
                    <NavLink to='/products' className='flex items-center justify-center bg-[#fbecdf] text-[#4e3620] font-medium text-lg px-6 py-2 my-4 rounded-full transition-all duration-75 ease-in-out'>View More</NavLink>
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default FeaturedProducts;
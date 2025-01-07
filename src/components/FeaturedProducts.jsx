import React from 'react'
import products from '../data/products'
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { Zoom, Slide } from 'react-awesome-reveal'

import Chocolate_Slabs from '../assets/products-images/chocolate-slabs-2.jpg'
import Dark_Chocolate_Compound from '../assets/products-images/dark-chocolate-compound.jpg'
import White_Chocolate_Compound from '../assets/products-images/white-chocolate-compound.png'
import Chocolate_Paste from '../assets/chcoc-paste-images/choco-paste-example.png'

import DarkChocolateCompound from '../assets/feature-products-images/dark-chocolate-compound.png'
import ChocolateSlab from '../assets/feature-products-images/milk-chocolate.png'
import WhitePaste from '../assets/feature-products-images/white.png'
import WhiteChocolateCompound from '../assets/feature-products-images/white-chocolate.png'


const FeaturedProducts = () => {

    const featuredProducts = [
        {
            id: 1,
            image: ChocolateSlab,
            name: "Chocolate Slabs",
            description: "Premium chocolate slabs made for baking, coating, and snacking.",
            delay: 0,
        },
        {
            id: 2,
            image: WhitePaste,
            name: "Chocolate Paste",
            description: "Thick and indulgent chocolate paste used in fillings, cakes, and spreads.",
            delay: 300,
        },
        {
            id: 3,
            image: DarkChocolateCompound,
            name: "Dark Chocolate Compound",
            description: "Rich and smooth dark chocolate compound, perfect for confectionery and baking.",
            delay: 150,
        },
        {
            id: 4,
            name: "White Chocolate Compound",
            image: WhiteChocolateCompound,
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
                            <NavLink to='/products/Cake Premixes' className='flex items-center bg-[#fbecdf] text-[#4e3620] font-medium text-lg px-6 py-2 rounded-full  transition-all duration-75 ease-in-out'>View More<FaArrowRight className="h-6 w-6 ml-2" /></NavLink>
                        </Slide>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-14'>
                        {featuredProducts.map((product, index) => (
                            <Zoom triggerOnce delay={product.delay} className={`flex flex-col justify-center items-center bg-[#fbecdf] rounded-lg shadow-md overflow-hidden ${index === 3 ? 'lg:hidden' : ''}`}>
                                <div key={product.id}>
                                    <div className="p-2">
                                        <img src={product.image} alt={product.name} className="w-full h-60 object-contain bg-[#4e3620] bg-opacity-10 rounded-lg" />
                                    </div>

                                    <div className="p-3">
                                        <h3 className="font-semibold text-xl mb-2 py-1.5 bg-[#4e3620] text-[#fbecdf] text-center rounded">{product.name}</h3>
                                        <p className="lg:line-clamp-2 text-sm md:text-base lg:text-sm xl:text-base text-[#4e3620] text-center">{product.description}</p>
                                    </div>
                                </div>
                            </Zoom>
                        ))}

                        {/* View More Button For Small Screens*/}
                        <Slide triggerOnce direction='up'  className='md:hidden w-full sm:col-span-2'>
                        <div>
                            <NavLink to='/products/Cake Premixes' className='flex items-center justify-center bg-[#fbecdf] text-[#4e3620] font-medium text-lg px-6 py-2 my-4 rounded-full transition-all duration-75 ease-in-out'>View More</NavLink>
                        </div>
                        </Slide>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProducts;
import React from 'react';
import { Slide, Fade, Zoom } from 'react-awesome-reveal'
import {NavLink} from 'react-router-dom'
import Premium_Chocolate_Making from '../assets/premium-chocolate-making.jpg'
import Baking_Process from '../assets/baking-process.jpg'

const DetailsCards = () => {
    return (
        <div className='w-full bg-[#fbecdf]'>
            <div className="max-w-7xl container mx-auto px-4 ">


                {/* Content Section */}
                <section className="py-16">
                    <div className="container mx-auto">
                        {/* First Split Section */}
                        <Fade triggerOnce>
                            <div className="flex flex-col lg:flex-row mb-16 rounded-xl overflow-hidden shadow-xl">
                                <div className="w-full lg:w-6/12 relative h-64 md:h-auto p-3 bg-[#4E3620]">
                                    <img
                                        src={Premium_Chocolate_Making}
                                        alt="Premium chocolate making"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="w-full lg:w-7/12 bg-[#4E3620] text-white p-8 md:p-12 lg:p-16">
                                    <Zoom triggerOnce duration={1200}>
                                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">Premium Chocolate Premixes</h2>
                                        <p className="text-lg text-[#fbecdf] mb-6">
                                            Experience the art of baking with our carefully crafted premixes. Each blend combines the finest cocoa and ingredients to ensure perfect results every time.
                                        </p>
                                        <h2 className="text-3xl md:text-3xl font-bold mb-6">We Have</h2>

                                        <ul className="list-disc list-inside text-lg font-semibold mb-8 space-y-2 text-[#fbecdf]">
                                            <li>Chocolate Muffin Premix</li>
                                            <li>Vanilla Muffin Premix</li>
                                            <li>Brownie Cake Premix</li>
                                            <li>Chocolava Cake Premix</li>
                                            <li>Waffle Premix</li>
                                        </ul>
                                        <NavLink
                                        to={'products/Muffin Premixes'}
                                        className="px-6 py-3 bg-[#fbecdf] text-[#4E3620] rounded-lg font-semibold transition-colors duration-200">
                                            Explore Our Products
                                        </NavLink>
                                    </Zoom>
                                </div>
                            </div>
                        </Fade>

                        {/* Second Split Section */}
                        <Fade triggerOnce>
                        <div className="flex flex-col lg:flex-row-reverse bg-white rounded-xl overflow-hidden shadow-xl">
                            <div className="w-full lg:w-6/12 relative h-64 md:h-auto p-3 bg-[#3B2B1A]">
                                <img
                                    src={Baking_Process}
                                    alt="Baking process"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="w-full lg:w-7/12 bg-[#3B2B1A] text-white p-8 md:p-12 lg:p-16">
                            <Zoom triggerOnce duration={1200}>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">Why Choose Our Premixes?</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Premium Quality Ingredients</h3>
                                        <p className="text-[#fbecdf]">
                                            We source the finest cocoa beans and ingredients to ensure exceptional taste and quality in every package.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Perfect Results Every Time</h3>
                                        <p className="text-[#fbecdf]">
                                            Our precisely measured ingredients and detailed instructions guarantee consistent, professional results.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Easy to Prepare</h3>
                                        <p className="text-[#fbecdf]">
                                            Simply add a few fresh ingredients, mix, and bake. Perfect for both beginners and experienced bakers.
                                        </p>
                                    </div>
                                </div>
                                {/* <button className="px-6 py-3 bg-[#fbecdf] text-[#3B2B1A] rounded-lg font-semibold  transition-colors duration-200 mt-8">
                                    Learn More
                                </button> */}
                           </Zoom>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </section>



            </div>
        </div>
    );
};

export default DetailsCards;

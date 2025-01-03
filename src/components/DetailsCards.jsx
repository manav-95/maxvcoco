import React from 'react';
import Premium_Chocolate_Making from '../assets/premium-chocolate-making.jpg'
import Baking_Process from '../assets/baking-process.jpg'

const DetailsCards = () => {
    return (
        <div className='w-full bg-[#FDF6F0]'>
            <div className="max-w-7xl container mx-auto px-4 ">


                {/* Content Section */}
                <section className="py-16">
                    <div className="container mx-auto">
                        {/* First Split Section */}
                        <div className="flex flex-col md:flex-row mb-16 bg-white rounded-xl overflow-hidden shadow-xl">
                            <div className="w-full md:w-6/12 relative h-64 md:h-auto">
                                <img
                                    src={Premium_Chocolate_Making}
                                    alt="Premium chocolate making"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full md:w-7/12 bg-[#4E3620] text-white p-8 md:p-12 lg:p-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Chocolate Premixes</h2>
                                <p className="text-lg text-[#D9C8B0] mb-6">
                                    Experience the art of baking with our carefully crafted premixes. Each blend combines the finest cocoa and ingredients to ensure perfect results every time.
                                </p>
                                <h2 className="text-3xl md:text-3xl font-bold mb-6">We Have</h2>

                                <ul className="list-disc list-inside text-lg font-semibold mb-8 space-y-2 text-[#D9C8B0]">
                                    <li>Chocolate Muffin Premix</li>
                                    <li>Vanilla Muffin Premix</li>
                                    <li>Brownie Cake Premix</li>
                                    <li>Chocolava Cake Premix</li>
                                    <li>Waffle Premix</li>
                                </ul>
                                <button className="px-6 py-3 bg-[#D9C8B0] text-[#4E3620] rounded-lg font-semibold hover:bg-[#E4D4BE] transition-colors duration-200">
                                    Explore Our Products
                                </button>
                            </div>
                        </div>

                        {/* Second Split Section */}
                        <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl overflow-hidden shadow-xl">
                            <div className="w-full md:w-6/12 relative h-64 md:h-auto">
                                <img
                                    src={Baking_Process}
                                    alt="Baking process"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full md:w-7/12 bg-[#3B2B1A] text-white p-8 md:p-12 lg:p-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Premixes?</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Premium Quality Ingredients</h3>
                                        <p className="text-[#D9C8B0]">
                                            We source the finest cocoa beans and ingredients to ensure exceptional taste and quality in every package.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Perfect Results Every Time</h3>
                                        <p className="text-[#D9C8B0]">
                                            Our precisely measured ingredients and detailed instructions guarantee consistent, professional results.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Easy to Prepare</h3>
                                        <p className="text-[#D9C8B0]">
                                            Simply add a few fresh ingredients, mix, and bake. Perfect for both beginners and experienced bakers.
                                        </p>
                                    </div>
                                </div>
                                <button className="px-6 py-3 bg-[#D9C8B0] text-[#3B2B1A] rounded-lg font-semibold hover:bg-[#E4D4BE] transition-colors duration-200 mt-8">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default DetailsCards;

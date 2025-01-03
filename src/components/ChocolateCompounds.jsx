import React from 'react'
import Flavour_Example_Image from '../assets/flavour-example.jpg'

const ChocolateCompounds = () => {
    const flavours = [
        { id: 1, bgColor: 'bg-[#FFC324]', image: Flavour_Example_Image, flavour: 'Mango', },
        { id: 2, bgColor: 'bg-[#93C572]', image: Flavour_Example_Image, flavour: 'Pista', },
        { id: 3, bgColor: 'bg-[#FFA500]', image: Flavour_Example_Image, flavour: 'Orange', },
        { id: 4, bgColor: 'bg-[#4F86F7]', image: Flavour_Example_Image, flavour: 'Blueberry', },
        { id: 5, bgColor: 'bg-[#FF4C4C]', image: Flavour_Example_Image, flavour: 'Strawberry', },
        { id: 6, bgColor: 'bg-[#F8D568]', image: Flavour_Example_Image, flavour: 'Pineapple', },
    ]
    return (
        <>
            <div className='w-full bg-[#4E3620] py-14'>
                <div className='max-w-7xl container mx-auto px-4'>

                    {/* For Small Screens */}
                    <div className='flex justify-center text-center'>
                        <h1 className='md:hidden max-w-3xl text-[#FDF6F0] font-semibold text-5xl'>Rich Chocolate Compound Flavors, Crafted For Every Delight</h1>
                    </div>

                      {/* For Large Screens */}
                      <div className='hidden md:flex md:flex-col justify-center items-center text-center font-semibold text-5xl'>
                        <h1 className='bg-[#fbecdf] text-[#4e3620] py-2 px-10 rounded z-10'>Rich Chocolate Compound Flavors</h1>
                        <h1 className='text-[#fdf6f0] py-2 '>Crafted For Every Delight</h1>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-14'>
                        {flavours.map((flavour) => (
                            <div
                                key={flavour.id}
                                className={`group flex flex-col items-center justify-center p-4 rounded`}
                            >
                                <div>
                                    <img
                                        src={flavour.image}
                                        alt={flavour.flavour}
                                        className='mb-4 rounded-lg'
                                    />
                                </div>
                                <div className='p-1.5 w-full text-[#fdf6f0] rounded group-hover:bg-[#fbecdf] group-hover:text-[#4e3620] text-center transition-all duration-200 ease-in-out'>
                                    <p className='text-3xl font-bold kanit-regular'>{flavour.flavour}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChocolateCompounds
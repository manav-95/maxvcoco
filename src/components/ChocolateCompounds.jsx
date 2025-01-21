import React from 'react'
import { Slide, Fade } from 'react-awesome-reveal'

import { NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";


// Basic Chocolate Compounds
import WhiteChocolateCompound from '../assets/chocolate-compounds-images/white-chocolate.png'
import MilkChocolateCompound from '../assets/chocolate-compounds-images/milk-chocolate.png'
import DarkChocolateCompound from '../assets/chocolate-compounds-images/dark-chocolate-compound.png'

// Chocolate Compounds Flavours
import Mango from '../assets/chocolate-compounds-images/mango-flavour.png'
import Orange from '../assets/chocolate-compounds-images/orange-flavour.png'
import Strawberry from '../assets/chocolate-compounds-images/strawberry-flavour.png'
import Pineapple from '../assets/chocolate-compounds-images/pineapple-flavour.png'
import Blueberry from '../assets/chocolate-compounds-images/blueberry-flavour.png'
import Pista from '../assets/chocolate-compounds-images/pista-flavour.png'


const ChocolateCompounds = () => {

    const basicChocolateCompounds = [
        { id: 1, delay: 0, bgColor: 'bg-[#FFC324]', image: WhiteChocolateCompound, flavour: 'White', },
        { id: 2, delay: 150, bgColor: 'bg-[#93C572]', image: MilkChocolateCompound, flavour: 'Milk', },
        { id: 3, delay: 300, bgColor: 'bg-[#FFA500]', image: DarkChocolateCompound, flavour: 'Dark', },
    ]

    const flavours = [
        { id: 1, delay: 0, bgColor: 'bg-[#FFC324]', image: Mango, flavour: 'Mango', },
        { id: 2, delay: 150, bgColor: 'bg-[#93C572]', image: Pista, flavour: 'Pista', },
        { id: 3, delay: 300, bgColor: 'bg-[#FFA500]', image: Orange, flavour: 'Orange', },
        { id: 4, delay: 450, bgColor: 'bg-[#4F86F7]', image: Blueberry, flavour: 'Blueberry', },
        { id: 5, delay: 600, bgColor: 'bg-[#FF4C4C]', image: Strawberry, flavour: 'Strawberry', },
        { id: 6, delay: 750, bgColor: 'bg-[#F8D568]', image: Pineapple, flavour: 'Pineapple', },
    ]
    return (
        <>
            <div className='w-full bg-[#4E3620] py-14'>
                <div className='max-w-7xl container mx-auto px-4'>

                    {/* For Small Screens */}
                    <Fade triggerOnce>
                        <Slide direction='up' triggerOnce duration={1200}>
                            <div className='flex justify-center text-center'>
                                <h1 className='md:hidden max-w-3xl text-[#FDF6F0] font-semibold text-5xl'>Rich Chocolate Compound Flavors, Crafted For Every Delight</h1>
                            </div>
                        </Slide>
                    </Fade>

                    {/* For Large Screens */}
                    <Fade triggerOnce>
                        <Slide direction='up' triggerOnce duration={1200}>
                            <div className='hidden md:flex md:flex-col justify-center items-center text-center font-semibold text-5xl md:text-4xl lg:text-5xl'>
                                <h1 className='bg-[#fbecdf] text-[#4e3620] py-2 px-10 rounded z-10'>Rich Chocolate Compounds</h1>
                                <h1 className='text-[#fdf6f0] py-2 '>Crafted For Every Delight</h1>
                            </div>
                        </Slide>
                    </Fade>

                    {/* Basic Compounds  */}
                    <div className='grid grid-cols-1 min-[425px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-14'>
                        {basicChocolateCompounds.slice(0, 3).map((compound) => (
                            <Fade triggerOnce>
                                <Slide

                                    direction='up'
                                    triggerOnce
                                    duration={1200}
                                    delay={compound.delay}
                                    className={`group flex flex-col items-center justify-center p-4 rounded-lg bg-[#FDF6F0] bg-opacity-10`}
                                >
                                    <div
                                        key={compound.id}
                                        className='w-full flex flex-col items-center justify-center'
                                    >
                                        <div className=''>
                                            <img
                                                src={compound.image}
                                                alt={compound.flavour}
                                                className='mb-2 rounded-lg  drop-shadow-md object-contain h-60 w-60'
                                            />
                                        </div>
                                        <div className='p-1.5 w-full rounded bg-[#fbecdf] text-[#4e3620] text-center transition-all duration-200 ease-in-out'>
                                            <p className='text-3xl font-bold kanit-regular'>{compound.flavour}</p>
                                        </div>
                                    </div>
                                </Slide>
                            </Fade>
                        ))}
                    </div>

                    {/*For Flavours Compounds */}

                    {/* For Small Screens */}
                    <Slide triggerOnce direction='up'>
                        <div className='md:hidden text-center'>
                            <h1 className='text-4xl min-[425px]:text-5xl font-semibold text-[#fbecdf] uppercase'>Chocolate Compound Flavours</h1>
                        </div>
                    </Slide>

                    {/* For large Screens */}
                    <div className='hidden md:flex justify-between items-center'>
                        <Slide triggerOnce direction='left'>
                            <h1 className='text-[#fdf6f0] py-2 font-semibold text-5xl md:text-4xl lg:text-5xl'>Chocolate Compound Flavours</h1>
                        </Slide>
                        <Slide triggerOnce direction='right'>
                            <NavLink to='/products/Chocolate Compounds?start=0&end=2&title1=Chocolate Compounds&title2=Flavoured Chocolate Compounds' className='flex items-center bg-[#fbecdf] text-[#4e3620] font-medium text-lg px-6 py-2 rounded-full  transition-all duration-75 ease-in-out'>See More Flavours<FaArrowRight className="h-6 w-6 ml-2" /></NavLink>
                        </Slide>
                    </div>

                    <div className='grid grid-cols-1 min-[425px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-14'>
                        {flavours.slice(0, 3).map((flavour) => (
                            <Fade triggerOnce>
                                <Slide

                                    direction='up'
                                    triggerOnce
                                    duration={1200}
                                    delay={flavour.delay}
                                    className={`group flex flex-col items-center justify-center p-4 rounded-lg bg-[#FDF6F0] bg-opacity-10`}
                                >
                                    <div
                                        key={flavour.id}
                                        className='w-full flex flex-col items-center justify-center'
                                    >
                                        <div className=''>
                                            <img
                                                src={flavour.image}
                                                alt={flavour.flavour}
                                                className='mb-2 rounded-lg  drop-shadow-md object-contain h-60 w-60'
                                            />
                                        </div>
                                        <div className='p-1.5 w-full rounded bg-[#fbecdf] text-[#4e3620] text-center transition-all duration-200 ease-in-out'>
                                            <p className='text-3xl font-bold kanit-regular'>{flavour.flavour}</p>
                                        </div>
                                    </div>
                                </Slide>
                            </Fade>
                        ))}
                    </div>

                    {/* View More Button For Small Screens*/}
                    <Slide triggerOnce direction='up'>
                        <div className='md:hidden w-full sm:col-span-2'>
                            <NavLink to='/products/Chocolate Compounds?start=0&end=2&title1=Chocolate Compounds&title2=Flavoured Chocolate Compounds' className='flex items-center justify-center bg-[#fbecdf] text-[#4e3620] font-medium text-lg px-6 py-2 my-4 rounded-full transition-all duration-75 ease-in-out'>See More Flavours</NavLink>
                        </div>
                    </Slide>
                </div>
            </div >
        </>
    )
}

export default ChocolateCompounds
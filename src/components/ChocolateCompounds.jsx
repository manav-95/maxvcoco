import React from 'react'
import { Slide, Fade, Zoom } from 'react-awesome-reveal'
// Chocolate Compounds 
import Mango from '../assets/chocolate-compounds-images/mango.png'
import Orange from '../assets/chocolate-compounds-images/orange.png'
import Strawberry from '../assets/chocolate-compounds-images/strawberry.png'
import Pineapple from '../assets/chocolate-compounds-images/pineapple.png'
import Blueberry from '../assets/chocolate-compounds-images/blueberry.png'
import Pista from '../assets/chocolate-compounds-images/pista.png'

const ChocolateCompounds = () => {
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
                                <h1 className='bg-[#fbecdf] text-[#4e3620] py-2 px-10 rounded z-10'>Rich Chocolate Compound Flavors</h1>
                                <h1 className='text-[#fdf6f0] py-2 '>Crafted For Every Delight</h1>
                            </div>
                        </Slide>
                    </Fade>


                    <div className='grid grid-cols-1 min-[425px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-14'>
                        {flavours.map((flavour) => (
                            <Fade triggerOnce>
                                <Slide direction='up' triggerOnce duration={1200} delay={flavour.delay}>
                                    <div
                                        key={flavour.id}
                                        className={`group flex flex-col items-center justify-center p-4 rounded`}
                                    >
                                        <div className=''>
                                            <img
                                                src={flavour.image}
                                                alt={flavour.flavour}
                                                className='mb-4 rounded-lg object-contain h-60 w-60' 
                                            />
                                        </div>
                                        <div className='p-1.5 w-full text-[#fdf6f0] rounded group-hover:bg-[#fbecdf] group-hover:text-[#4e3620] text-center transition-all duration-200 ease-in-out'>
                                            <p className='text-3xl font-bold kanit-regular'>{flavour.flavour}</p>
                                        </div>
                                    </div>
                                </Slide>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}

export default ChocolateCompounds
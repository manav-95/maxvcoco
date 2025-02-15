import React from 'react'
import { Slide, Fade, Zoom } from 'react-awesome-reveal'

import WhitePaste from '../assets/chcoc-paste-images/white.webp'
import MilkPaste from '../assets/chcoc-paste-images/milk.webp'
import DarkPaste from '../assets/chcoc-paste-images/dark.webp'
import HazelnutPaste from '../assets/chcoc-paste-images/hazelnut.webp'

import Dark from '../assets/choco-chips-images/dark.webp'
import White from '../assets/choco-chips-images/white.webp'
import Milk from '../assets/choco-chips-images/milk.webp'

const ChocoPaste = () => {
    const chocoPastes = [
        { id: 1, delay: 0, image: WhitePaste, name: 'White Chocolate', },
        { id: 2, delay: 200, image: MilkPaste, name: 'Milk Chocolate', },
        { id: 3, delay: 400, image: DarkPaste, name: 'Dark Chocolate', },
        { id: 4, delay: 600, image: HazelnutPaste, name: 'Hazelnut Sprade', },
    ]
    const chocoChips = [
        { id: 1, delay: 0, colSpan: 'col-span-1 sm:col-span-4', rowSpan: 'row-span-0', image: White, name: 'White Chocolate Chips', },
        { id: 2, delay: 200, colSpan: 'col-span-1 sm:col-span-2', rowSpan: 'row-span-0', image: Milk, name: 'Milk Chocolate Chips', },
        { id: 3, delay: 400, colSpan: 'col-span-1 sm:col-span-2', rowSpan: 'row-span-0', image: Dark, name: 'Dark Chocolate Chips', },
    ]
    return (
        <>
            <div className='w-full bg-gradient-to-b from-[#FFEDD5] to-[#FECACA] py-14 poppins-regular'>
                <div className='max-w-7xl container mx-auto px-4'>

                    {/* Choco Paste , Choco Dip & Sprade */}
                    <Fade triggerOnce duration={1200}>
                        <Slide triggerOnce direction='up' duration={1200}>
                            <div className='flex justify-center items-center'>
                                <h1 className='text-[#fbecdf] bg-[#4e3620] py-2 px-4 rounded text-center font-semibold text-5xl'>Choco Paste, ChocoDip & Sprade</h1>
                            </div>
                        </Slide>
                    </Fade>

                    <div className='grid grid-cols-1 min-[425px]:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 py-14'>
                        {chocoPastes.map(paste => (
                            <Fade triggerOnce duration={1200}>
                                <Slide triggerOnce direction='up' duration={1200} delay={paste.delay} >
                                    <div
                                        key={paste.id}
                                        className='flex flex-col justify-center items-center space-y-4'
                                    >
                                        <img
                                            src={paste.image}
                                            alt={paste.name}
                                            className='h-52 w-96 object-contain'
                                        />
                                        <p className='text-2xl min-[425px]:text-xl sm:text-3xl lg:text-2xl xl:text-3xl text-center font-semibold text-[#4e3620]'>{paste.name}</p>
                                    </div>
                                </Slide>
                            </Fade>
                        ))}
                    </div>

                    {/* Choco Chips */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 bg-[#4e3620] rounded-xl py-4 px-8 my-6'>

                        {/*this h1 is for small screens  */}
                        <Zoom triggerOnce duration={1200} className='md:hidden py-4 uppercase text-3xl min-[425px]:text-5xl md:text-5xl font-semibold text-[#fbecdf] text-center'>
                            <h1 >ChocoChips</h1>
                        </Zoom>

                        <div className='max-w-2xl grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-2 mx-auto'>
                            {chocoChips.map(chips => (
                                <Zoom delay={chips.delay} duration={1200} triggerOnce className={`${chips.colSpan} ${chips.rowSpan} `}>
                                    <div className={`${chips.colSpan} ${chips.rowSpan} content-center flex flex-col items-center justify-center`}>
                                        <img src={chips.image} alt={chips.name} className='object-cover h-52 w-52' />
                                        {/* <p className='text-2xl font-semibold text-[#4e3620]'>{chips.name}</p> */}
                                    </div>
                                </Zoom>
                            ))}
                        </div>

                        <div className='flex flex-col space-y-5 md:py-5 md:px-5 '>
                            <Zoom triggerOnce duration={1200}>
                                {/*this h1 is for medium + screens  */}
                                <h1 className='hidden md:block uppercase text-3xl md:text-5xl font-semibold text-[#fbecdf] text-center lg:text-left'>ChocoChips</h1>
                                <div className='bg-[#fbecdf] text-[#4e3620] p-4 rounded-md'>
                                    <p className='text-2xl font-medium text-center lg:text-left drop-shadow-md'>We have white chocolate
                                        chocochips, milk chocolate
                                        chocochips and dark
                                        chocolate chocochips.</p>
                                </div>
                                <p className='text-lg font-medium text-[#fbecdf] text-center lg:text-left'>ChocoChips are tiny bursts of sweetness that bring magic to every treat. Whether you're baking cookies, crafting cakes, or simply enjoying them as a snack, they add a delightful crunch and charm to your creations. Perfect for sprinkling on desserts or mixing into batter, ChocoChips make every bite irresistibly joyful and delicious!</p>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ChocoPaste
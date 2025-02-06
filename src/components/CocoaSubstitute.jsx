import React from 'react'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'

import CocoaSubstituteImage from '../assets/cocoa-images/cocoa-substitute.jpg' 

const CocoaSubstitute = () => {
    return (
        <>
            <div className='w-full bg-gradient-to-b from-[#FFEDD5] to-[#FECACA] poppins-regular'>
                <div className='max-w-7xl mx-auto container px-4 lg:px-10 py-16'>
                    <div className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row-reverse lg:items-center lg:justify-between  lg:gap-x-14'>

                        <Fade triggerOnce className='lg:w-1/2 text-center lg:text-left'>
                            <Slide triggerOnce direction='up' >
                                <div >
                                    <h1 className='text-4xl font-bold text-[#4e3620] mb-10 lg:mb-4'>Cocoa Powder Substitute</h1>
                                    <p className='text-lg font-medium text-[#4e3620]'>Cocoa powder is a cornerstone of many delectable recipes, but what if you’re out of it or seeking an alternative? Whether for dietary needs, availability, or creative exploration, cocoa powder substitutes can save the day without compromising on flavor.</p>
                                </div>
                            </Slide>
                        </Fade>

                        <div className='lg:w-1/2'>

                            <Zoom triggerOnce duration={800}>
                                <div className='flex items-center justify-center bg-[#4e3620] bg-opacity-10 rounded-lg'>
                                    <img
                                        src={CocoaSubstituteImage}
                                        alt='image1'
                                        className='h-full w-full object-cover rounded-lg'
                                    />
                                </div>
                            </Zoom>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CocoaSubstitute
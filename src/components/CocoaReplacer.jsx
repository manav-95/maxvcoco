import React from 'react'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'

import CocoaReplacerImage from '../assets/cocoa-images/cocoa-replacer.webp' 


const CocoaReplacer = () => {
    return (
        <>
            <div className='w-full bg-[#4E3620] poppins-regular'>
                <div className='max-w-7xl mx-auto container px-4 lg:px-10 py-16'>
                    <div className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between  lg:gap-x-14'>
                        <Fade triggerOnce className='lg:w-1/2 text-center lg:text-left'>
                            <Slide triggerOnce direction='up' >
                                <div>
                                    <h1 className='text-4xl font-bold text-[#fbecdf] mb-10 lg:mb-4'>Cocoa Powder Replacers</h1>
                                    <p className='text-lg font-medium text-[#fbecdf]'>Cocoa powder is a key ingredient in many chocolate recipes, but there are times when you may need a substitute whether due to dietary preferences, availability, or a desire to experiment with new flavors. </p>
                                </div>
                            </Slide>
                        </Fade>

                        <div className='lg:w-1/2 '>

                            <Zoom triggerOnce duration={800}>
                                <div className='flex items-center justify-center bg-[#fbecdf] bg-opacity-10 rounded-lg'>
                                    <img
                                        src={CocoaReplacerImage}
                                        alt='image1'
                                        className='h-full w-full rounded-lg object-cover'
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

export default CocoaReplacer
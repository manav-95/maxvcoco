import React from 'react'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'
import ExampleImage from '../assets/chcoc-paste-images/white.png'

const CocoaReplacer = () => {
    return (
        <>
            <div className='w-full bg-[#4E3620] poppins-regular'>
                <div className='max-w-7xl mx-auto container px-4 lg:px-10 py-16'>
                    <div className='flex flex-col space-y-10 lg:flex-row lg:items-center lg:justify-between  lg:gap-x-14'>
                        <Fade triggerOnce className='lg:w-1/2 text-center lg:text-left'>
                            <Slide triggerOnce direction='up' >
                                <div>
                                    <h1 className='text-4xl font-bold text-[#fbecdf] mb-10 lg:mb-4'>Cocoa Powder Replacers</h1>
                                    <p className='text-lg font-medium text-[#fbecdf]'>Cocoa powder is a key ingredient in many chocolate recipes, but there are times when you may need a substitute whether due to dietary preferences, availability, or a desire to experiment with new flavors. </p>
                                </div>
                            </Slide>
                        </Fade>

                        <div className='lg:w-1/2 grid min-[425px]:grid-cols-2 gap-6 items-center justify-center'>

                            <Zoom triggerOnce duration={800}>
                                <div className='flex items-center justify-center bg-[#fbecdf] bg-opacity-10 rounded-lg p-2'>
                                    <img
                                        src={ExampleImage}
                                        alt='image1'
                                        className='h-full w-full lg:h-40 lg:w-40 xl:h-48 xl:w-56 object-contain'
                                    />
                                </div>
                            </Zoom>

                            <Zoom triggerOnce duration={800} delay={150}>
                                <div className='flex items-center justify-center bg-[#fbecdf] bg-opacity-10 rounded-lg p-2'>
                                    <img
                                        src={ExampleImage}
                                        alt='image1'
                                        className='h-full w-full lg:h-40 lg:w-40 xl:h-48 xl:w-56 object-contain'
                                    />
                                </div>
                            </Zoom>

                            <Zoom triggerOnce duration={800} delay={300}>
                                <div className='flex items-center justify-center bg-[#fbecdf] bg-opacity-10 rounded-lg p-2'>
                                    <img
                                        src={ExampleImage}
                                        alt='image1'
                                        className='h-full w-full lg:h-40 lg:w-40 xl:h-48 xl:w-56 object-contain'
                                    />
                                </div>
                            </Zoom>

                            <Zoom triggerOnce duration={800} delay={450}>
                                <div className='flex items-center justify-center bg-[#fbecdf] bg-opacity-10 rounded-lg p-2'>
                                    <img
                                        src={ExampleImage}
                                        alt='image1'
                                        className='h-full w-full lg:h-40 lg:w-40 xl:h-48 xl:w-56 object-contain'
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
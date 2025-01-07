import React from 'react'

import ExampleImage from '../assets/chcoc-paste-images/white.png'

const CocoaReplacer = () => {
    return (
        <>
            <div className='w-full bg-[#4E3620] poppins-regular'>
                <div className='max-w-7xl mx-auto container px-4 lg:px-10 py-16'>
                    <div className='flex flex-col space-y-10 lg:flex-row lg:items-center lg:justify-between  lg:gap-x-14'>
                        <div className='lg:w-1/2 text-center lg:text-left'>
                            <h1 className='text-4xl font-bold text-[#fbecdf] mb-10 lg:mb-4'>Cocoa Powder Replacers</h1>
                            <p className='text-lg font-medium text-[#fbecdf]'>Cocoa powder is a key ingredient in many chocolate recipes, but there are times when you may need a substitute whether due to dietary preferences, availability, or a desire to experiment with new flavors. </p>
                        </div>

                        <div className='lg:w-1/2 grid min-[425px]:grid-cols-2 gap-6 items-center justify-center'>
                           
                           <div className='flex items-center justify-center bg-[#fbecdf] bg-opacity-10 rounded-lg p-2'>
                                <img
                                    src={ExampleImage}
                                    alt='image1'
                                    className='h-full w-full lg:h-40 lg:w-40 xl:h-48 xl:w-56 object-contain'
                                />
                            </div>

                            <div className='flex items-center justify-center bg-[#fbecdf] bg-opacity-10 rounded-lg p-2'>
                                <img
                                    src={ExampleImage}
                                    alt='image1'
                                    className='h-full w-full lg:h-40 lg:w-40 xl:h-48 xl:w-56 object-contain'
                                />
                            </div>

                            <div className='flex items-center justify-center bg-[#fbecdf] bg-opacity-10 rounded-lg p-2'>
                                <img
                                    src={ExampleImage}
                                    alt='image1'
                                    className='h-full w-full lg:h-40 lg:w-40 xl:h-48 xl:w-56 object-contain'
                                />
                            </div>

                            <div className='flex items-center justify-center bg-[#fbecdf] bg-opacity-10 rounded-lg p-2'>
                                <img
                                    src={ExampleImage}
                                    alt='image1'
                                    className='h-full w-full lg:h-40 lg:w-40 xl:h-48 xl:w-56 object-contain'
                                />
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CocoaReplacer
import React from 'react'
import ExampleImage from '../assets/chcoc-paste-images/white.png'

const CocoaSubstitute = () => {
    return (
        <>
            <div className='w-full bg-[#fbecdf] poppins-regular'>
                <div className='max-w-7xl mx-auto container px-4 lg:px-10 py-16'>
                    <div className='flex flex-col space-y-10 lg:flex-row-reverse lg:items-center lg:justify-between  lg:gap-x-14'>
                        <div className='lg:w-1/2 text-center lg:text-left'>
                            <h1 className='text-4xl font-bold text-[#4e3620] mb-10 lg:mb-4'>Cocoa Powder Substitute</h1>
                            <p className='text-lg font-medium text-[#4e3620]'>Cocoa powder is a cornerstone of many delectable recipes, but what if you’re out of it or seeking an alternative? Whether for dietary needs, availability, or creative exploration, cocoa powder substitutes can save the day without compromising on flavor.</p>
                        </div>

                        <div className='lg:w-1/2 grid min-[425px]:grid-cols-2 gap-6 items-center justify-center'>

                            <div className='flex items-center justify-center bg-[#4e3620] bg-opacity-10 rounded-lg p-2'>
                                <img
                                    src={ExampleImage}
                                    alt='image1'
                                    className='lg:h-40 lg:w-40 xl:h-48 xl:w-56 object-contain'
                                />
                            </div>

                            <div className='flex items-center justify-center bg-[#4e3620] bg-opacity-10 rounded-lg p-2'>
                                <img
                                    src={ExampleImage}
                                    alt='image1'
                                    className='lg:h-40 lg:w-40 xl:h-48 xl:w-56 object-contain '
                                />
                            </div>

                            <div className='flex items-center justify-center bg-[#4e3620] bg-opacity-10 rounded-lg p-2'>
                                <img
                                    src={ExampleImage}
                                    alt='image1'
                                    className='lg:h-40 lg:w-40 xl:h-48 xl:w-56 object-contain'
                                />
                            </div>

                            <div className='flex items-center justify-center bg-[#4e3620] bg-opacity-10 rounded-lg p-2'>
                                <img
                                    src={ExampleImage}
                                    alt='image1'
                                    className='lg:h-40 lg:w-40 xl:h-48 xl:w-56 object-contain'
                                />
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CocoaSubstitute
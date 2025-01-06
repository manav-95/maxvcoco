import React from 'react'
import { Slide } from 'react-awesome-reveal'

import Chocolate_Muffin from '../assets/muffin-premix-images/chocolate-muffin.png'
import Vanilla_Muffin from '../assets/muffin-premix-images/vanilla-muffin.png'
import Waffle from '../assets/muffin-premix-images/waffle.png'

const MuffinPremix = () => {

    const muffinPremixes = [
        {
            name: 'Chocolate Muffin Premix',
            image: Chocolate_Muffin,
            description: 'Rich, moist chocolate muffins in minutes.',
        },
        {
            name: 'Vanilla Muffin Premix',
            image: Vanilla_Muffin,
            description: 'Light, fluffy vanilla muffins made easy.',
        },
        {
            name: 'Chocolate Cake Premix',
            image: Chocolate_Cake,
            description: 'Decadent chocolate cake for any occasion.',
        },
    ];

    return (
        <div className='w-full bg-[#fbecdf] py-14'>
            <div className='max-w-7xl container mx-auto px-4 poppins-regular'>
                <Slide triggerOnce direction='up'>
                    <h1 className='text-4xl font-semibold text-gray-800 uppercase text-center'>We Also
                        Have
                    </h1>
                </Slide>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-14">
                    {muffinPremixes.map((muffpremix, index) => (
                        <div
                            key={index}
                            className={` bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-in-out`}
                        >
                            <div className=''>
                                <img src={muffpremix.image} alt={muffpremix.name} className="w-full h-48 object-cover" />
                            </div>
                            <div className=" p-4">
                                <h3 className="text-xl text-center font-semibold text-brown-800 mb-1.5">{muffpremix.name}</h3>
                                {/* <p className="text-brown-600">{muffpremix.description}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MuffinPremix
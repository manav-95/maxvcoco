import React from 'react'
import { Zoom, Slide } from 'react-awesome-reveal'

import Chocolate from '../assets/cake-premix-images/chocolate-bread.png'
import Vanila from '../assets/cake-premix-images/vanilla-bread-2.png'
import Velvet from '../assets/cake-premix-images/red-velvet-bread.png'
import ChocolateBG from '../assets/chocolate-bg.jpg'



const CakePremix = () => {

    const premixData = [
        {
            id: 1,
            title: 'Chocolate Cake Premix',
            description: 'Rich and decadent, this Chocolate Cake Premix offers a deep and intense cocoa flavor that is perfect for chocolate lovers. Its moist and fluffy texture makes it ideal for celebrations, desserts, or any indulgent treat. Whether paired with a creamy frosting or served on its own, this premix ensures bakery-quality results every time.',
            image: Chocolate,
            flex: 'flex flex-col md:flex-row',
        },
        {
            id: 2,
            title: 'Vanilla Cake Premix',
            description: 'Classic and versatile, the Vanilla Cake Premix is a staple for every occasion. Its delicate vanilla aroma and buttery flavor provide the perfect canvas for creativity, allowing you to pair it with fresh fruits, whipped cream, or any frosting of your choice. This premix delivers a light, airy texture that’s perfect for birthday cakes, cupcakes, and layered desserts.',
            image: Vanila,
            flex: 'flex flex-col md:flex-row-reverse',
        },
        {
            id: 3,
            title: 'Red Velvet Cake Premix',
            description: 'Luxurious and vibrant, the Red Velvet Cake Premix is a true crowd-pleaser. Its rich, velvety crumb is complemented by a hint of cocoa and a striking red color, making it an iconic choice for special occasions. Pair it with cream cheese frosting for a classic finish or experiment with flavors to create your signature dessert. Perfect for creating cakes, cupcakes, and more.',
            image: Velvet,
            flex: 'flex flex-col md:flex-row',
        },
    ];
    

    return (
        <>
        <div style={{
            backgroundImage: `url(${ChocolateBG})`,
            height: 'full',
            width: 'full',
            }} className='relative w-full bg-cover bg-[#4E3620] py-16'>
                <div className='absolute inset-0 bg-black bg-opacity-55'>

                </div>
            <div className='max-w-7xl container mx-auto px-4 poppins-regular'>
                <Slide triggerOnce direction='up'>
                    <h1 className='text-5xl font-semibold text-white uppercase text-center min-[425px]:text-center'>Our Delicious Cake Premixes</h1>
                </Slide>


                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 my-14'>
                    {premixData.map((premix) => (
                        <Zoom triggerOnce delay={premix.delay} className={` overflow-hidden`}>
                            <div key={premix.id} className={`group ${premix.flex} items-center justify-center`}>
                                <div className='md:w-1/3'>
                                    <img src={premix.image} alt={premix.title} className={`md:h-[190px] lg:h-[240px] xl:h-[300px] object-contain object-center`}/>
                                </div>
                                <div className="md:w-1/2 p-4">
                                    <h3 className="font-semibold text-xl min-[425px]:text-2xl md:text-2xl text-center mb-3 bg-[#FDF6F0] py-1 rounded text-[#4E3620] group-hover:bg-[#4E3620] group-hover:text-[#FDF6F0] border border-transparent group-hover:border-[#FDF6F0] transition-all duration-200 ease-in-out">{premix.title}</h3>
                                    <p className="text-sm min-[425px]:text-base text-center md:text-left font-medium text-[#D9C8B0] ">{premix.description}</p>
                                </div>
                            </div>
                        </Zoom>
                    ))}

                </div>
            </div>
            </div>
        </>
    )
}

export default CakePremix;
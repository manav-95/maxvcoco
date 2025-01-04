import React from 'react'
import ExImage from '../assets/chcoc-paste-images/choco-paste-example.png'

const ChocoPaste = () => {
    const chocoPastes = [
        { id: 1, image: ExImage, name: 'White Chocolate', },
        { id: 2, image: ExImage, name: 'Milk Chocolate', },
        { id: 3, image: ExImage, name: 'Dark Chocolate', },
        { id: 4, image: ExImage, name: 'Hazelnut Sprade', },
    ]
    const chocoChips = [
        { id: 1, colSpan: 'col-span-4', rowSpan: 'row-span-0', image: ExImage, name: 'White Chocolate Chips', },
        { id: 2, colSpan: 'col-span-2', rowSpan: 'row-span-0', image: ExImage, name: 'Milk Chocolate Chips', },
        { id: 3, colSpan: 'col-span-2', rowSpan: 'row-span-0', image: ExImage, name: 'Dark Chocolate Chips', },
    ]
    return (
        <>
            <div className='w-full bg-[#fbecdf] py-14 poppins-regular'>
                <div className='max-w-7xl container mx-auto px-4'>
                    {/* Choco Paste , Choco Dip & Sprade */}
                    <div className='flex justify-center items-center'>
                        <h1 className='text-[#fbecdf] bg-[#4e3620] py-2 px-4 rounded text-center font-semibold text-5xl'>Choco Paste, ChocoDip & Spread</h1>
                       
                    </div>
                    <div className='grid grid-cols-4 gap-4 py-14'>
                        {chocoPastes.map(paste => (
                            <div
                                key={paste.id}
                                className='flex flex-col justify-center items-center space-y-4'
                            >
                                <img
                                    src={paste.image}
                                    alt={paste.name}
                                    className='object-cover'
                                />
                                <p className='text-2xl font-semibold text-[#4e3620]'>{paste.name}</p>
                            </div>
                        ))}
                    </div>

                    {/* Choco Chips */}
                    <div className='grid grid-cols-2 bg-[#4e3620] rounded-xl py-4 px-8 my-6'>
                        <div className='max-w-2xl grid grid-cols-4 gap-x-4 gap-y-2'>
                            {chocoChips.map(chips => (
                                <div className={`${chips.colSpan} ${chips.rowSpan} content-center flex flex-col items-center justify-center`}>
                                    <img src={chips.image} alt={chips.name} className='object-cover h-52 w-52' />
                                    {/* <p className='text-2xl font-semibold text-[#4e3620]'>{chips.name}</p> */}
                                </div>
                            ))}
                        </div>

                        <div className='flex flex-col space-y-5 py-5 px-5 '>
                            <h1 className='uppercase text-5xl font-semibold text-[#fbecdf] text-left'>ChocoChips</h1>
                            <div className='bg-[#fbecdf] text-[#4e3620] p-2 rounded-xl'>
                                <p className='text-2xl font-medium'>We have white chocolate
                                    chocochips, milk chocolate
                                    chocochips and dark
                                    chocolate chocochips.</p>
                            </div>
                            <p className='text-lg font-medium text-[#fbecdf]'>ChocoChips are tiny bursts of sweetness that bring magic to every treat. Whether you're baking cookies, crafting cakes, or simply enjoying them as a snack, they add a delightful crunch and charm to your creations. Perfect for sprinkling on desserts or mixing into batter, ChocoChips make every bite irresistibly joyful and delicious!</p>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ChocoPaste
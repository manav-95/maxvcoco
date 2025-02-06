import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, LocateFixedIcon, ChevronRight } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';



const Footer = () => {


    const navItems = [
        { id: 1, name: 'Home', link: '/', },
        { id: 2, name: 'Products', link: '/products/Premixes?start=0&end=4&title1=Cake Premixes&title2=Muffin Premixes', },
        { id: 3, name: 'Services', link: '/services', },
        { id: 4, name: 'About us', link: '/about-us', },
    ]

    const [productLinkActive, setProductLinkActive] = useState(false)

    const location = useLocation();

    const productsLocations = [
        '/products/Premixes',
        '/products/Chocolate%20Compounds',
        '/products/Real%20Chocolates',
        '/products/Choco%20Pastes',
        '/products/Choco%20Chips',
        '/products/Cocoa%20Substitute',
        '/products/Consumer%20Chocolates',
    ]

    useEffect(() => {
        setProductLinkActive(productsLocations.includes(location.pathname));

    }, [location.pathname])


    const productsLinks = [
        { id: 1, name: 'Premix', link: '/products/Premixes?start=0&end=4&title1=Cake Premixes&title2=Muffin Premixes', },   
        { id: 2, name: 'Chocolate Compounds', link: '/products/Chocolate Compounds?start=0&end=2&title1=Chocolate Compounds&title2=Flavoured Chocolate Compounds', },
        { id: 3, name: 'Real Chocolates', link: '/products/Real Chocolates?start=0&end=5&title1=Real Chocolates' },
        { id: 4, name: 'Choco Paste', link: '/products/Choco Pastes?start=0&end=3&title1=Choco Pastes&title2=Flavoured Choco Pastes', },
        { id: 5, name: 'Choco Chips', link: '/products/Choco Chips?start=0&end=3&title1=Choco Chips', },
        { id: 6, name: 'Cocoa Substitute', link: '/products/Cocoa Substitute?start=0&end=2&title1=Carob Powder&title2=Formulated Cocoa Substitute', },
        { id: 7, name: 'Consumer Chocolates', link: '/products/Consumer Chocolates?start=0&end=2&title1=Consumer Chocolates', },
    ]

    return (
        <Fade triggerOnce>
            <footer className="bg-[#472723] text-[#fbecdf] py-12 poppins-regular">
                <div className=" max-w-7xl container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8">

                        {/* Company Info */}
                        <div className='lg:col-span-4 px-6 lg:px-0'>
                            <h3 className="text-lg font-semibold mb-4">Plasti Injmould India Ltd.</h3>
                            <p className="mb-2 flex items-start gap-2"><LocateFixedIcon className='h-5 w-5 flex-shrink-0 mt-0.5' />Plot No. B1 21, Amalgamated Indl Complex, Asangaon, West Shahapur - 421601</p>
                            <p className="mb-2 flex items-center gap-2"><Mail className='h-5 w-5 flex-shrink-0' />mp@maxvcoco.com</p>
                            <p className='mb-2 flex items-center gap-2'><Phone className='h-5 w-5 flex-shrink-0' /><strong className='text-red-400 tracking-wider'>+91 8591195915</strong></p>
                        </div>

                        {/* Quick Links */}
                        <div className='lg:col-span-3 flex flex-col items-start px-6 lg:px-0'>
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="flex flex-col space-y-2">
                                {navItems.map(item => (
                                    <NavLink
                                        to={item.link}
                                        key={item.id}
                                        className={({ isActive }) =>
                                            (isActive || (item.name === 'Products' && productLinkActive))
                                                ? 'text-xl text-red-400'
                                                : 'text-lg text-[#fbecdf] hover:text-red-400 hover:text-xl transition-all duration-200 ease-in-out'
                                        }>
                                        <p className='flex items-center'><ChevronRight className='mr-2' />{item.name}</p>
                                    </NavLink>
                                ))}
                            </ul>
                        </div>

                        {/* Products */}
                        <div className='lg:col-span-3 flex flex-col items-start px-6 lg:px-0'>
                            <h3 className="text-xl font-semibold mb-4 ">Our Products</h3>

                            {/* for small screens  */}
                            <div className='lg:hidden'>
                                <ul className="flex flex-col space-y-3">
                                    {productsLinks.map(item => (
                                        <NavLink
                                            to={item.link}
                                            key={item.id}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-lg text-red-400'
                                                    : 'text-lg text-[#fbecdf] hover:text-red-400 hover:text-xl transition-all duration-200 ease-in-out'
                                            }>
                                            <p className='flex items-start min-[425px]:items-center'><ChevronRight className='mr-2' />{item.name}</p>
                                        </NavLink>
                                    ))}
                                </ul>
                            </div>

                            {/* for large screen  */}
                            <div className='hidden lg:flex space-x-5'>
                                <ul className="flex flex-col space-y-2">
                                    {productsLinks.map(item => (
                                        <NavLink
                                            to={item.link}
                                            key={item.id}
                                            className={({ isActive }) =>
                                                (isActive )
                                                    ? 'text-xl lg:text-base xl:text-xl text-red-400'
                                                    : 'text-lg lg:text-sm xl:text-lg text-[#fbecdf] hover:text-red-400 hover:text-xl transition-all duration-200 ease-in-out'
                                            }>
                                            <p className='flex items-center'>{item.name}</p>
                                        </NavLink>
                                    ))}
                                </ul>
            
                            </div>
                        </div>


                        {/* Social Media Links */}
                        <div className='lg:col-span-2 flex  flex-col items-start px-6 lg:px-0'>
                            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-[#fbecdf] hover:text-red-400 transition-all duration-200 ease-in-out">
                                    <Facebook size={24} />
                                </a>
                                <a href="#" className="text-[#fbecdf] hover:text-red-400 transition-all duration-200 ease-in-out">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" className="text-[#fbecdf] hover:text-red-400 transition-all duration-200 ease-in-out">
                                    <Twitter size={24} />
                                </a>
                                <a href="#" className="text-[#fbecdf] hover:text-red-400 transition-all duration-200 ease-in-out">
                                    <Youtube size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t-2 border-[#fbecdf] text-center">
                        <p className='text-red-400'>&copy; {new Date().getFullYear()} Plasti Injmould India Ltd.</p>
                        <p className='text-[#fbecdf]'>All rights reserved, by A9 Business</p>
                    </div>
                </div>
            </footer>
        </Fade>
    );
};

export default Footer;


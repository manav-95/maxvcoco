import React from 'react'
import Logo from '../../assets/company-logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const navItems = [
        { id: 1, name: 'Home', link: '/', },
        { id: 2, name: 'Products', link: '/products', },
        { id: 3, name: 'Services', link: '/services', },
        { id: 4, name: 'About us', link: '/about-us', },
    ]

    return (
        <div className=' bg-white fixed top-0 left-0 right-0 z-50 shadow-lg'>
            <div className='max-w-7xl container mx-auto px-4'>
                <div className='flex justify-between'>
                    <img
                        src={Logo}
                        alt="Brand Logo"
                        className='h-16 w-68'
                    />
                    <div className='hidden md:flex items-center justify-center'>
                        {navItems.map((item) => (
                            <NavLink
                                to={item.link}
                                key={item.id}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-lg font-semibold px-4 py-4 border-b-4 border-red-500 text-red-500 rounded-sm transition-all duration-200 ease-in-ou4'
                                        : 'text-lg font-semibold px-4 py-4 border-b-4 border-transparent hover:text-red-500 transition-all duration-200 ease-in-out'
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import React, { useEffect, useRef, useState } from 'react'
import Logo from '../../assets/company-logo.png'
import { NavLink } from 'react-router-dom'
import { MdOutlineMenuOpen, MdClose } from "react-icons/md";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef();

    const navItems = [
        { id: 1, name: 'Home', link: '/', },
        { id: 2, name: 'Products', link: '/products', },
        { id: 3, name: 'Services', link: '/services', },
        { id: 4, name: 'About us', link: '/about-us', },
    ]

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!menuRef?.current?.contains(event.target)) {
                setMenuOpen(false);
            };
        };
        document.addEventListener('mousedown', handleClickOutside);
    }, [menuRef])


    return (
        <div className='bg-[#fdf6f0] fixed top-0 left-0 right-0 z-50 shadow-lg py-2 md:py-0 poppins-regular'>
            <div className='max-w-7xl container mx-auto px-2 sm:px-4'>
                <div className=' flex items-center justify-between'>
                    <img
                        src={Logo}
                        alt="Brand Logo"
                        onClick={() => window.location.reload()}
                        style={{ cursor: 'pointer' }}
                        className='-translate-y-1 h-12 w-38 lg:h-16 lg:w-68'
                    />
                    {/* Mobile menu */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu}>
                            {menuOpen
                                ? <MdClose className='h-10 w-10' />
                                : <MdOutlineMenuOpen className='h-10 w-10' />}
                        </button>
                        {menuOpen &&
                            <div ref={menuRef} className={`absolute top-16 left-0 w-full bg-[#fdf6f0] flex flex-col space-y-1.5 py-4 px-2`}>
                                {navItems.map((item) => (
                                    <NavLink
                                        to={item.link}
                                        onClick={() => (setMenuOpen(false))}
                                        key={item.id}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'block font-medium text-xl py-2 px-4 bg-red-400 text-white rounded'
                                                : 'block font-medium text-xl py-2 px-4 text-black rounded hover:bg-gray-100 transition-all duration-150 ease-in-out'
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        }

                    </div>
                    {/* desktop menu */}
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
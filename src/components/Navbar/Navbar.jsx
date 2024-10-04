import React from 'react'
import Logo from "../../assets/logo.png"
import { BsSearch } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import DarkMode from './DarkMode';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/home"
    },
    {
        id: 2,
        name: "Top Rated",
        link: "#"
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "#"
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "#"
    },
    {
        id: 5,
        name: "Electronics",
        link: "#"
    }
]

const DropdownLinks = [
    {
        id: 1,
        name: "Best Selling",
        link: "#"
    },
    {
        id: 2,
        name: "Top Rate"
    }
]
const Navbar = () => {
    return (
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white
                        duration-200 relative z-40
        '>
            {/* upper Navbar */}
            <div className='bg-primary/40 py-2'>
                <div className='container flex justify-between items-center'>
                    <div>
                        <a href="#"
                            className='font-bold text-2xl sm:text-3xl flex gap-2'
                        >
                            <img src={Logo} alt="logo"
                                className='w-10 uppercase'
                            />
                            Sopsy
                        </a>
                    </div>
                    {/* search */}
                    <div className="flex justify-center items-center gap-4">
                        <div className='relative group hidden sm:block'>
                            <input type="text"
                                placeholder='search'
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300
                                            rounded-full border border-gray-300 px-2 py-1
                                            focus:outline-none focus:border-1 
                                            focus:border-primary
                                            dark:border-gray-500
                                            dark:bg-gray-800
                                "
                            />
                            <BsSearch className='text-gray-500 group-hover:text-primary
                                                absolute top-1/2 -translate-y-1/2 right-3
                            ' />
                        </div>
                        {/* order */}
                        <button
                            onClick={() => alert("Ordering not available yet")}
                            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200
                                    text-white py-1 px-4 rounded-full flex items-center gap-3 group
                        "
                        >
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>
                        {/* DarkMode */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
            {/* lower Navbar */}
            <div>
                <ul className='sm:flex hidden items-center gap-4 justify-center'>
                    {
                        Menu.map((data) => (
                            <li key={data.id}>
                                <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
                            </li>
                        ))
                    }
                    {/* simple Dropdown and Link */}
                    <li className='group relative cursor-pointer'>
                        <a href="#" className='flex items-center gap-[2px] py-2'>
                            Trending
                            <span>
                                <IoMdArrowDropdown
                                    className='transition-all duration-200 group-hover:rotate-180'
                                />
                            </span>
                        </a>
                        <div className='absolute z-[9999] hidden
                                        group-hover:block w-[150px] rounded-md bg-white p-2 text-black
                                        shadow-md
                        '>
                            <ul>
                                {
                                    DropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                                                {data.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
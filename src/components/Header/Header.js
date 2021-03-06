import React, { useState } from 'react';
import { MenuIcon, ShoppingCartIcon, UserCircleIcon, XIcon } from '@heroicons/react/solid'
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='bg-indigo-200'>
            <div className='md:flex justify-between items-center'>
                <div className='flex justify-between items-center py-5 px-8 container mx-auto'>
                    <div>
                        <Link to='home' className='text-2xl font-semibold text-orange-500'>Food Valley</Link>
                    </div>
                    <div onClick={() => setOpen(!open)} className='w-7 h-7 md:hidden ml-3'>
                        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                    </div>
                </div>
                <nav className=' w-full text-center'>
                    <ul className={`md:flex absolute md:static duration-300 ease-in bg-indigo-200  w-full ${open ? 'top-14' : 'top-[-190px]'}`}>
                        <CustomLink className='font-semibold text-lg md:mr-6' to='/home'>Home</CustomLink>
                        <CustomLink className='font-semibold text-lg md:mr-6' to='/about'>About</CustomLink>
                        <CustomLink className='font-semibold text-lg md:mr-6' to='/categories'>Categories</CustomLink>
                        <CustomLink className='font-semibold text-lg md:mr-6' to='/contact'>Contact</CustomLink>
                        <ShoppingCartIcon className='w-8 md:mr-6 mx-auto md:ml-0 text-start'></ShoppingCartIcon>
                        <UserCircleIcon className='w-8 mx-auto md:mr-6 md:ml-0  text-center'></UserCircleIcon>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
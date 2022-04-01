import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
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
                        <li>Asad</li>
                        <li>Asad</li>
                        <li>Asad</li>

                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className=' font-mono text-xl text-center md:text-3xl '>
                    Contact Us, Our Office Address Down Below
                </h1>

                <div className='flex justify-center items-center mt-8'>
                    <Link to='bd-address' className='py-1 px-3 hover:bg-violet-500 rounded-sm  text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0'>
                        BD Address
                    </Link>
                    <Link to='us-address' className='hover:bg-violet-500 rounded-sm  py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0'>
                        US Address
                    </Link>
                    <a target='_blank' rel="noreferrer" href='https://crypto-masters-club.netlify.app/' className='hover:bg-violet-500 rounded-sm  py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0'>
                        Crypto Masters Club
                    </a>

                </div>
                <div className='flex justify-center items-center pt-20 pb-32 w-full md:w-8/12'>
                    <Outlet />
                </div>
            </div>
        </section>
    )
}

export default Contact
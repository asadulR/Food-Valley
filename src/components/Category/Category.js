import React from 'react';

const Category = ({ category }) => {
    const { strCategory, strCategoryDescription, strCategoryThumb } = category;
    return (
        <div className='grid border-2 my-5 items-center text-gray-400 rounded-lg border-orange-400 grid-cols-1 md:grid-cols-2 p-4 bg-zinc-900'>
            <div className='order-2 md:order-1'>
                <p className='my-2'> <span className='text-xl'>Category:</span> <span className='text-2xl '>{strCategory}</span></p>
                <p> <span className='text-xl'>Description:</span> <span className='text-2xl '>{strCategoryDescription}</span></p>
            </div>
            <div className='text-center rounded-lg order-1 md:order-2 mx-auto bg-gray-400'>
                <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
                <img className='p-4  rounded-lg border-2 border-amber-300 translate-x-3 -translate-y-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' src={strCategoryThumb} alt="thumb" />
            </div>
        </div>
    );
};

export default Category;
import React from 'react';

const Category = ({category}) => {
    const {strCategory, strCategoryDescription, strCategoryThumb} = category;
    return (
        <div className='grid border-2 my-5 items-center text-gray-400 rounded-lg border-orange-400 grid-cols-1 md:grid-cols-2 p-4 bg-zinc-900'>
            <div className='order-2 md:order-1'>
                <p className='my-2'> <span className='text-xl'>Category:</span> <span className='text-2xl '>{strCategory}</span></p>
                <p> <span className='text-xl'>Description:</span> <span className='text-2xl '>{strCategoryDescription}</span></p>
            </div>
            <div className='text-center rounded-lg order-1 md:order-2 mx-auto bg-gray-400'>
                <img className='p-4 rounded-lg border-2 border-amber-300' src={strCategoryThumb} alt="thumb" />
            </div>
        </div>
    );
};

export default Category;
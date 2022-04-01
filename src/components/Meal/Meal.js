import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const { strMeal, idMeal, strMealThumb, strArea, strCategory } = props.meal
    return (
        <div className=''>
            <Link to={`meal-details/${idMeal}`}>
                <div className='px-2 text-center bg-gray-400 py-3 rounded-lg'>
                    <img className='border-2 border-orange-400 rounded-lg' src={strMealThumb} alt="" />
                    <p className='text-lg font-semibold text-purple-800 my-1'>{strMeal}</p>
                    <p className='text-white text-lg'>{strCategory}, {strArea}</p>
                </div>
            </Link>
        </div>
    );
};

export default Meal;
import React from 'react';

const Meal = (props) => {
    const {strMeal, strMealThumb, strArea, strCategory} = props.meal
    return (
        <div className='px-2 text-center'>
            <img src={strMealThumb} alt="" />
        </div>
    );
};

export default Meal;
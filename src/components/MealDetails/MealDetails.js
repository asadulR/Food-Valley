import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const MealDetails = () => {
    const { idMeal } = useParams();
    const [mealDetails, setMealDetails] = useState([]);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        fetch(url)
            .then(res => res.json()).then(data => {
                setMealDetails(data.meals[0])
                setLoading(false);
            })
    }, [idMeal])
    return (
        <>
            {
                loading ? <Spinner></Spinner> :
                <div className=' bg-slate-500'>
                    <div className='container mx-auto px-2 md:px-0 py-10'>
                        <div className='grid grid-cols-1 h-full md:grid-cols-2 gap-4 items-center'>
                            <div className='order-2 md:order-1'>
                                <h2 className='text-2xl '> <span className='text-white'>Name:</span> <span className='font-semibold text-orange-500'>{mealDetails.strMeal}</span></h2>
                                <p className='py-2'><span className='text-2xl text-white'>Ingredients:</span> <span className='text-lg'>{mealDetails.strIngredient1}, {mealDetails.strIngredient2}, {mealDetails.strIngredient3}, {mealDetails.strIngredient4}, {mealDetails.strIngredient5},
                                    {mealDetails.strIngredient6}, {mealDetails.strIngredient7}, {mealDetails.strIngredient8}, {mealDetails.strIngredient9}, {mealDetails.strIngredient10}
                                    , {mealDetails.strIngredient11}, {mealDetails.strIngredient12}, {mealDetails.strIngredient13}, {mealDetails.strIngredient14}</span></p>

                                <p className='py-2'> <span className='text-2xl text-white'>Instructions:</span> <span> {mealDetails.strInstructions}</span></p>
                            </div>
                            <div className='order-1 md:order-2'>
                                <img className='border-2 border-orange-500 rounded-lg' src={mealDetails.strMealThumb} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default MealDetails;
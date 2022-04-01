import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Home = () => {


    const [searchText, setSearchText] = useState('');

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json()).then(data => setMeals(data.meals));
    }, [searchText])

    const searchFood = (e) => {
        setSearchText(e.target.value);
    }
    return (
        <div className='my-10 container px-1 mx-auto'>
            <h2 className='text-lg font-semibold text-orange-600 md:text-3xl text-center'>Search the Food you want</h2>

            <div className=' bg-gray-500 md:w-8/12 mx-auto text-center p-6 rounded-full my-10'>
                <input onChange={searchFood} placeholder='search food by name...' className='border-orange-400 border-2 w-full rounded-md px-3 py-2 text-lg' type="text" name="" id="" />
            </div>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'> 
                    {
                        meals ? meals.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}
                        ></Meal>) : <p className='text-lg text-center text-red-500 font-semibold'>No data found! Search again.</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
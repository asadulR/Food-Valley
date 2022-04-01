import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Spinner from '../Spinner/Spinner';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        setSpinner(true)
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json()).then(data => {
                setCategories(data.categories)
                setSpinner(false);
            });
    }, [])

    return (
        <>
            {
                spinner ? <Spinner></Spinner> :
                <div className='px-2 bg-slate-400'>
                    <h2 className='text-2xl text-center font-semibold py-4'>Total Categories of Foods: <span className='text-orange-500'>{categories.length}</span></h2>
                    <div className='container mx-auto'>

                        {
                            categories.map(category => <Category
                                key={category.idCategory}
                                category={category}
                            ></Category>)
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default Categories;
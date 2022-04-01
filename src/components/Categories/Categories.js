import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState({});

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json()).then(data => setCategories(data.categories));
    }, [])

    console.log(categories);
    return (
        <div>
            kjhkgfd
        </div>
    );
};

export default Categories;
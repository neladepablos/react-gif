import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Mario']);
    // console.log(categories);

    const onAddCategory = (newCategory) => {
        // console.log('Avatar');
        // setCategories(cat => [...cat, 'Avatar']);
        // console.log(newCategory)

        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);

    }

    return (
        <>
            {/* titulo */}
            <h1>Gif expert App</h1>

            {/* input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(onAddCategory)}
            />

            {/* Listado de gifs */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => {
                        return (
                            <GifGrid key={category} category={category} />

                        )
                    })
                }
            </ol>
            {/* gif item */}

        </>
    )
}



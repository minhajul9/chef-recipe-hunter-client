import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Recipe = () => {

    const notify = () => toast.success('Added to Favorites');

    const recipe = useLoaderData();
    // console.log('recipe', recipe);
    const [favorite, setFavorite] = useState(false)

    return (
        <div>
            <div className='flex justify-center'>
                <img className='w-4/6 rounded-xl' src={recipe.photo} alt="" />
            </div>

            <div className='w-4/6 mx-auto my-16'>
                <h1 className='text-7xl text-center my-10 font-bold'>{recipe.name.split('_').join(' ')}</h1>
                <h2 className='text-5xl font-semibold my-8'>Recipe</h2>
                <div>
                    <h3 className='text-3xl font-semibold my-4'>Ingredients: </h3>
                    <ol className='w-1/2 mx-auto list-decimal'>
                        {
                            recipe.recipe.ingredients.map( ing => <li 
                            key={ing}
                            ><span className='mx-4'>{ing}</span></li>)
                        }
                    </ol>
                </div>
                <div>
                    <h3 className='text-3xl font-semibold my-4'>Process: </h3>
                    <ol className='w-1/2 mx-auto list-disc'>
                        {
                            recipe.recipe.steps.map( ing => <li 
                            key={ing}
                            ><span className='mx-4'>{ing}</span></li>)
                        }
                    </ol>
                </div>
                
            </div>

            <div className='text-center my-24'>
                <button onClick={()=> {
                    setFavorite(true)
                    notify()
                    }} className='btn btn-primary' disabled={favorite}>Add to Favorite</button>
            </div>
            <Toaster />
        </div>

    );
};

export default Recipe;
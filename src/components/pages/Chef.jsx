import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {FaThumbsUp} from 'react-icons/fa'

const Chef = () => {

    const chef = useLoaderData();
    console.log(chef);

    return (
        <div >
            <div className='flex items-center px-24 my-32 gap-8 justify-center'>
                <img  className='border w-80' src={chef.photo} alt="" />
                <div>
                    <h1 className='text-5xl font-bold my-4'>{chef.name}</h1>
                    <p className='w-96'><span className='font-bold'>Description:</span> {chef.bio}</p>
                    <p className='w-96'><span className='font-bold'>Likes:</span> {chef.likes}</p>
                    <p className='w-96'><span className='font-bold'>No of Recipes:</span> {chef.recipes.length}</p>
                    <p className='w-96'><span className='font-bold'>Experience:</span> {chef.years_of_experience} years</p>
                    
                </div>
            </div>

            <div>
                
            </div>

            
        </div>
    );
};

export default Chef;
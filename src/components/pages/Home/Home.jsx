// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import './Home.css'
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from 'react-router-dom';
import { RecipesContext } from '../../Provider/RecipeProvider';

const Home = () => {

    const chefs = useLoaderData()

    const recipes = useContext(RecipesContext)



    return (
        <div>

            {/* banner */}
            <div className='banner'>
                <div className='banner2 '>
                    <div className='px-12 md:py-20 text-white flex flex-col justify-center text-center'>
                        <h1 className='text-6xl font-bold '>Khana Khazana</h1>
                        <p className='mt-4'>Foods that are asset of Bangladesh</p>
                    </div>
                    <div className='flex align-middle py-24 col-span-2'>
                        <Marquee className='rounded' gradient gradientColor={[0, 0, 0, 0.50]} speed={80} >

                            <img className='w-80 h-72 mx-10 rounded-lg' src="https://images.unsplash.com/photo-1593661982469-ff1e1bbbc88d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80" alt="" />

                            <img className='w-80 h-72 mx-10 rounded-lg' src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80" alt="" />
                            <img className='w-80 h-72 mx-10 rounded-lg ' src="https://images.unsplash.com/photo-1610514000782-b205b70fbe71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
                            <img className='w-80 h-72 mx-10 rounded-lg' src="https://images.unsplash.com/photo-1652954008429-ce394eacbd7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
                        </Marquee>
                    </div>
                </div>
            </div>

            {/* chefs */}
            <div>
                <h1 className='text-5xl text-center font-bold my-16'>Popular Chefs</h1>
                <div className='flex flex-wrap' >
                    {
                        chefs.map(chef =>
                            <div key={chef.id} className="card w-96 bg-base-100 shadow-xl m-10">
                                <figure className="px-10 pt-10">
                                    <img src={chef.photo} alt="Shoes" className="rounded-xl w-96" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{chef.name}</h2>
                                    <p><span className='font-semibold'>Experience:</span>  {chef.years_of_experience} years</p>
                                    <p><span className='font-semibold'>Number of Recipes:</span>  {chef.recipes.length}</p>
                                    <div className="card-actions">
                                        <Link to={`/chef/${chef.id}`}><button className="btn btn-primary">View Recipes </button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            {/* recipes */}
            <div>
                <h1 className='text-5xl text-center font-bold my-16'>Some Popular Foods of Bangladesh</h1>
                <Marquee speed={100} pauseOnHover>
                    {
                        recipes.map(recipe => <div
                            key={recipe.id}
                            className="card card-compact w-96 bg-base-100 shadow-xl m-10">
                            <figure ><img className='h-96' src={recipe.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{recipe.name.split('_').join(' ')}</h2>
                                <p>{recipe.location}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/recipe/${recipe.name}`}><button className="btn btn-primary">View Recipe</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </Marquee>
            </div>

            {/* favourites */}
            <div className='grid md:grid-cols-2 items-center md:my-24'>
                <div className='grid grid-cols-2 md:gap-8 gap-4'>
                    <img className='w-72 h-64 md:mx-10  rounded-lg' src="https://images.unsplash.com/photo-1593661982469-ff1e1bbbc88d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80" alt="" />

                    <img className='w-72 h-64 md:mx-10  rounded-lg' src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80" alt="" />
                    <img className='w-72 h-64 md:mx-10  rounded-lg ' src="https://images.unsplash.com/photo-1610514000782-b205b70fbe71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
                    <img className='w-72 h-64 md:mx-10  rounded-lg' src="https://images.unsplash.com/photo-1652954008429-ce394eacbd7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
                </div>
                <div>
                    <form action="/submit-favorite-dish" method="POST" className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <label className="block font-medium text-gray-500"> What's the name of your favorite dish?</label>
                            <input type="text" id="dish-name" name="dish_name" required className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none border" />
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium text-gray-500">What are the main ingredients in the dish?</label>
                            <textarea id="ingredients" name="dish_ingredients" required className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none border"></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium text-gray-500">How is the dish prepared?</label>
                            <textarea id="preparation" name="dish_preparation" required className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none border"></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium text-gray-500">Do you have a photo of the dish?</label>
                            <input type="file" id="photo" name="dish_photo" className="mt-1" />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
                        </div>
                    </form>


                </div>
            </div>


        </div>
    );
};

export default Home;
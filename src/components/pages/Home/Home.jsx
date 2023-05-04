import React from 'react';
import './Home.css'
import Marquee from "react-fast-marquee";
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const chefs = useLoaderData()


    return (
        <div>
            <div className='banner'>
                <div className='banner2 '>
                    <div className='px-12 py-20 text-white flex flex-col justify-center text-center'>
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

            <div>
                 <h1 className='text-5xl text-center font-bold my-16'>Popular Chefs</h1>
                <Marquee>
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
                                        <button className="btn btn-primary">View Recipes </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import './Home.css'
import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div>
            <div className='banner'>
                <div className='banner2 '>
                    <div className='px-12 py-20 text-white flex flex-col justify-center text-center'>
                        <h1 className='text-6xl font-bold '>Khana Khazana</h1>
                        <p className='mt-4'>Foods that are asset of Bangladesh</p>
                    </div>
                    <div className='flex align-middle py-24 col-span-2'>
                        <Marquee className='rounded' gradient gradientColor={[0, 0, 0, 0.50]}>

                            <img className='w-80 h-80 mx-10 rounded-lg' src="https://images.unsplash.com/photo-1593661982469-ff1e1bbbc88d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80" alt="" />

                            <img className='w-80 h-80 mx-10 rounded-lg' src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80" alt="" />
                            <img className='w-80 h-80 mx-10 rounded-lg ' src="https://images.unsplash.com/photo-1610514000782-b205b70fbe71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
                            <img className='w-80 h-80 mx-10 rounded-lg' src="https://images.unsplash.com/photo-1652954008429-ce394eacbd7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
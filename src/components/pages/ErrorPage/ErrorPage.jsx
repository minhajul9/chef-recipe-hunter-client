import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='p-32 flex flex-col items-center w-full'>
            <h1 className='text-7xl my-5 font-extrabold'>Oops!</h1>
            <p className='text-3xl font-bold my-4'>404 - Page not found</p>
            <p>Something wrong with the link your entered</p>
            <Link to='/'><button className="btn btn-info my-4">Go To Homepage</button></Link>
        </div>
    );
};

export default ErrorPage;
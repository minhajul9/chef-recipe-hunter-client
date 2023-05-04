
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex flex-col my-32 justify-center items-center">
            <div className="max-w-md w-full mx-auto shadow-lg p-12 rounded-lg">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-center text-gray-900">Login</h1>
                </div>
                <form className="bg-white p-6 rounded-lg ">
                    <div className="mb-4">
                        <label className='mr-11'>Email</label>
                        <input className='p-2 border rounded-md' type="email" name="email" id="email"  placeholder='Enter your email' required />
                    </div>
                    <div className="mb-4">
                        <label className='mr-4'>Password</label>
                        <input className='p-2 border rounded-md' type="password" name="password" id="pass" placeholder='Enter your password' required />
                    </div>
                    <div className="text-center">
                        <input type="submit" value="Submit" className='btn btn-primary' />
                    </div>

                    <p className='my-4'>New here? <Link to='/register' className='link link-primary'>create new account</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
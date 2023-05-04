import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('')

    const {createUser} = useContext(AuthContext)

    const handleCreateUser = event => {
        event.preventDefault();
        setError('')
        const form = event.target;

        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirmPass.value;
        const photo = form.photo.value;

        console.log(confirm, password);

        if(password !== confirm){
            setError('Password does not match');
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => setError(error.message))

    }

    return (
        <div className="flex flex-col my-32 justify-center items-center">
            <div className=" mx-auto shadow-lg p-12 rounded-lg bg-white">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-center text-gray-900">Register</h1>
                </div>
                <form onSubmit={handleCreateUser} className="bg-white p-6 rounded-lg ">
                    <div className="mb-4 flex justify-between items-center">
                        <label className="block font-medium text-gray-500 mr-11">Name</label>
                        <input className='p-2 border rounded-md' type="name" name="name" id="name" placeholder='Enter your name' required />
                    </div>
                    <div className="mb-4 flex justify-between items-center">
                        <label className="block font-medium text-gray-500 mr-11">Email</label>
                        <input className='p-2 border rounded-md' type="email" name="email" id="email" placeholder='Enter your email' required />
                    </div>
                    <div className="mb-4 flex justify-between items-center">
                        <label className="block font-medium text-gray-500 mr-4">Password</label>
                        <input className='p-2 border rounded-md' type="password" name="password" id="pass" placeholder='Enter your password' required />
                    </div>
                    <div className="mb-4 flex justify-between items-center">
                        <label className="block font-medium text-gray-500 mr-4">Confirm Password</label>
                        <input className='p-2 border rounded-md' type="password" name="confirmPass" id="confirm-pass" placeholder='Confirm password' required />
                    </div>

                    <div className="mb-4 flex justify-between items-center">
                        <label className="block font-medium text-gray-500">Upload your photo</label>
                        <input className='p-2 border rounded-md' type="text" name="photo" id="confirm" placeholder='Photo URL' required />
                    </div>
                    <div className="text-center">
                        <input type="submit" value="Submit" className='btn btn-primary' />
                    </div>
                    <p className='text-error'>{error}</p>
                    <p className='my-4'>Already have an account? <Link to='/login' className='link link-primary'>login</Link></p>
                    <button className="btn btn-outline w-full my-4">Continue with Google</button> <br />
                    <button className="btn btn-outline w-full my-4">Continue with Github</button>
                </form>

                
            </div>
        </div>
    );
};

export default Register;
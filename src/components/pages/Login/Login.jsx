
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const {signIn, googleLogin, githubLogin} = useContext(AuthContext)

    const handleSignIn = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            navigate('/')
        })
        .catch(error => setError(error.message))
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result => {
            console.log(result.user);
            navigate('/')
        })
        .catch(error => setError(error.message))

    }

    const handleGithubLogin = () =>{
        githubLogin()
        .then(result => {
            console.log(result.user);
            navigate('/')
        })
        .catch(error => setError(error.message))

    }

    return (
        <div className="flex flex-col my-32 justify-center items-center ">
            <div className="max-w-md w-full mx-auto shadow-lg p-12 rounded-lg bg-white">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-center text-gray-900">Login</h1>
                </div>
                <form onSubmit={handleSignIn} className="bg-white p-6 rounded-lg ">
                    <div className="mb-4">
                        <label className='mr-11'>Email</label>
                        <input className='p-2 border rounded-md' type="email" name="email" id="email" placeholder='Enter your email' required />
                    </div>
                    <div className="mb-4">
                        <label className='mr-4'>Password</label>
                        <input className='p-2 border rounded-md' type="password" name="password" id="pass" placeholder='Enter your password' required />
                    </div>
                    <div className="text-center">
                        <input type="submit" value="Submit" className='btn btn-primary' />
                    </div>

                    <p className='text-error'>{error}</p>

                    <p className='my-4'>New here? <Link to='/register' className='link link-primary'>create new account</Link></p>
                    <button onClick={handleGoogleLogin} className="btn btn-outline w-full my-4">Continue with Google</button> <br />
                    <button onClick={handleGithubLogin} className="btn btn-outline w-full my-4">Continue with Github</button>
                </form>

            </div>
        </div>
    );
};

export default Login;
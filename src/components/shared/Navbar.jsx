import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    
    const handleLogout = () =>{
        logOut()
        .then(result => {})
        .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100 w-4/5 mx-auto">
            <div className="navbar-start">
                <img className='w-16' src={logo} alt="" />
                <a className="btn btn-ghost normal-case text-xl">Khana Khazana</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Item 1</Link></li>
                    <li><Link to='/'>Item 3</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <span className='mx-4'>{user.displayName || user.email}</span>
                            <button onClick={handleLogout} className="btn btn-primary">Log Out</button>
                        </>
                        :
                        <Link to='/login'><button className="btn btn-primary">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
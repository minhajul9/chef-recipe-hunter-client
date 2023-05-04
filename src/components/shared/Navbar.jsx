import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg'

const Navbar = () => {
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
            <Link>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
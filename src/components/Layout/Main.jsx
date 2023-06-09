import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className='md:w-4/5 mx-auto'>
                <Outlet ></Outlet>
            </div>
            <Footer ></Footer>
        </div>
    );
};

export default Main;
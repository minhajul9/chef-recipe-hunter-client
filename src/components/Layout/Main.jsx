import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            This is main
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
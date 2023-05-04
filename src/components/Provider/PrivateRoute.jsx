import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return (

            <div className="flex justify-center items-center h-screen ">
                <div className="grid gap-2">
                    <div className="flex items-center justify-center ">
                        <div className="w-16 h-16 border-b-8 border-red-700 rounded-full animate-spin"></div>
                    </div>
                    
                </div>
    
            </div>
        );
    }

    if (user){
        return children;
    }

    return (
        <Navigate to='/login' state={{from: location}}></Navigate>
    );
};

export default PrivateRoute;
import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { app } from '../../Firebase/firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const user = {displayName: 'Minhaj'};

    const createUser = (email, password) =>
    {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user, 
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
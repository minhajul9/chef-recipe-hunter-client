import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { app } from '../../Firebase/firebase.config';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect( ()=>{
        onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser)
            setLoading(false)

        })
    },[])

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email, password) =>
    {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user, 
        loading,
        createUser,
        logOut,
        signIn,
        googleLogin, 
        githubLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
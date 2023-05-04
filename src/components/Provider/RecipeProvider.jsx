import React, { createContext, useEffect, useState } from 'react';
import AuthProvider from './AuthProvider';

export const RecipesContext = createContext(null)

const RecipeProvider = ({ children }) => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-minhajul9.vercel.app/recipe')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <AuthProvider>
            <RecipesContext.Provider value={recipes}>
                {children}
            </RecipesContext.Provider>
        </AuthProvider>
    );
};

export default RecipeProvider;
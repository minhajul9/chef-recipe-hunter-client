import React, { createContext, useEffect, useState } from 'react';
import AuthProvider from './AuthProvider';

export const RecipesContext = createContext(null)

const RecipeProvider = ({ children }) => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/recipe')
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
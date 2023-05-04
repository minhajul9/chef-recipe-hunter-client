import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Layout/Main.jsx'
import Home from './components/pages/Home/Home.jsx'
import RecipeProvider from './components/Provider/RecipeProvider.jsx'
import ErrorPage from './components/pages/ErrorPage/ErrorPage.jsx'
import Login from './components/pages/Login/Login.jsx'
import Register from './components/pages/Register/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chefs')
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeProvider><RouterProvider router={router}></RouterProvider></RecipeProvider>
  </React.StrictMode>,
)

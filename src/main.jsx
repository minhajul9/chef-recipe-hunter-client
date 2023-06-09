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
import Chef from './components/pages/Chef'
import Recipe from './components/pages/Recipe'
import PrivateRoute from './components/Provider/PrivateRoute'
import Blog from './components/pages/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://chef-recipe-hunter-server-minhajul9.vercel.app/chefs')
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'chef/:id',
        element: <Chef></Chef>,
        loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-minhajul9.vercel.app/chefs/${params.id}`)
      },
      {
        path: 'chef/:id/:name',
        element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-minhajul9.vercel.app/chef/${params.id}/${params.name}`)
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeProvider><RouterProvider router={router}></RouterProvider></RecipeProvider>
  </React.StrictMode>,
)

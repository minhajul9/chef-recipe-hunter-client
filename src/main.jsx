import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Layout/Main.jsx'
import Home from './components/pages/Home/Home.jsx'
import RecipeProvider from './components/Provider/RecipeProvider.jsx'
import ErrorPage from './components/pages/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chefs')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeProvider><RouterProvider router={router}></RouterProvider></RecipeProvider>
  </React.StrictMode>,
)

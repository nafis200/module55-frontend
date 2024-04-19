import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Apps from './Apps';
import App from './App'
import Users from './Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Apps></Apps> ,
  },
  {
    path:'/users',
    element: <Users></Users>,
    loader: ()=>fetch('http://localhost:5004/users')
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

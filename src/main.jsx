import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Apps from './Apps';
import Users from './Users';
import Update from './Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Apps></Apps> ,
  },
  {
    path:'/users',
    element: <Users></Users>,
    loader: ()=>fetch('http://localhost:5004/users')
  },
  {
    path: '/update/:id',
    element: <Update></Update>,
    loader: ({params})=> fetch(`http://localhost:5004/users/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

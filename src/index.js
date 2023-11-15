import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Match from "./pages/match/Match";
import NotFound from "./pages/NotFound";
import Profile from "./pages/profile/Profile";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";


const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/match",
                element: <Match/>,
                errorElement: <NotFound/>,
            },
            {
                path: "/profile",
                element: <Profile/>,
                errorElement: <NotFound/>,
            },
            {
                path: "/login",
                element: <Login/>,
                errorElement: <NotFound/>,
            },
            {
                path: "/register",
                element: <Register/>,
                errorElement: <NotFound/>,
            }
        ],
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);


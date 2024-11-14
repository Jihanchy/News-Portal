import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout/>
    },
    {
        path: '/news',
        element: <h2>News</h2>
    },
    {
        path: '/auth',
        element: <h3>Login</h3>
    },
    {
        path: '*',
        element: <h2>Error</h2>
    }
])

export default router;
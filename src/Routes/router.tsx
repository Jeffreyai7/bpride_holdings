import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Services from "../pages/Services";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/services",
        element: <Services/>
    },
    {
        path: "/blog",
        element: <Blog/>
    },
    {
        path: "contact",
        element: <Contact/>
    }
]
);

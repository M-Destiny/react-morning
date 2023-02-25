import {
    createBrowserRouter,
} from "react-router-dom";
import About from "./About";
import Content from "./Content";
import Service from "./Service";
import Product from "./Product";
import App from "./App";
import Usermark from "./Usermark";
import Singleproduct from "./Singleproduct";
import Filterpro from "./Filterpro";
import Add from "./Add";
import Selectdata from "./Selectdata";
import Adddata from "./Adddata";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Content />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'usermark',
                element: <Usermark />
            },
            {
                path: 'service',
                element: <Service />
            },
            {
                path: 'product',
                element: <Product />
            },
            {
                path: 'single-product/:id',
                element: <Singleproduct />
            },
            {
                path: 'filter-product',
                element: <Filterpro />
            },
            {
                path: 'add',
                element: <Add />
            },
            {
                path: 'crud-select',
                element: <Selectdata />
            },
            {
                path: 'crud-add',
                element: <Adddata />
            },
        ]
    }
]);

export default router
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
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Task1 from "./Task1";
import Cycle from "./Cycle";
import Parent from "./Parent";
import ClassA from "./ClassA";
import Main from "./Main";
import ReduxStore from "./ReduxStore";




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
            {
                path: 'comp1',
                element: <Comp1 name="Damn" />
            },
            {
                path: 'comp2',
                element: <Comp2 />
            },
            {
                path: 'comp3',
                element: <Comp3 />
            },
            {
                path: 'task',
                element: <Task1 />
            },
            {
                path: 'cycle',
                element: <Cycle age='20' />
            },
            {
                path: 'parent',
                element: <Parent />
            },
            {
                path: 'classa',
                element: <ClassA />
            },
            {
                path: 'maina',
                element: <Main />
            },
            {
                path: 'redux-store',
                element: <ReduxStore />
            },
        ]
    }
]);

export default router
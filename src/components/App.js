import { Outlet } from "react-router-dom";
// import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AllActions from "../redux/actions/AllActions";

function App() {
    let dispatch = useDispatch();

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(ProductsData => {
                console.log(ProductsData)
                dispatch({ type: AllActions.Add_Product, payload: ProductsData })
            })


        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(CategoryData => {
                console.log(CategoryData);
                dispatch({ type: AllActions.Add_Category, payload: CategoryData })
            })
    }, [])

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
export default App;
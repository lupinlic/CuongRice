//public routes
import Home from "../pages/User/Home/Home";
import Product from "../pages/User/Product/Product";
import Introduce from "../pages/User/Introduce/Introduce";
import Cart from "../pages/User/Cart/Cart";
import Product_details from "../pages/User/Product_details/Product_details";

const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/Product', component: Product
    },
    {
        path: '/Introduce', component: Introduce
    },
    {
        path: '/Cart', component: Cart
    },
    {
        path: '/Product_details', component: Product_details
    },

];

const privateRoutes = [];

export {
    publicRoutes, privateRoutes
};
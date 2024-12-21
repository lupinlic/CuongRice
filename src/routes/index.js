//public routes
import Home from "../pages/User/Home/Home";
import Product from "../pages/User/Product/Product";
import Introduce from "../pages/User/Introduce/Introduce";

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

];

const privateRoutes = [];

export {
    publicRoutes, privateRoutes
};
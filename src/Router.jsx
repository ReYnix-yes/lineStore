import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Cart } from './pages'
import ProductDetails from "./pages/productDetails/ProductDetails";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/product-details/:productId",
        element: <ProductDetails />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);


const Router = () =>
    <RouterProvider router={router} />

export default Router;
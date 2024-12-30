import MainLayout from '@layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import AboutUs from '@pages/AboutUs';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Error from '@pages/Error';
import ShoppingCart from '@pages/ShoppingCart';
import Wishlist from '@pages/WishList';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <Error/>,
        children: [{
            index: true,
            element: <Home/>
        },{
            path: "categories",
            element: <Categories/>
        },{
            path: "categories/products/:prefix",
            element: <Products/>,
            loader: ({ params }) => {
                if (
                  typeof params.prefix !== "string" ||
                  !/^[a-z]+$/i.test(params.prefix)                  
                ) {
                  throw new Response("Bad Request", {
                    statusText: "Category not found",
                    status: 400,
                  });
                }
                return true;
              },
        },{
          path: "cart",
          element: <ShoppingCart/>
      },{
        path: "wishlist",
        element: <Wishlist/>
    },{
            path: "about-us",
            element: <AboutUs/>
        },{
            path: "sign-in",
            element: <Login/>
        },{
            path: "register",
            element: <Register/>
        }]
    }
]);
const RoutesApp = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default RoutesApp;
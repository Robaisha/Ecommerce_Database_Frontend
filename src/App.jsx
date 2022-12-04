import Product from "./pages/Product";
import Home from "./pages/home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import LoginAdmin from "./pages/LoginAdmin"
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import AdminPortal from './pages/Admin';
import AdminAllProducts from "./pages/AdminAllProducts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {CartProvider} from "./contextProvider/CartContext";
import AdminAllCustomer from "./pages/AdminAllCustomer";
import AdminAllCustomerOrder from "./pages/AdminAllCustomerOrder";
import ViewMyOrder from "./pages/ViewMyOrder";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:"/cart",
      element: <Cart />
    },
    {
      path:"/login",
      element: <Login />
    },
    {
      path:"/register",
      element: <Register />
    },
    {
      path:"/productlist",
      element: <ProductList />
    },
    {
      path:"/product",
      element: <Product />
    },
    {
      path:"/admin",
      element:<LoginAdmin/>
    },
    {
      path:"/adminportal",
      element:<AdminPortal/>
    },
    {
      path:"/adminallproducts",
      element:<AdminAllProducts/>
    },
    {
      path:"/adminallcustomer",
      element:<AdminAllCustomer/>
    },
    {
      path:"/admincustomerorder",
      element:<AdminAllCustomerOrder/>
    },
    {
      path:"/viewmyorder",
      element:<ViewMyOrder/>
    }

  ]);
  return (
    <div className="App">
      <CartProvider>

      <RouterProvider router={router} />
      </CartProvider>
    </div>
  );
};

export default App;
import React from "react";
import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import { ProductsData } from "./api/api";
import SignIn from "./pages/SignIn";
import Regestration from "./pages/Regestration";
import Cart from "./pages/Cart";
const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />  {/* to scroll in page cart after clear data  */}
      
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={ProductsData}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        </Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/regestration" element={<Regestration />}></Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

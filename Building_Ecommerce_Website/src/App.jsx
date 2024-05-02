import ProductDetail from "./MenuNavbar/ProductDetail";
import ProductPage from "./MenuNavbar/ProductPage";
import ContactPage from "./MenuNavbar/ContactPage";
import MiniHeader from "./components/Footer/MiniHeader";
import { Routes, Route } from "react-router-dom";
import StorePage from "./MenuNavbar/StorePage";
import AboutPage from "./MenuNavbar/AboutPage";
import HomePage from "./MenuNavbar/HomePage";
import CartProvider from "./store/CartProvider";
import BucketItems from "./components/Cart/BucketItems";
import { useState } from "react";
import Navbar from "./components/Header/Navbar";
// import GettingData from "./components/Data/GettingData";
import AppName from "./components/AppName";
import classes from "./App.module.css";

function App() {
  const [visible, setVisible] = useState(false);

  const showBucket = () => {
    setVisible(true);
  };

  const hideBucket = () => {
    setVisible(false);
  };

  return (
    <CartProvider>
      <header>
        <Navbar showBucketABC={showBucket}></Navbar>
        <AppName></AppName>
      </header>
      <main>
        <div className={classes.routes_container}>
          <Routes>
            <Route path="/" Component={HomePage}></Route>
            <Route path="/store" Component={StorePage}></Route>
            <Route path="/about" Component={AboutPage}></Route>
            <Route path="/contact" Component={ContactPage}></Route>
            {/* <Route path="/product" Component={ProductPage}></Route> */}
            <Route path="/product-detail" Component={ProductDetail}></Route>
          </Routes>
        </div>
        {/* <HomePage></HomePage>
        <StorePage></StorePage>
        <AboutPage></AboutPage> */}
        {/* <GettingData></GettingData> */}
        {visible && <BucketItems hideBucketABC={hideBucket}></BucketItems>}
      </main>
      <footer>
        <MiniHeader></MiniHeader>
      </footer>
    </CartProvider>
  );
}

export default App;

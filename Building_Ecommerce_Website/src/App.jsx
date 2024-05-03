import AuthForm from "./components/Auth/AuthForm";
import ProductDetail from "./MenuNavbar/ProductDetail";
import ContactPage from "./MenuNavbar/ContactPage";
import MiniHeader from "./components/Footer/MiniHeader";
import { Switch, Route, Redirect } from "react-router-dom";
import StorePage from "./MenuNavbar/StorePage";
import AboutPage from "./MenuNavbar/AboutPage";
import HomePage from "./MenuNavbar/HomePage";
import CartProvider from "./store/CartProvider";
import BucketItems from "./components/Cart/BucketItems";
import { useState } from "react";
import Navbar from "./components/Header/Navbar";
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

          <Switch>
            <Route exact path="/"> <HomePage></HomePage> </Route>
            <Route exact path="/store">  <StorePage></StorePage> </Route>
            <Route exact path="/about"> <AboutPage></AboutPage> </Route>
            <Route exact path="/contact"> <ContactPage></ContactPage> </Route>
            {/* <Route path="/product" Component={ProductPage}></Route> */}
            <Route exact path="/product-detail"> <ProductDetail></ProductDetail> </Route>
            <Route exact path="/auth"> <AuthForm></AuthForm> </Route>
          </Switch>
        </div>
  
        {visible && <BucketItems hideBucketABC={hideBucket}></BucketItems>}
      </main>
      <footer>
        <MiniHeader></MiniHeader>
      </footer>
    </CartProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Products from "./pages/products/products.component";
import Cart from "./pages/cart";
import Order from "./pages/orders/orders";
import MainNavigation from "./components/layout/MainNavigation";

export default class App extends React.Component<
  any,
  { cartItems: Array<any> }
> {
  constructor(props: any) {
    super(props);
    this.state = { cartItems: [] };
  }

  addItemToCartHandler(productId: any) {
    console.log("vvv");
    this.setState((prevState) => {
      return {
        cartItems: [productId, ...prevState.cartItems],
      };
    });
  }

  removeProductFromCartHandler(product: any) {
    console.log("qqqq");
    this.setState((prevState) => ({
      cartItems: [product, ...prevState.cartItems].filter(
        (item: any) => item.id !== product.id
      ),
    }));
  }

  removeItemFromCartHandler(product: any) {
    console.log("eee");
    this.setState((prevState) => {
      let cartItems = prevState.cartItems;
      cartItems.splice(
        cartItems.findIndex((item) => item.id === product.id),
        1
      );
      console.log(cartItems);
      return {
        cartItems: cartItems,
      };
    });
  }

  render() {
    return (
      <div className="main_container">
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <Products
              cartItemIds={this.state.cartItems.map((item) => item.id)}
              addItemToCart={this.addItemToCartHandler.bind(this)}
              removeProductFromCart={this.removeProductFromCartHandler.bind(
                this
              )}
              removeItemFromCart={this.removeItemFromCartHandler.bind(this)}
            />
          </Route>
          <Route path="/cart">
            <Cart
              cartItems={this.state.cartItems}
              cartItemIds={this.state.cartItems.map((item) => item.id)}
              addItemToCart={this.addItemToCartHandler.bind(this)}
              removeProductFromCart={this.removeProductFromCartHandler.bind(
                this
              )}
              removeItemFromCart={this.removeItemFromCartHandler.bind(this)}
            />
          </Route>
          <Route path="/orders">
            <Order />
          </Route>
        </Switch>
      </div>
    );
  }
}

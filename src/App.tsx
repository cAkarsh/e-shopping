import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Products from './pages/products/products.component';
import Cart from './pages/cart';
import Order from './pages/orders/orders';
import MainNavigation from './components/layout/MainNavigation';

export default class App extends React.Component<
  any,
  { cartItems: Array<any> }
> {
  constructor(props: any) {
    super(props);
    this.state = { cartItems: [] };
  }

  handleClick(productId: any) {
    this.setState((prevState) => ({
      cartItems: [productId, ...prevState.cartItems],
    }));
  }

  render() {
    return (
      <div className='main_container'>
        <MainNavigation />
        <Switch>
          <Route path='/' exact>
            <Products addProductToCart={this.handleClick.bind(this)} />
          </Route>
          <Route path='/cart'>
            <Cart cartItems={this.state.cartItems} />
          </Route>
          <Route path='/orders'>
            <Order />
          </Route>
        </Switch>
      </div>
    );
  }
}

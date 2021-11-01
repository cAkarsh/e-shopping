import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Products from './pages/products';
import Cart from './pages/cart';
import Order from './pages/orders';
import MainNavigation from './components/layout/MainNavigation';

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James111',
      age: 35,
      img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      note: 'Allegeric to staying on the same team',
    },
    {
      name: 'Kobe Bryant',
      age: 42,
      img:
        'https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg',
    },
  ]);

  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <Products />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/orders'>
          <Order />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

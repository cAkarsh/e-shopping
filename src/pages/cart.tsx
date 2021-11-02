import React from 'react';
import Item from '../components/product-item/product-item';
import classes from './products/products.module.css';
export default class Cart extends React.Component<
  any,
  { cartItems: Array<any> }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }
  render() {
    return (
      <div className={classes.products_container}>
        All cart
        <div className={classes.products_list}>
          {this.props.cartItems.map((item: any) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

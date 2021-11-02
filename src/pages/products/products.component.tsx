import React from 'react';
import ProductsService from '../../services/products.services';
import Item from '../../components/product-item/product-item';
import classes from './products.module.css';

class Products extends React.Component<any, { products: Array<any> }> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    let data = await ProductsService.getAllProducts().then((res) => {
      return res.data;
    });
    this.setState({ products: data });
  }

  handleClick(productId: any) {
    this.props.addProductToCart(productId);
  }

  render() {
    return (
      <div className={classes.products_container}>
        All Products
        <div className={classes.products_list}>
          {this.state.products.map((item: any) => {
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
                addProductToCart={this.handleClick.bind(this)}
                cartItems={this.props.cartItems}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;

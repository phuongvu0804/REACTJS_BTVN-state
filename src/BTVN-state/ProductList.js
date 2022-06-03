import React, { Component } from "react";

export default class ProductList extends Component {
  renderProductList = () => {
    return this.props.data.map((product) => (
      <img 
        key={product.id} 
        src={product.url}
        onClick={() => {this.props.getProduct(product)}} 
      />
    ));
  };

  render() {
    return (
      <div className="product-list">
        {this.renderProductList()}
      </div>
    );
  }
}

import React, { Component } from "react";
import data from "./dataGlasses.json";
import Testing from "./Testing";
import ProductList from "./ProductList";

export default class TryClasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: data,
      testProduct: data[0]
    };
  }

  getDetailProduct = product => {
      this.setState({ testProduct: product });
  }

  render() {
    const { productList, testProduct } = this.state
    return (
      <div className="wrapper">
        <h1>Try classes app online</h1>
        <div className="content">
            <Testing data={testProduct}/>
            <ProductList data={productList} getProduct={this.getDetailProduct}/>
        </div>
      </div>
    );
  }
}

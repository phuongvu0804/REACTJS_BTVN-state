import React, { Component } from 'react'
import Tester from './Tester.js'

export default class Testing extends Component {

  render() {
    return (
      <div className="testing">
        <Tester data={this.props.data}/>
        <img src="./img/model.jpg" width={280}/>
      </div>
    )
  }
}

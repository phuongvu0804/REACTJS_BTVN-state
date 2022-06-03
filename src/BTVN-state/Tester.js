import React, { Component } from 'react'

export default class Tester extends Component {
  render() {
    const {data} = this.props

    console.log(data)
    return (
      <div className="tester-card">
        <img 
          src={"./img/model.jpg"}
          width={280}
        />
        <img className="tester-glass" src={data.url}/>
        <div className="tester-info">
          <h3>{data.name}</h3>
          <span>
            {data.desc}
          </span>
        </div>
      </div>
    )
  }
}

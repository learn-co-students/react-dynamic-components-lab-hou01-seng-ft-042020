import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    console.log(this.props)
    const newOpacity = this.props.opacity - .1
    if (this.props.opacity >= .2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
          <ColorBox opacity={newOpacity} />
        </div>
      )
    } else {
      return null
    }

  }

}


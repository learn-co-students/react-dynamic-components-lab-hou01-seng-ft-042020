import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  state = {
    todos: [
      
    ]
  }

  render() {
    console.log(this.props)
    const newOpacity = this.props.opacity - 0.1
    if (this.props.opacity >= 0.2) {
      return (
        <div
        className="color-box"
        style={
          {
            opacity: this.props.opacity
          }
        }
        >
          <ColorBox opacity={newOpacity}></ColorBox>
        </div>
      )
    } else {
      return null
    }
  }

}


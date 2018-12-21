import React, { Component } from 'react';

class ColorShowcase extends Component {
  render() {
		var style = {
			height: "10em",
			width: "10em",
			borderRadius: "50%",
			backgroundColor: this.props.colorObject.hex
	  };
    return (
			<div style={style}>
			</div>
    );
  }
}

export default ColorShowcase;

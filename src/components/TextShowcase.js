import React, { Component } from 'react';

class TextShowcase extends Component {
  render() {
		var style = {
			color: this.props.colorObject.hex,
			fontSize: "5em"
	  };
    return (
			<div style={style}>
				Aa
			</div>
    );
  }
}

export default TextShowcase;

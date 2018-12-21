import React, { Component } from 'react';

class ColorMetadata extends Component {
  render() {
		var style = {
			color: this.props.colorObject.hex
	  };
		var tagStyle ={
			backgroundColor: this.props.colorObject.hex
		}
    return (
			<div style={style}>
				<h3 className="title" style={style}>{this.props.colorObject.name}</h3>
				<div className="tags has-addons">
				  <span className="tag">Hex</span>
				  <span className="tag is-primary" style={tagStyle}>{this.props.colorObject.hex}</span>
				</div>
			</div>
    );
  }
}

export default ColorMetadata;

import React, { Component } from 'react';
import Color from './Color'

class ColorCategory extends Component {
  render() {
    return (
			<section className="section">
    		<div className="container">
				<h2 className="title">{this.props.name}</h2>
				<hr />
				{
					this.props.colorCategoryObject.map((object, i) => {
						return <Color colorObject={this.props.colorCategoryObject[i]} key={i} />
					})
				}
				</div>
			</section>
    );
  }
}

export default ColorCategory;

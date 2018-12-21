import React, { Component } from 'react';
import ColorCategory from './ColorCategory'

class Colors extends Component {
  render() {
    return (
			<div>
				{
					this.props.colorsObject.categories.map((object, i) => {
						return (
							<ColorCategory
								colorCategoryObject={
									this.props.colorsObject.data[this.props.colorsObject.categories[i].id]
								}
								name={this.props.colorsObject.categories[i].name}
								key={i}
							/>)
					})
				}
			</div>
    );
  }
}

export default Colors;

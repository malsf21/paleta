import React, { Component } from 'react';
import ColorMetadata from './ColorMetadata';
import ColorShowcase from './ColorShowcase';
import TextShowcase from './TextShowcase';

class Color extends Component {
  render() {
    return (
			<div className="columns">
        <div className="column">
          <ColorMetadata colorObject={this.props.colorObject}/>
        </div>
        <div className="column">
          <ColorShowcase colorObject={this.props.colorObject}/>
        </div>
        <div className="column">
          <TextShowcase colorObject={this.props.colorObject}/>
        </div>
			</div>
    );
  }
}

export default Color;

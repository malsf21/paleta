import React, { Component } from 'react';
import './App.css';
import data from './data.json';

import Colors from './components/Colors';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Colors colorsObject={data.colors} />
      </div>
    );
  }
}

export default App;

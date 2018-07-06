import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu'
class App extends Component {
  render() {
    return (
      <div>
        <Menu activeItem={'mainText'} /> 
      </div>
    );
  }
}

export default App;
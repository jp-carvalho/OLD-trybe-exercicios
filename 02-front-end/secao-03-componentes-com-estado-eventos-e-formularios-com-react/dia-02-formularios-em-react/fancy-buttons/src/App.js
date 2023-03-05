import React, { Component } from 'react'
import './App.css';

function handleClick() {
  console.log('click')
}

class App extends Component {
  render() {
    return (
      <button onClick={handleClick}>My Button</button>
    )
  }
}

export default App;

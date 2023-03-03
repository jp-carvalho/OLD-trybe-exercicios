import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)
  }

  handleClickOne() {
    console.log('"this do botão 1"', this);
  }

  handleClickTwo() {
    console.log('"this do botão 2"', this);
  }

  handleClickThree() {
    console.log('"this do botão 3"', this);
  }

  render(){
    return (
      <>
        <button onClick={this.handleClickOne}>Primeiro botão</button>
        <button onClick={this.handleClickTwo}>Segundo botão</button>
        <button onClick={this.handleClickThree}>terceiro botão</button>
      </>
      );
    
  }
}

export default App;

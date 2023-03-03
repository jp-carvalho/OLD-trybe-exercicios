import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)
  }

state = {
  clickOne: 0,
  clickTwo: 0,
  clickThree: 0,
}

//checa se o numero é par e adiciona a cor verde ou branca
//como não estamos utilizando um arquivo .css faremos inline dentro do return
getButtonColor(num) {
  return num % 2 === 0 ? 'green' : 'white';
}

handleClickOne(){
  const { clickOne } = this.state;
  this.setState((prevState) => ({
    clickOne: prevState.clickOne + 1,
  }), () => {
    console.log(`Botão 1 = ${this.getButtonColor(clickOne)}`);
  });
}

handleClickTwo(){
  const { clickTwo } = this.state;
  this.setState(({ clickTwo }) => ({
    clickTwo: clickTwo + 1,
  }), () => {
    console.log(`Botão 2 = ${this.getButtonColor(clickTwo)}`)
  });
}

handleClickThree(){
  const { clickThree } = this.state;
  this.setState(({ clickThree }) => ({
    clickThree: clickThree + 1,
  }), () => {
    console.log(`Botão 3 = ${this.getButtonColor(clickThree)}`);
  })
}

  render() {
    const { clickOne, clickTwo, clickThree } = this.state
    return (
      // {/* adiciona o style inline para pegar o retorno da funcao getButtonColor e adicionar como BG */}
      <>
        <button onClick={this.handleClickOne} style={ { backgroundColor: this.getButtonColor(clickOne)} }>{ clickOne }</button>
        <button onClick={this.handleClickTwo} style={ {backgroundColor: this.getButtonColor(clickTwo)} }>{ clickTwo }</button>
        <button onClick={this.handleClickThree} style={ { backgroundColor: this.getButtonColor(clickThree) } }>{ clickThree }</button>
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();

    this.state = {
      clicksOne: 0,
      clicksTwo: 0,
      clicksThree: 0,
    }
  }

  handleFirstBtn = () => {
    const { clicksOne } = this.state;
    this.setState((prevState) => ({
      clicksOne: prevState.clicksOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(clicksOne)}`);
    })
  }

  handleSecondBtn = () => {
    const { clicksTwo } = this.state; 
    this.setState((prevState) => ({
      clicksTwo: prevState.clicksTwo +1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(clicksTwo)}`);
    })
  }

  handleThirdBtn = () => {
    const { clicksThree } = this.state;
    this.setState((prevState) => ({
      clicksThree: prevState.clicksThree +1,
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(clicksThree)}`);
    })
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  // Porque funcionou, sem a => e sem o constructor? 
  handleClick() {
    console.log('teste');
  }

  render() {
    const { clicksOne, clicksTwo, clicksThree } = this.state;
    return (
      <div>
        {/* NÃO CONFUNDIR O CSS INLINE COM OS STATES */}
        <button onClick={ this.handleFirstBtn } style={ { backgroundColor: this.getButtonColor(clicksOne)} }>{ `Botão 1: ${clicksOne}` }</button>
        <button onClick={ this.handleSecondBtn } style={ { backgroundColor: this.getButtonColor(clicksTwo)} }>{ `Botão 2: ${clicksTwo}` }</button>
        <button onClick={ this.handleThirdBtn } style={ { backgroundColor: this.getButtonColor(clicksThree)} }>{ `Botão 3: ${clicksThree}` }</button>
        {/* duvida acima na linha 3 */}
        <button onClick={this.handleClick}>Erro</button>
      </div>

    );
  }
}

export default App;
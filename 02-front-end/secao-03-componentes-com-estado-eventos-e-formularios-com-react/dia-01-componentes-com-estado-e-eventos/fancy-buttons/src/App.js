import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super()

		this.state = {
			clickButtonOne: 0,
			clickButtonTwo: 0,
			clickButtonThree: 0,
		};

		this.handleClickOne = this.handleClickOne.bind(this)
		this.handleClickTwo = this.handleClickTwo.bind(this)
		this.handleClickThree = this.handleClickThree.bind(this)
	}

handleClickOne() {
	this.setState((prevState) => ({
		clickButtonOne: prevState.clickButtonOne +1,
	}))
}

// Nessa função estamos desestruturando o prevState
handleClickTwo() {
	this.setState(({ clickButtonTwo }) => ({
		clickButtonTwo: clickButtonTwo +1,
	}))
}

// Nessa função estamos desestruturando o prevState
handleClickThree() {
	this.setState(({ clickButtonThree }) => ({
		clickButtonThree: clickButtonThree +1,
	}))
}

render(){
	const { clickButtonOne, clickButtonTwo, clickButtonThree } = this.state
	return(
	<>
		<button onClick={this.handleClickOne}>{ clickButtonOne }</button>
		<button onClick={this.handleClickTwo}>{`Cliques botão 2: ${clickButtonTwo}`}</button>
		<button onClick={this.handleClickThree}>{`Valor Total 3: ${clickButtonThree}`}</button>
	</>
)}
}

export default App; 

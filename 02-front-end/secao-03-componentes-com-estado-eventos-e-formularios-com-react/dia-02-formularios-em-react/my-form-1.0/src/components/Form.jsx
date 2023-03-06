import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super()

    this.state ={
      email: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(event) {
  this.setState({
    email: event.target.value,
  })
}

  render() {
    const { email } = this.state;

    return(
      <form >
        <label htmlFor="name">
          Nome:
          <input type="text" name='name' id='name'/>
        </label>

        <label htmlFor="email">
          Email:
          <input type="email" name='email' id='email'onChange={ this.handleChange} value={ email }/>
        </label>

        <label htmlFor="age">
          Idade:
          <select name='age' id='age' defaultValue=''>
            <option value="">Selecione</option>
            <option value="adult">Maior que 18</option>
            <option value="underage">Menor que 18</option>
          </select>
        </label>

        <label htmlFor="anecdote">
          Anedota:
          <textarea name="anecdote" id="anecdote"></textarea>
        </label>


      </form>
    )
  }
}

export default Form;

import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super()

    this.state ={
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }

handleChange({ target }) {
  const { name } = target;
  const value = (target.type === 'checkbox') ? target.checked : target.value;

  this.setState({
    [name]: value,
  })
}

  render() {
    const { name, email, age, anecdote } = this.state;

    return(
      <form >
         <label htmlFor="name">
            Nome:
            <input
              id="name"
              name="name"
              type="text"
              onChange={ this.handleChange }
              value={ name }
            />
          </label>

        <label htmlFor="email">
          Email:
          <input 
            type="email" 
            name='email' 
            id='email'
            onChange={ this.handleChange} 
            value={ email }/>
        </label>

        <label htmlFor="age">
          Idade:
          <select 
            name='age' 
            id='age' 
            onChange={ this.handleChange } 
            value={ age }
          >
            <option value="">Selecione</option>
            <option value="adult">Maior que 18</option>
            <option value="underage">Menor que 18</option>
          </select>
        </label>

        <label htmlFor="terms">
          <input 
            type="checkbox" 
            id='terms' 
            name='terms'
          />
          Concordo com os termos
        </label>

        <label htmlFor="anecdote">
          Anedota:
          <textarea 
            name="anecdote" 
            id="anecdote"
            onChange={ this.handleChange }
            value={ anecdote }
          />
        </label>

        <input type="file" />


      </form>
    )
  }
}

export default Form;

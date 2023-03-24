import React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

it('Verifica se existe um campo de input chamado email', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toHaveProperty('type', 'email');
});

it('Verifica se existe um botão de Enviar', () => {
  render(<App />);
  const checkBtn = screen.getByTestId('id-send');
  expect(checkBtn).toBeInTheDocument();
  expect(checkBtn).toHaveProperty('type', 'button');
  expect(checkBtn).toHaveValue('Enviar')
})

it('Verifica se existem dois botões na tela', () => {
  render(<App />);
  const checkButtons = screen.getAllByRole('button');
  expect(checkButtons).toHaveLength(2);
})

it('Verifica se o botão e o campo email estão funcionando', async () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:')

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  await waitFor(() => {
    expect(inputEmail).toHaveValue('');
  })
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
})
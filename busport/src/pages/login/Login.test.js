import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('componente Login', () => {
  test('se renderiza o form', () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('E-mail');
    const senhaInput = screen.getByPlaceholderText('Senha');
    const entrarButton = screen.getByText('Entrar');

    expect(emailInput).toBeInTheDocument();
    expect(senhaInput).toBeInTheDocument();
    expect(entrarButton).toBeInTheDocument();
  });

  test('se o botão "Entrar" direciona para /home', () => {
    render(<Login />);
    const entrarButton = screen.getByText('Entrar');
    userEvent.click(entrarButton);
    expect(window.location.pathname).toBe('/home');
  });

  test('se o link "Esqueceu sua senha?" direciona para /senha', () => {
    render(<Login />);
    const esqueceuSenhaLink = screen.getByText('Esqueceu sua senha?');
    userEvent.click(esqueceuSenhaLink);
    expect(window.location.pathname).toBe('/senha');
  });

  test('se o link "Cadastre-se" direciona para /cadastro', () => {
    render(<Login />);
    const cadastreseLink = screen.getByText('Cadastre-se');
    userEvent.click(cadastreseLink);
    expect(window.location.pathname).toBe('/cadastro');
  });
});

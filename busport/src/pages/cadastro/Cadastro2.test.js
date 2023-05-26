import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cadastro2, { Cadastrado } from './Cadastro2';

describe('componente Cadastro2', () => {
  test('se renderiza o input nome', () => {
    render(<Cadastro2 />);
    const nomeInput = screen.getByPlaceholderText('Nome completo');
    expect(nomeInput).toBeInTheDocument();
  });

  test('se renderiza o input CPF', () => {
    render(<Cadastro2 />);
    const cpfInput = screen.getByPlaceholderText('CPF');
    expect(cpfInput).toBeInTheDocument();
  });

  test('se renderiza o input dataNasc', () => {
    render(<Cadastro2 />);
    const dataNascInput = screen.getByPlaceholderText('Data de Nascimento');
    expect(dataNascInput).toBeInTheDocument();
  });

  test('se renderiza o input numcCartao', () => {
    render(<Cadastro2 />);
    const numCartaoInput = screen.getByPlaceholderText('Número do cartão');
    expect(numCartaoInput).toBeInTheDocument();
  });

  test('se renderiza o input tipoCartao', () => {
    render(<Cadastro2 />);
    const tipoCartaoInput = screen.getByPlaceholderText('Tipo do cartão');
    expect(tipoCartaoInput).toBeInTheDocument();
  });

  test('se o botão "Enviar" aciona a função Cadastrado', () => {
    render(<Cadastro2 />);
    const enviarButton = screen.getByRole('button', { name: 'Enviar' });
    window.alert = jest.fn();
    fireEvent.click(enviarButton);
    expect(window.alert).toHaveBeenCalledWith('Cadastro realizado com sucesso!');
  });
});

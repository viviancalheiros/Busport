import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cadastro2, { Cadastrado } from './Cadastro2';

describe('Componente Cadastro2', () => {
    test('Renderiza input nome', () => {
        render(<Cadastro2 />);
        const nomeInput = screen.getByPlaceholderText('Nome completo');
        expect(nomeInput).toBeInTheDocument();
    });

    test('Renderiza input cpf', () => {
        render(<Cadastro2 />);
        const cpfInput = screen.getByPlaceholderText('CPF');
        expect(cpfInput).toBeInTheDocument();
    });

    test('Renderiza input datanasc', () => {
        render(<Cadastro2 />);
        const dataNascInput = screen.getByPlaceholderText('Data de Nascimento');
        expect(dataNascInput).toBeInTheDocument();
    });

    test('Renderiza input numcartao', () => {
        render(<Cadastro2 />);
        const numCartaoInput = screen.getByPlaceholderText('Número do cartão');
        expect(numCartaoInput).toBeInTheDocument();
    });

    test('Renderiza input tipocartao', () => {
        render(<Cadastro2 />);
        const tipoCartaoInput = screen.getByPlaceholderText('Tipo do cartão');
        expect(tipoCartaoInput).toBeInTheDocument();
    });

    test('Botão "Enviar" faz a função "Cadastrado" funcionar', () => {
        render(<Cadastro2 />);
        const enviarButton = screen.getByRole('button', { name: 'Enviar' });
        window.alert = jest.fn();
        fireEvent.click(enviarButton);
        expect(window.alert).toHaveBeenCalledWith('Cadastro realizado com sucesso!');
    });
});

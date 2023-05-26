import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cadastro from './Cadastro';

describe('componente Cadastro', () => {
    test('se clicando no botão "Próximo" ele direciona para /cadastro2', () => {
        const { getByText } = render(<Cadastro />);
        const button = getByText('Próximo');
        fireEvent.click(button);
        expect(window.location.pathname).toBe('/cadastro2');
    });
});

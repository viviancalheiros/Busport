import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Editar from './Editar';

describe('componente Editar', () => {
    test('se clicando no botão "Atualizar" a função "atualizado funciona"', () => {
        const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const { getByText } = render(<Editar />);
        const button = getByText('Atualizar');
        fireEvent.click(button);
        expect(mockAlert).toHaveBeenCalledWith('Dados atualizados!');
        mockAlert.mockRestore();
    });
});

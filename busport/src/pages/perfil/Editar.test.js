import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Editar from './Editar';

describe('Componente Editar', () => {
    test('Botão "Atualizar" roda a função "Atualizado"', () => {
        const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const { getByText } = render(<Editar />);
        const button = getByText('Atualizar');
        fireEvent.click(button);
        expect(mockAlert).toHaveBeenCalledWith('Dados atualizados!');
        mockAlert.mockRestore();
    });
});

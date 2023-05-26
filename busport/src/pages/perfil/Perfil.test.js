import React from 'react';
import { render } from '@testing-library/react';
import Perfil from './Perfil';

describe('componente Perfil', () => {
    test('se renderiza a página e os elementos', () => {
        const { getByText, getByPlaceholderText } = render(<Perfil />);
        
        getByText('Olá, Mário');
        getByPlaceholderText('Mário Andrade Ferreira da Silva');
        getByPlaceholderText('000.000.000-00');
        getByPlaceholderText('15/08/1987');
        getByPlaceholderText('00.00.00000000-0');
        getByText('Cidadão');
        getByText('Escolar');
        getByText('Vale-Transporte');
        getByText('Sênior');
        getByText('Especial');
        getByText('Especial com Acompanhante');
        getByText('Empresarial');
        getByText('Correios');
        getByText('Órgão Gestor');
        getByText('Rodoviário');
    });
});

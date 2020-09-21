import React from 'react';
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory'
import '@testing-library/jest-dom'


describe('Pruebas en el componente <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    });


    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value: value } });
    });

    test('no debe de postear la informacion', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el set categories y limpiar la caja de texto', () => {
        let input = wrapper.find('input');
        const value = 'Goku';
        input.simulate('change', { target: { value: value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        expect(input.prop('value')).toBe('');
    });
});
import React from 'react';
import {shallow} from 'enzyme';
import { GifGrid } from '../../components/GifGrid'
import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid/>', () => {

    const category = 'Goku';

    test('debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow( <GifGrid category={category}/> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://algo.com.gif.gif',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow( <GifGrid category={category}/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);

    });
});
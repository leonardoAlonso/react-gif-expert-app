import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import '@testing-library/jest-dom';

describe('Debe mostrar correctamente el componente <GifGridItem>', () => {
    const title = 'Soy un titulo';
    const url = 'https://localhost/algo/image.jpg';

    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('GifGridItem default', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('Debe tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener la imagen igual a los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const classes = div.prop('className');
        expect(classes.includes('animate__fadeIn')).toBe(true);
    })
})
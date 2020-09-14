import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import '@testing-library/jest-dom';

describe('Debe mostrar correctamente el componente <GifGridItem>', () => {
    // let wrapper = shallow(<GifGridItem/>)

    // beforeEach(() =>{
    //     wrapper = shallow(<GifGridItem/>)
    // })

    const title = 'Soy un titulo';
    const url = 'https://localhost/algo/image.jpg';

    test('GifGridItem default', () => {
        const wrapper = shallow( <GifGridItem title={title} url={url}/> );
        expect(wrapper).toMatchSnapshot();
    })
})
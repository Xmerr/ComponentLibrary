import React from 'react';
import { shallow } from '@helpers/enzyme';
import { Button } from '../Button';

describe('Button', () => {
    it('renders with the correct child text', () => {
        const text = 'Button Text';
        const wrapper = shallow(<Button>{text}</Button>);
        expect(wrapper.prop('children')).toBe(text);
    });

    it('triggers onclick correctly', () => {
        const text = 'Button Text';
        let clicked = false;
        const onClick = () => {
            clicked = true;
        };

        const wrapper = shallow(<Button onClick={onClick}>{text}</Button>);
        wrapper.simulate('click');

        expect(clicked).toBeTruthy();
    });
});

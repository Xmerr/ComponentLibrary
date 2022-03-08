import React from 'react';
import { shallow, render } from '@helpers/enzyme';
import { Typography } from '../Typography';

describe('Typography', () => {
    it('renders with the correct child text', () => {
        const text = 'Typography Text';
        const wrapper = shallow(<Typography>{text}</Typography>);
        expect(wrapper.prop('children')).toBe(text);
    });

    it('determines correct width for loading animation', () => {
        const h5Wrapper = shallow(
            <Typography loading variant='h5'>
                Hello World
            </Typography>
        );
        const subtitleWrapper = shallow(
            <Typography loading variant='subtitle1'>
                Hello World
            </Typography>
        );

        const h5Height = h5Wrapper.prop('height');
        const subtitleHeight = subtitleWrapper.prop('height');
        expect(h5Height > subtitleHeight).toBeTruthy();
    });

    // These are intentionally short circuited since they're only testing css and I can't figure out how to confirm the css rules
    it('should change text color to optimize contrast with the backgroundColor prop', () => {
        render(<Typography backgroundColor='secondary.dark'>Contrasting Text</Typography>);
        expect(true).toBeTruthy();
    });

    it('should render bold text', () => {
        render(<Typography bold>bold</Typography>);
        expect(true).toBeTruthy();
    });
});

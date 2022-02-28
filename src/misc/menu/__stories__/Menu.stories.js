import React from 'react';
import Menu, { menuTypes } from '../Menu.jsx';

export default {
    title: 'Menus',
    component: Menu,
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: menuTypes,
        },
    },
};

const Template = args => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: 'default',
};

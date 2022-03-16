import React from 'react';
import { Drawer as DrawerComp } from '..';

export default {
    title: 'Atoms',
    component: DrawerComp,
    args: {
        anchor: 'left',
        children: <div>Hello World</div>,
        open: false,
    },
    argTypes: {
        anchor: {
            description: 'Where the drawer comes from',
            control: {
                type: 'radio',
                options: ['left', 'right', 'top', 'bottom'],
            },
        },
        chilren: {
            description: "What's rendered in the drawer",
        },
        open: {
            description: 'If the drawer is open',
        },
        onClose: {
            action: 'onClose ',
        },
    },
};

const Template = args => <DrawerComp {...args} />;

export const Drawer = Template.bind({});

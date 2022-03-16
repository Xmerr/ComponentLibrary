import React from 'react';
import { DrawerMenu as DrawerMenuComp } from '../DrawerMenu';
import MailIcon from '@mui/icons-material/Mail';

export default {
    title: 'Molecules',
    component: DrawerMenuComp,
    args: {
        open: false,
        options: [
            {
                name: 'First Option',
                icon: <MailIcon />,
                onClick: () => alert('Clicked First Option'),
            },
            {
                name: 'Second Option',
                onClick: () => alert('Clicked Second Option'),
            },
        ],
    },
    argTypes: {
        open: {
            description: 'If the drawer is open or not',
        },
        options: {
            description: 'Options to render inside the drawer',
        },
        onClose: {
            action: 'onClose ',
        },
    },
};

const Template = args => <DrawerMenuComp {...args} />;

export const DrawerMenu = Template.bind({});

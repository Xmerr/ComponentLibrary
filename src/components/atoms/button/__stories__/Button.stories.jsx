import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Button as ButtonComp, variants } from '../';
import { colors, sizes } from '@helpers/enums';

export default {
    title: 'Atoms/Button',
    component: ButtonComp,
    args: {
        children: 'Button',
        color: 'primary',
        size: 'medium',
        variant: 'contained',
        disabled: false,
        type: 'button',
    },
    argTypes: {
        children: {
            description:
                'The content of the button, expected to be a string but could be another node',
        },
        color: {
            description:
                'Color and mood of the button, options are set by the mui theme but the list can be easily found here',
            options: colors,
            table: {
                defaultValues: { summary: 'primary' },
            },
        },
        size: {
            description: 'Size of the button',
            options: sizes,
        },
        type: {
            description: 'Button type, used if the button is inside a form',
        },
        variant: {
            description: 'Type of button',
            options: variants,
            table: {
                defaultValues: { summary: 'contained' },
            },
        },
        onClick: {
            description: 'What happens when the button is clicked',
            action: 'Clicked',
        },
    },
};

const Template = args => <ButtonComp {...args} />;

export const Button = Template.bind({});

export const IconButton = Template.bind({});
IconButton.args = {
    icon: <EditIcon />,
};

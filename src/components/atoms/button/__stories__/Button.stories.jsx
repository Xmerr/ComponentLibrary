import React from 'react';
import { Button as ButtonComp, variants } from '../';
import { colors, sizes } from '@helpers/enums';

export default {
    title: 'Atoms',
    component: ButtonComp,
    args: {
        children: 'Button',
        color: 'primary',
        size: 'medium',
        variant: 'contained',
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

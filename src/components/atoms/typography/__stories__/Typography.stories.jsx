import React from 'react';
import { Typography, variants } from '../';
import { alignments } from '@helpers/enums';

export default {
    title: 'Atoms/Typography',
    component: Typography,
    args: {
        align: 'inherit',
        children: 'Example Text',
        variant: 'body1',
        paragraph: false,
        loading: false,
        backgroundColor: null,
        bold: false,
    },
    argTypes: {
        children: {
            description: 'Text to be rendered',
        },
        variant: {
            description: 'What style this text should be rendered',
            options: variants,
        },
        align: {
            description: 'Set the text-align on the component',
            options: alignments,
        },
        paragraph: {
            description: 'If true, the element will be a paragraph element',
        },
        backgroundColor: {
            description:
                'background color of the text - this is used to determine text color by finding the best contrast',
            control: {
                type: 'color',
            },
        },
        bold: {
            description: 'If the text should be bolded or not',
        },
    },
};

const Template = args => <Typography {...args} />;

export const Default = Template.bind({});

import React from 'react';
import { Input as InputComp, variants } from '../';
import { colors, sizes } from '@helpers/enums';

export default {
    title: 'Atoms',
    component: InputComp,
    args: {
        label: 'Label',
        variant: 'standard',
        color: 'primary',
        size: 'medium',
        placeholder: 'Placeholder',
        helperText: undefined,
        multiline: false,
        disabled: false,
        error: false,
        fullWidth: false,
        defaultValue: undefined,
        value: undefined,
        required: false,
        name: 'Example Input',
    },
    argTypes: {
        color: {
            description: 'What color to use during focus',
            options: colors,
        },
        size: {
            description: 'How large the input should be',
            options: sizes,
        },
        variant: {
            description: 'Style of the input',
            options: variants,
        },
        placeholder: {
            desciption: 'Text to display when the input is empty',
        },
        defaultValue: {
            description: 'Value the input should have without any user input',
            control: {
                type: 'text',
            },
        },
        value: {
            description: 'Value the input currently has (controled input)',
            control: {
                type: 'text',
            },
        },
        onBlur: {
            action: 'onBlur ',
        },
        onChange: {
            action: 'onChange ',
        },
    },
};

const Template = args => <InputComp {...args} />;

export const Input = Template.bind({});

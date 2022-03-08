import React from 'react';
import { Dialog as DialogComp } from '..';

export default {
    title: 'Atoms',
    component: DialogComp,
    args: {
        title: 'Dialog Title',
        text: 'Dialog Text',
        open: false,
        fullScreen: false,
    },
    argTypes: {
        title: {
            description: "What's on top of the dialog",
            control: {
                type: 'text',
            },
        },
        text: {
            description: "What's inside the dialog",
            control: {
                type: 'text',
            },
        },
        open: {
            description: 'If the dialog is open or not',
        },
        fullScreen: {
            description: 'If the modal should take up the entire screen or not',
        },
        onClose: {
            action: 'onClose ',
        },
    },
};

const Template = args => <DialogComp {...args} />;

export const Dialog = Template.bind({});

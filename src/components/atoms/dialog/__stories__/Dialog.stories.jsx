import React from 'react';
import { Dialog as DialogComp } from '..';

export default {
    title: 'Atoms',
    component: DialogComp,
    args: {
        title: 'Dialog Title',
        subtitle: 'subtitle',
        text: 'Dialog Text',
        open: false,
        fullWidth: true,
        fullScreen: false,
    },
    argTypes: {
        title: {
            description: "What's on top of the dialog",
            control: {
                type: 'text',
            },
        },
        subtitle: {
            description: "What's under the title",
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
        fullWidth: {
            description: 'If the modal should get as large as possible (not fullScreen)',
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

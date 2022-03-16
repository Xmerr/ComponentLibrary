import React from 'react';
import { DeleteDialog as DeleteDialogComp } from '../DeleteDialog';

export default {
    title: 'Molecules',
    component: DeleteDialogComp,
    args: {
        open: false,
        fullScreen: false,
    },
    argTypes: {
        open: {
            description: 'If the dialog is open or not',
        },
        fullScreen: {
            description: 'If the modal should take up the entire screen or not',
        },
        onCancel: {
            action: 'onCancel ',
        },
        onConfirm: {
            action: 'onConfirm ',
        },
    },
};

const Template = args => <DeleteDialogComp {...args} />;

export const DeleteDialog = Template.bind({});

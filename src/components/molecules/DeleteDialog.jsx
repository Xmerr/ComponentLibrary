import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog } from '@atoms';

export const DeleteDialog = props => {
    const { fullScreen, onCancel, onConfirm, open } = props;

    const title = 'Are you sure?';
    const text = `Once deleted, this cannot be undone.`;
    const buttons = [
        <Button color='warning' onClick={onCancel}>
            Cancel
        </Button>,
        <Button color='error' onClick={onConfirm}>
            Confirm
        </Button>,
    ];

    return (
        <Dialog
            buttons={buttons}
            fullScreen={fullScreen}
            onClose={onCancel}
            open={open}
            text={text}
            title={title}
        />
    );
};

DeleteDialog.propTypes = {
    fullScreen: PropTypes.bool,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef((props, ref) => <Slide direction='up' ref={ref} {...props} />);

export const Dialog = props => {
    const { buttons, fullScreen, onClose, open, text, title } = props;

    const dialogProps = {
        fullScreen,
        onClose,
        open,
    };

    if (fullScreen) {
        dialogProps.TransitionComponent = Transition;
    }

    const hasText = !!text || !!text?.length;

    return (
        <MuiDialog {...dialogProps}>
            {!!title && <DialogTitle>{title}</DialogTitle>}
            {hasText && (
                <DialogContent>
                    <DialogContentText>{text}</DialogContentText>
                </DialogContent>
            )}
            {!!buttons.length && <DialogActions>{buttons.map(button => button)}</DialogActions>}
        </MuiDialog>
    );
};

Dialog.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.element),
    fullScreen: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    text: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.oneOf([PropTypes.node, PropTypes.string])),
        PropTypes.node,
        PropTypes.string,
    ]),
    title: PropTypes.string,
};

Dialog.defaultProps = {
    buttons: [],
};

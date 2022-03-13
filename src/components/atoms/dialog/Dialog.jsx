import React from 'react';
import PropTypes from 'prop-types';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Typography } from '@atoms/typography';
import styles from './dialog.module.scss';

const Transition = React.forwardRef((props, ref) => <Slide direction='up' ref={ref} {...props} />);

export const Dialog = props => {
    const { buttons, fullScreen, fullWidth, onClose, onSubmit, open, subtitle, text, title } =
        props;
    const hasText = !!text || !!text?.length;

    const dialogProps = {
        fullScreen,
        fullWidth,
        onClose,
        open,
    };

    if (fullScreen) {
        dialogProps.TransitionComponent = Transition;
    }

    const renderContent = () => {
        if (!hasText) {
            return null;
        }

        if (typeof text === 'string') {
            return (
                <DialogContent key='body'>
                    <DialogContentText>{text}</DialogContentText>
                </DialogContent>
            );
        } else if (Array.isArray(text)) {
            return text.map((row, i) => (
                <DialogContent key={i}>
                    {typeof row === 'string' ? <DialogContentText>{row}</DialogContentText> : row}
                </DialogContent>
            ));
        }
    };

    const renderButtons = () => {
        if (!!buttons.length) {
            return <DialogActions>{buttons.map(button => button)}</DialogActions>;
        }
    };

    const renderBody = () => {
        if (onSubmit) {
            return (
                <form onSubmit={onSubmit}>
                    {renderContent()}
                    {renderButtons()}
                </form>
            );
        }

        return (
            <>
                {renderContent()}
                {renderButtons()}
            </>
        );
    };

    return (
        <MuiDialog {...dialogProps}>
            {!!title && <DialogTitle>{title}</DialogTitle>}
            {!!subtitle && (
                <DialogTitle className={styles.subtitle}>
                    <Typography variant='subtitle1'>{subtitle}</Typography>
                </DialogTitle>
            )}
            {renderBody()}
        </MuiDialog>
    );
};

Dialog.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.element),
    fullScreen: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
    open: PropTypes.bool.isRequired,
    subtitle: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    text: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.oneOf([PropTypes.node, PropTypes.string])),
        PropTypes.node,
        PropTypes.string,
    ]),
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

Dialog.defaultProps = {
    buttons: [],
};

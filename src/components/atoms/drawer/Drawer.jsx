import React from 'react';
import PropTypes from 'prop-types';
import MuiDrawer from '@mui/material/Drawer';

export const Drawer = props => {
    const { anchor, children, onClose, open } = props;
    return (
        <MuiDrawer anchor={anchor} onClose={onClose} open={open}>
            {children}
        </MuiDrawer>
    );
};

Drawer.propTypes = {
    anchor: PropTypes.oneOf(['bottom', 'left', 'right', 'top']),
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

Drawer.defaultProps = {
    anchor: 'left',
};

import React from 'react';
import PropTypes from 'prop-types';
import MuiIconButton from '@mui/material/IconButton';
import MuiButton from '@mui/material/Button';
import { colors, sizes } from '@helpers/enums';

export const variants = ['contained', 'outlined', 'text'];

export const Button = props => {
    const { children, color, disabled, icon, onClick, size, type, variant } = props;

    const buttonProps = {
        color,
        disabled,
        onClick,
        size,
        type,
    };

    if (icon) {
        return <MuiIconButton {...buttonProps}>{icon}</MuiIconButton>;
    }

    return <MuiButton {...buttonProps} children={children} variant={variant} />;
};

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    color: PropTypes.oneOf(colors),
    disabled: PropTypes.bool,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(sizes),
    type: PropTypes.string,
    variant: PropTypes.oneOf(variants),
};

Button.defaultProps = {
    color: 'primary',
    type: 'button',
    variant: 'contained',
};

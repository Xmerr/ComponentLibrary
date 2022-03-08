import React from 'react';
import PropTypes from 'prop-types';
import { default as MuiButton } from '@mui/material/Button';
import { colors, sizes } from '@helpers/enums';

export const variants = ['contained', 'outlined', 'text'];

export const Button = props => {
    const { children, color, onClick, size, variant } = props;

    return (
        <MuiButton
            children={children}
            color={color}
            onClick={onClick}
            size={size}
            variant={variant}
        />
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    color: PropTypes.oneOf(colors),
    onClick: PropTypes.func,
    size: PropTypes.oneOf(sizes),
    variant: PropTypes.oneOf(variants),
};

Button.defaultProps = {
    color: 'primary',
    variant: 'contained',
};

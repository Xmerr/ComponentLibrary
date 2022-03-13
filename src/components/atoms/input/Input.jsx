import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { colors, sizes } from '@helpers/enums';

export const variants = ['filled', 'outlined', 'standard'];

export const Input = React.forwardRef((props, ref) => {
    const {
        color,
        defaultValue,
        disabled,
        error,
        fullWidth,
        helperText,
        label,
        multiline,
        name,
        onBlur,
        onChange,
        placeholder,
        required,
        size,
        value,
        variant,
    } = props;

    return (
        <TextField
            color={color}
            defaultValue={defaultValue}
            disabled={disabled}
            error={error}
            fullWidth={fullWidth}
            helperText={helperText}
            label={label}
            multiline={multiline}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
            required={required}
            size={size}
            value={value}
            variant={variant}
        />
    );
});

Input.propTypes = {
    color: PropTypes.oneOf(colors),
    defaultValue: PropTypes.any,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    fullWidth: PropTypes.bool,
    label: PropTypes.string,
    multiline: PropTypes.bool,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    size: PropTypes.oneOf(sizes),
    value: PropTypes.any,
    variant: PropTypes.oneOf(variants),
};

Input.defaultProps = {
    color: 'primary',
    variant: 'standard',
};

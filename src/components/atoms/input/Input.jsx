import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { colors, sizes } from '@helpers/enums';

export const variants = ['filled', 'outlined', 'standard'];
const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const Input = React.forwardRef((props, ref) => {
    const {
        color,
        defaultValue,
        disabled,
        error,
        formSettings,
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
        type,
        value,
        variant,
    } = props;

    const getFormSettings = () => {
        if (!formSettings) {
            return {};
        }

        const {
            formState: { errors },
            register,
        } = formSettings;

        const settings = {
            required,
        };

        switch (type) {
            case 'email':
                settings.pattern = {
                    value: emailRegex,
                    message: 'Invalid Email Address',
                };
                break;
        }

        return {
            ...register(name, settings),
            error: !!errors[name],
            helperText: errors[name]?.message,
        };
    };

    const getType = () => {
        if (!type) {
            return;
        }

        switch (type) {
            case 'email':
                return 'text';

            default:
                return type;
        }
    };

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
            type={getType()}
            value={value}
            variant={variant}
            {...getFormSettings()}
        />
    );
});

Input.propTypes = {
    color: PropTypes.oneOf(colors),
    defaultValue: PropTypes.any,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    fullWidth: PropTypes.bool,
    helperText: PropTypes.string,
    label: PropTypes.string,
    multiline: PropTypes.bool,
    formSettings: PropTypes.shape({
        register: PropTypes.func.isRequired,
        formState: PropTypes.shape({
            errors: PropTypes.object.isRequired,
        }).isRequired,
    }),
    name: PropTypes.string,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    size: PropTypes.oneOf(sizes),
    type: PropTypes.oneOf(['email', 'number', 'password', 'text']),
    value: PropTypes.any,
    variant: PropTypes.oneOf(variants),
};

Input.defaultProps = {
    color: 'primary',
    variant: 'standard',
};

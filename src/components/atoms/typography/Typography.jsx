import React from 'react';
import PropTypes from 'prop-types';
import MuiTypography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { alignments } from '@helpers/enums';

export const variants = [
    'body1',
    'body2',
    'button',
    'caption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'inherit',
    'overline',
    'subtitle1',
    'subtitle2',
];

export const Typography = props => {
    const { align, backgroundColor, bold, children, loading, paragraph, variant } = props;

    if (loading) {
        let height = 32;
        let width = '10%';

        switch (variant) {
            case 'h5':
            case 'h6':
                height = 32;
                width = '10%';
                break;

            case 'subtitle1':
                height = 28;
                width = '40%';
        }

        return <Skeleton variant='text' width={width} height={height} />;
    }

    const determineSx = theme => {
        const sx = {};

        if (backgroundColor) {
            const splitColor = backgroundColor.split('.');
            let color = theme.palette;
            splitColor.forEach(key => {
                color = color[key];
            });
            sx.color = theme.palette.getContrastText(color);
        }

        if (bold) {
            sx.fontWeight = 'bold';
        }

        return sx;
    };

    return (
        <MuiTypography
            align={align}
            children={children}
            paragraph={paragraph}
            variant={variant}
            sx={determineSx}
        />
    );
};

Typography.propTypes = {
    align: PropTypes.oneOf(alignments),
    backgroundColor: PropTypes.string,
    bold: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    loading: PropTypes.bool,
    paragraph: PropTypes.bool,
    variant: PropTypes.oneOf(variants),
};

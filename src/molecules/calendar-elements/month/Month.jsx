import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { days, times } from '../defaultEnums';
import styles from '../calendar-elements.module.scss';

export const Month = props => {
    return <Box className={styles.month}></Box>;
};

Month.propTypes = {
    times: PropTypes.arrayOf(
        PropTypes.shape({
            full: PropTypes.string.isRequired,
            short: PropTypes.string.isRequired,
        })
    ),
    days: PropTypes.arrayOf(
        PropTypes.shape({
            full: PropTypes.string.isRequired,
            short: PropTypes.string.isRequired,
        })
    ),
};
Month.defaultProps = {
    times,
    days,
};

export default Month;

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import styles from './calendar-elements.module.scss';

export const Week = props => {
    return <Box className={styles.week}></Box>;
};

Week.propTypes = {};

export default Week;

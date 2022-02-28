import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { times } from './defaultEnums';
import { Typography } from '@atoms';
import styles from './calendar-elements.module.scss';

export const Event = props => {
    const { allDay, start, title, times } = props;

    const sx = {
        backgroundColor: 'secondary.dark',
    };

    return (
        <Box className={styles.event} sx={allDay && sx}>
            {!allDay && (
                <Box className={styles.shortDesc}>
                    <Box className={styles.dot} sx={sx} />
                    {times.find(time => time.full === start)?.short}
                </Box>
            )}
            <Typography backgroundColor={allDay ? sx.backgroundColor : undefined} bold>
                {title}
            </Typography>
        </Box>
    );
};

Event.propTypes = {
    allDay: PropTypes.bool,
    start: PropTypes.string,
    times: PropTypes.arrayOf(
        PropTypes.shape({
            full: PropTypes.string.isRequired,
            short: PropTypes.string.isRequired,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
};

Event.defaultProps = { times };

export default Event;

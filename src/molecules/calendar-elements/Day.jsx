import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Typography } from '@atoms';
import Event from './Event';
import { sortEvents } from './helpers';
import { times } from './defaultEnums';
import styles from './calendar-elements.module.scss';
const { times: _, ...eventProps } = Event.propTypes;

export const Day = props => {
    const { events, past, times, title, today } = props;

    const classNames = [styles.day];
    if (past) {
        classNames.push(styles.past);
    }

    return (
        <Box className={classNames.join(' ')}>
            <Box className={styles.titleBlock} sx={{ backgroundColor: today && 'primary.dark' }}>
                <Typography
                    align='center'
                    backgroundColor={today ? 'primary.dark' : undefined}
                    variant='subtitle1'
                >
                    {title}
                </Typography>
            </Box>
            {sortEvents(events).map(event => (
                <Event key={event.id} times={times} {...event} />
            ))}
        </Box>
    );
};

Day.propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape(eventProps)).isRequired,
    past: PropTypes.bool,
    times: PropTypes.arrayOf(
        PropTypes.shape({
            full: PropTypes.string.isRequired,
            short: PropTypes.string.isRequired,
        })
    ),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    today: PropTypes.bool,
};

Day.defaultProps = { times };

export default Day;

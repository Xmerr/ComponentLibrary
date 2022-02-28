import React from 'react';
import { times } from '../defaultEnums';
import { Day as DayComp } from '../Day';

export default {
    title: 'Molecules/Calendar-Elements',
    component: DayComp,
    args: {
        title: 25,
        today: false,
        past: false,
        events: [
            {
                id: 1,
                title: 'Thing that happens at Dusk',
                start: 'Dusk',
            },
            {
                id: 2,
                title: 'All Day Thing',
                allDay: true,
            },
            {
                id: 3,
                title: 'Thing that happens at Dawn',
                start: 'Dawn',
            },
            {
                id: 4,
                title: 'All Day Thing 2',
                allDay: true,
            },
        ],
        times,
    },
    argTypes: {
        title: {
            description: 'Top section of the day',
        },
        today: {
            description: 'If this is the current day',
        },
        past: {
            description: 'If this day has already passed',
        },
        events: {
            description: 'Events on this day',
        },
        times: {
            description: 'An array of times (with a full and short name)',
        },
    },
};

const Template = args => <DayComp {...args} />;

export const Day = Template.bind({});

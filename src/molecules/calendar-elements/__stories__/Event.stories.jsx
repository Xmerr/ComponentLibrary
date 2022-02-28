import React from 'react';
import { times } from '../defaultEnums';
import { Event as EventComp } from '../Event';

export default {
    title: 'Molecules/Calendar-Elements',
    component: EventComp,
    args: {
        title: 'Meeting',
        allDay: true,
        start: '',
        times,
    },
    argTypes: {
        title: {
            description: 'Name of the event',
        },
        allDay: {
            description: 'If this event is active all day',
        },
        start: {
            description: 'When in the day this happens. Only works if "All Day" is false',
            options: times.map(time => time.full),
            control: {
                type: 'select',
            },
        },
    },
};

const Template = args => <EventComp {...args} />;

export const Event = Template.bind({});

import React from 'react';
import { days, times } from '../defaultEnums';
import { Month as MonthComp } from '../month/Month';

export default {
    title: 'Molecules/Calendar-Elements',
    component: MonthComp,
    args: {
        times,
        days,
    },
    argTypes: {
        times: {
            description: 'An array of times (with a full and short name)',
        },
        days: {
            description: 'An array of days (with a full and short name)',
        },
    },
};

const Template = args => <MonthComp {...args} />;

export const Month = Template.bind({});

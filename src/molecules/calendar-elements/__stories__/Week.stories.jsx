import React from 'react';
import { Week as WeekComp } from '../Week';

export default {
    title: 'Molecules/Calendar-Elements',
    component: WeekComp,
    args: {},
    argTypes: {},
};

const Template = args => <WeekComp {...args} />;

export const Week = Template.bind({});

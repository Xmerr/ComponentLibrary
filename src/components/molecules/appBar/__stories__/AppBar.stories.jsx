import React from 'react';
import { AppBar as AppBarComp } from '../AppBar';

export default {
    title: 'Molecules',
    component: AppBarComp,
    args: {
        title: 'Example text',
        leftNodes: ['Left Node 1', <div>A div</div>],
        rightNodes: ['Right Node 1', <div>Another Div</div>],
    },
    argTypes: {
        onMenuClick: {
            action: 'onMenuClick ',
        },
    },
};

const Template = args => <AppBarComp {...args} />;

export const AppBar = Template.bind({});

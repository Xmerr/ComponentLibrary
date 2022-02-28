import Component from '../AddMenu';

export default {
    title: 'Menus',
    component: Component,
    argTypes: {
        backgroundColor: {
            control: { type: 'color' },
        },
    },
};

const Template = args => (
    <div style={{ margin: '100px' }}>
        <Component {...args} />
    </div>
);

export const AddMenu = Template.bind({});
AddMenu.args = {
    backgroundColor: '#10b6c3',
};

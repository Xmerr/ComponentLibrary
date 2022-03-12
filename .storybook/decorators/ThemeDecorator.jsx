import Themer from '@helpers/Themer';

export const ThemeDecorator = Story => (
    <Themer>
        <Story />
    </Themer>
);

export default ThemeDecorator;

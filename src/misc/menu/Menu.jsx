import { AddMenu } from './addMenu/AddMenu';

export const menuTypes = ['add'];

export const Menu = props => {
    const { type, ...rest } = props;

    switch (type) {
        case 'add':
            return <AddMenu {...rest} />;

        default:
            return <>Unknown Menu Type: {type}</>;
    }
};

Menu.defaultProps = {
    type: 'add',
};

export default Menu;

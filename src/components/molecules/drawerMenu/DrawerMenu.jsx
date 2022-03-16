import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Drawer } from '@atoms';

export const DrawerMenu = props => {
    const { onClose, open, options } = props;

    const optionClick = action => () => {
        action();
        onClose();
    };

    const renderOption = ({ icon, name, onClick }) => {
        const iconNode = !!icon && <ListItemIcon>{icon}</ListItemIcon>;

        return (
            <ListItem button key={name} onClick={optionClick(onClick)}>
                {iconNode}
                <ListItemText primary={name} />
            </ListItem>
        );
    };

    return (
        <Drawer open={open} onClose={onClose}>
            <Box>
                <List>{options.map(renderOption)}</List>
            </Box>
        </Drawer>
    );
};

DrawerMenu.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.node,
            name: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired,
        })
    ).isRequired,
};

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography, Button } from '@atoms';
import styles from './appBar.module.scss';

export const AppBar = props => {
    const { leftNodes, onMenuClick, rightNodes, title } = props;

    const renderNode = (node, i) => {
        return (
            <Typography key={i} variant='h6' component='div'>
                {node}
            </Typography>
        );
    };

    return (
        <MuiAppBar position='sticky'>
            <Toolbar className={styles.appBar}>
                <Box className={styles.left}>
                    <Button color='inherit' icon={<MenuIcon />} onClick={onMenuClick} />
                    <Typography variant='h6' component='div'>
                        {title}
                    </Typography>
                    {leftNodes?.map(renderNode)}
                </Box>
                <Box className={styles.right}>{rightNodes?.map(renderNode)}</Box>
            </Toolbar>
        </MuiAppBar>
    );
};

AppBar.propTypes = {
    leftNodes: PropTypes.arrayOf(PropTypes.node),
    onMenuClick: PropTypes.func,
    rightNodes: PropTypes.arrayOf(PropTypes.node),
    title: PropTypes.string,
};

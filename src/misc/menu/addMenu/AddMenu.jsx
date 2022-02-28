import React, { useState } from 'react';
import styles from './addMenu.module.scss';

export const AddMenu = props => {
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(true);
    const [rotated, setRotation] = useState(false);

    const menuClasses = [styles.addMenu];
    const plusSignClasses = [styles.plusSign];

    // Wait half a second before turning on animations
    setTimeout(() => {
        setLoading(false);
    }, 500);

    if (loading) {
        menuClasses.push(styles.loading);
    }

    if (expanded) {
        plusSignClasses.push(styles.expanded);
    }

    if (rotated || expanded) {
        menuClasses.push(styles.rotated);
    }

    const onClick = () => setExpanded(!expanded);
    const onEnter = () => setRotation(true);
    const onLeave = () => setRotation(false);

    return (
        <div
            className={menuClasses.join(' ')}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            onClick={onClick}
        >
            <div className={plusSignClasses.join(' ')}>+</div>
        </div>
    );
};

export default AddMenu;

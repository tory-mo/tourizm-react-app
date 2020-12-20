import React from 'react';
import s from './Tourist.module.css';

const Tourist = (props) => {

    return(
        <li className={s.item}>
            {' login: ' + props.login + ', name: ' + props.name}
        </li>

    );
}

export default Tourist;
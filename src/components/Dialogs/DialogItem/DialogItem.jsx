import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <NavLink to={"/dialogs/" + props.id} className={s.dialogs__item} activeClassName={s.dialogs__item_active}>{props.name}</NavLink>
    );
}

export default DialogItem
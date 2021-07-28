import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return(
        <div className={`${s[props.whose]} ${s.message__item}`}>{props.message}</div>
    );
}

export default Message
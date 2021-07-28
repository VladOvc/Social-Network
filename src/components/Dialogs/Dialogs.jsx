import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";



const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> )
    let messagesElements = props.messages.map( m => <Message message={m.message} whose={m.whose} /> )

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.onMessageChange(text)
    }

    if (!props.isAuth) return <Redirect to={"login"}/>


    return(
        <div className={s.content}>
            <div className={s.dialogs__items}>
                { dialogsElements }
            </div>
            <div className={s.message__items}>

                {/*<DialigsForm/>*/}
                <div className={s.add_message}>
                    <textarea ref={newMessageElement}
                              value={props.newMessageText}
                              onChange={onMessageChange}/>
                    <button onClick={addMessage}>Push</button>
                </div>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;
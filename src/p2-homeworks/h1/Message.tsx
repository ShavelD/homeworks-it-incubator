import React from 'react'

import classes from "./Message.module.css";


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.wrapper}>
            <div className={classes.messageAva}>
                {<img src={props.avatar}/>}
            </div>
            <section className={classes.chatBody}>
                <div className={classes.message}>
                    <div className={classes.droplet}>
                        <div className={classes.messageText}>
                            <div className={classes.wrapperMessage}>
                                <div className={classes.txt}>
                                    <p className={classes.txtName}>{props.name}</p>
                                    <p className={classes.txtMessage}>{props.message}</p>
                                </div>
                                <div className={classes.messageTime}>{props.time}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <svg height="0" width="0">
                <defs>
                    <clipPath id="left-droplet">
                        <path d="M 10,0 A 10,10 0 0 1 0,10 H 16 V 0 Z"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default Message;

import React from 'react';
import style from './ContactFormComponent.module.css';
import MessagesFromComponent from './MessagesFromComponent/MessagesFromComponent';
import MessagesToComponent from './MessagesToComponent/MessagesToComponent';
import MessageComponent from './MessageComponent/MessageComponent';



function ContactFormComponent() {

    return (



        <div className={style.send_message_form} id="drop-area">
            <form action="#">
                <h1>Отправлялка сообщений</h1>

                <MessagesFromComponent />
                <MessagesToComponent />
                <MessageComponent />
            </form>
        </div>




    );
}

export default ContactFormComponent;

import React from 'react';
import style from './MessagesReportComponent.module.css';


function MessagesReportComponent() {

  return (
   
        <div className={style.messages_report}>
          <span>Отправленные сообщения</span>
          <ul>
            <li>Сообщения не отправлялись</li>
          </ul>
        </div>

  );
}

export default MessagesReportComponent;

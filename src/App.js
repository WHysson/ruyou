import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faPaperclip } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faPaperclip)

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="send_message_form">
          <form action="">
            <h1>Отправлялка сообщений</h1>

            <label htmlFor="">От кого</label>
            <div className="form_section">

              <div className="form_input">
                <input type="text" className="form_input_left_item" placeholder="Имя" />
              </div>
              <div className="form_input">
                <input type="text" className="form_input_right_item" placeholder="Email" />
              </div>

            </div>

            <label htmlFor="">Кому</label>
            <div className="form_section">

              <div className="form_input">
                <input type="text" className="form_input_left_item" placeholder="Имя" />
              </div>
              <div className="form_input">
                <input type="text" className="form_input_right_item" placeholder="Email" />
              </div>

            </div>
            <div className="form_theme">

              <label htmlFor="">Тема письма</label>
              <input type="text" />

            </div>
            <label htmlFor="">Сообщение</label>
            <textarea name="message" id="" ></textarea>

            <a href="#"><FontAwesomeIcon icon={faPaperclip} /> Прикрепить файл</a>

            <button>Отправить</button>
          </form>
        </div>

        <div className="messages_report">
          <span>Отправленные сообщения</span>
          <p>Сообщения не отправлялись</p>
        </div>
      </div>
    </div>
  );
}

export default App;

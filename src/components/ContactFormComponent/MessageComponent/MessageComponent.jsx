import React from 'react';
import style from './MessageComponent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';


library.add(fab, faCheckSquare, faPaperclip)

function MessageComponent(props) {
  
  let sendMessageBtn = () => {
    console.log('button pressed')
    
    // let nameFromValue = document.querySelectorAll('input')[0].value
    // let emailFromValue = document.querySelectorAll('input')[1].value
    // let nameToVAlue = document.querySelectorAll('input')[2].value
    // let emailToValue = document.querySelectorAll('input')[3].value
    // let messageTheme = document.querySelectorAll('input')[4].value
    // let messageText = document.querySelector('textarea').value
    // props.store.dispatch({ type: 'SEND_MESSAGE', payload: [nameFromValue, emailFromValue, nameToVAlue, emailToValue, messageTheme, messageText] })
    // props.state.dispatch({ type: 'SEND_MESSAGE', payload: 'MESSAGE' })
  }
  
  let messageTheme = (event) => {
    props.testStore.messageTheme = event.target.value
    console.log(props.testStore)
  }

  let messageText = (event) => {
    props.testStore.messageText = event.target.value
    console.log(props.testStore)
  }


  return (

    <div>

      <div className={style.form_theme}>
        <label htmlFor="">Тема письма</label>

        <input value={props.testStore.messageText.value}  onChange={messageTheme} type="text" />
      </div>

      <label htmlFor="">Сообщение</label>
      <textarea value={props.testStore.messageTheme.value} onChange={messageText} name="message" id="" ></textarea>

      <a href="#"><FontAwesomeIcon icon={faPaperclip} />Прикрепить файл</a>

      <button onClick={sendMessageBtn}>Отправить</button>  {/*кнопка для отправки сообщения*/}
    </div>

  );
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    sendMessageBtn: (messageTheme) => {
      dispatch({type: 'SEND_MESSAGE', payload: "MESSAGE"})
    }
  })
)(MessageComponent);

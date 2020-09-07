import React from 'react';
import style from './MessagesFromComponent.module.css';
import { connect } from 'react-redux';

function MessagesFromComponent(props) {

  let inputFromName = (event) => {
    props.testStore.messageFromName = event.target.value
    console.log(event.target.value)
    console.log(props.testStore)
  }

  let inputFromEmail = (event) => {
    props.testStore.messageFromEmail = event.target.value
    console.log(event.target.value)
    console.log(props.testStore)
  }

  return (
    <div>
      <label htmlFor="">От кого</label>
      <div className={style.form_section}>

        <div className={style.form_input}>
          <input value={props.testStore.messageFromName.value} onChange={inputFromName} type="text" className={style.form_input_left_item} placeholder="Имя" />
        </div>
        
        <div className={style.form_input}>
          <input value={props.testStore.messageFromEmail.value} onChange={inputFromEmail} type="text" className={style.form_input_right_item} placeholder="Email" />
        </div>

      </div>

    </div>
  );
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    
  })
)(MessagesFromComponent);

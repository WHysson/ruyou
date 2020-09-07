import React from 'react';
import style from './MessagesToComponent.module.css'
import { connect } from 'react-redux';

function MessagesToComponent(props) {

  let inputToName = (event) => {
    props.testStore.messageToName = event.target.value
    console.log(event.target.value)
    console.log(props.testStore)
  }

  let inputToEmail = (event) => {
    props.testStore.messageToEmail = event.target.value
    console.log(event.target.value)
    console.log(props.testStore)
  }

  return (



    <div>

      <label htmlFor="">Кому</label>
      <div className={style.form_section}>

        <div className={style.form_input}>
          <input value={props.testStore.messageToName.value} onChange={inputToName} type="text" className={style.form_input_left_item} placeholder="Имя" />
        </div>
        <div className={style.form_input}>
          <input value={props.testStore.messageToEmail.value} onChange={inputToEmail} type="text" className={style.form_input_right_item} placeholder="Email" />
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
)(MessagesToComponent);

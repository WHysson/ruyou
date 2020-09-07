import React from 'react';
import './App.css';
import ContactFormComponent from './components/ContactFormComponent/ContactFormComponent';
import MessagesReportComponent from './components/MessagesReportComponent/MessagesReportComponent';
import { connect } from 'react-redux';




function App(props) {

  return (
    <div className="App">
      <div className="wrapper">
        <ContactFormComponent />
        <MessagesReportComponent />
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
)(App);

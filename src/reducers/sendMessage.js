const initialState = {
    messageToName: '',
    messageToEmail: '',
    messageFromName: '',
    messageFromEmail: '',
    messageTheme: '',
    messageText: ''
  }


export default function sendMessage(state = initialState, action) {
    if (action.type === 'SEND_MESSAGE') {
      return {
        ...state,
        messageToName: [...state.messageToName, action.payload],
        messageToEmail: [...state.messageToEmail, action.payload],
        messageFromName: [...state.messageFromName, action.payload],
        messageFromEmail: [...state.messageFromEmail, action.payload],
        messageTheme: [...state.messageTheme, action.payload],
        messageText: [...state.messageText, action.payload]
    }
    }
    return state
  }
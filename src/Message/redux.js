const CHANGE_VISIBILITY = "message/CHANGE_VISIBILITY";
const ADD_MESSAGE = "message/ADD_MESSAGE";
const SELECT_MESSAGE_TYPE = "message/SELECT_MESSAGE_TYPE";

const INITIAL_STATE = {
  isVisible: false,
  messageType: 'info',
  messageContent: ''
};



export const changeVisibility = () => {
  return{
    type:CHANGE_VISIBILITY
  }
}

export const addMessage = () => {
    return{
      type:ADD_MESSAGE
    }
  }

  export const selectMessageType = () => {
    return{
      type:SELECT_MESSAGE_TYPE
    }
  }

const messageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CHANGE_VISIBILITY:
        return {
          ...state,
          isVisible: false,
        };
    case ADD_MESSAGE:
        return {
          ...state,
          messageContent: 'WIADOMOSC'
        };
    case SELECT_MESSAGE_TYPE:
        return {
          ...state,
          messageType: 'warning'
        };
      default:
        return state;
    }
  };

export default messageReducer;
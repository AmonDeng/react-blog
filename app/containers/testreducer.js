import { changeTextAction,buttonClickAction} from './testAction.js'
//reducer
import {loadingBarReducer} from 'react-redux-loading-bar'
const initialState = {
    text: 'Hello',
    isloading : true,
}
export default(state = [], action) => {
    switch (action.type) {
    case 'CHANGE_TEXT':
        return {
            text: state.text == 'Hello' ? 'world' : 'Hello'
        }
    case 'BUTTON_CLICK':
        return {
            text: action.text,
            isloading: false
        }
    default:
        return initialState;
    }
}

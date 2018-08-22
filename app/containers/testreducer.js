import { changeTextAction,buttonClickAction} from './testAction.js'
//reducer
import {loadingBarReducer} from 'react-redux-loading-bar'
const initialState = {
    text: 'Hello'
}
export default(state = [], action) => {
    switch (action.type) {
    case 'CHANGE_TEXT':
        return {
            text: state.text == 'Hello' ? 'world' : 'Hello'
        }
    case 'BUTTON_CLICK':
        return {
            text: action.text
        }
    default:
        return initialState;
    }
}

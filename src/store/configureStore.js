import { createStore } from 'redux';
import { INCREMENT, DECREMENT, VALUE } from './actions';

const initialState = {
    count: 0,
    value: 1
}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + state.value
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - state.value
            }
        case VALUE:
            return {
                ...state,
                value: action.data
            }
        default:
            return state;

    }
}

export default createStore(counterReducer);

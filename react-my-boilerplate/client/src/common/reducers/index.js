import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';
import { combineReducers } from 'redux';

const InitialState = {
    value: 0,
    diff: 1
};

//example counter
const counter = (state = InitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
};


const extra = (state = { value: 'other_reducer_haha' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}


export default function createStore(reducers){
    return combineReducers({
        counter,
        extra,
        ...reducers
    })
}
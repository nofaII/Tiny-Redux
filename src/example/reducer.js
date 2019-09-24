import {COUNT_UP, COUNT_DOWN} from './action-types';

const initialState = {
    count: 0
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case COUNT_UP: 
            return {
                ...state,
                count: state.count + 1
            }
        case COUNT_DOWN: 
            return {
                ...state,
                count: state.count - 1
            }
        default: return state;
    }
}

export default reducer;
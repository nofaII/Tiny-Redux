import {ADD_OPERATOR, SHOW_OPERATORS, CHANGE_VALUE, SET_RESULT, CALCULATING, DELETE_OPERATOR} from './action-types';

const initialState = {
    readyForResult: false,
    calculating: false,
    currentExpression: [
        {
            operator: '',
            value: ''
        }
    ],
    results: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case CALCULATING:
            return {
                ...state,
                calculating: true
            }
        case DELETE_OPERATOR: {
            let newArr = [...state.currentExpression];
            if(newArr.length > 1) newArr.splice(-1,1);
            return {
                ...state,
                readyForResult: true,
                currentExpression: newArr
            }
        }
        case ADD_OPERATOR: {
            let newArr = [...state.currentExpression];
            newArr.push({operator: action.operator});
            return {
                ...state,
                readyForResult: true,
                currentExpression: newArr
            }
        }
        case SHOW_OPERATORS: 
            return {
                ...state,
                readyForResult: false
            }
        case SET_RESULT: 
            let newResults = [...state.results];
            newResults.unshift(action.result)
            let newExp = state.currentExpression.map(i => {
                return {
                    operator: i.operator,
                    value: ''
                }
            })
            
            return {
                ...state,
                results: newResults,
                currentExpression: newExp,
                calculating: false
            }
        case CHANGE_VALUE: {
            let newArr = state.currentExpression.map(item => ({...item}))
            newArr[action.id].value = action.text;
            
            return {
                ...state,
                currentExpression: [...newArr]
            }
        }
        default: return state;
    }
}

export default reducer;
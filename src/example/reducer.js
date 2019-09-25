import {ADD_OPERATOR, SHOW_OPERATORS, CHANGE_VALUE, DISPLAY_RESULT} from './action-types';

const initialState = {
    readyForResult: false,
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
        case DISPLAY_RESULT: 
            let newResults = [...state.results];
            newResults.push(action.result)
            let newExp = state.currentExpression.map(i => {
                return {
                    operator: i.operator,
                    value: ''
                }
            })
            
            return {
                ...state,
                results: newResults,
                currentExpression: newExp
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
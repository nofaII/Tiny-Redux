import {ADD_OPERATOR, SHOW_OPERATORS, CHANGE_VALUE, DISPLAY_RESULT} from './action-types';

export const addOperator = operator => {
    return {
        type: ADD_OPERATOR,
        operator
    }
}

export const showOperators = () => {
    return {
        type: SHOW_OPERATORS
    }
}

export const displayResult = exp => {
    let result = eval(exp.map(item => {
        return item.operator + item.value;
    }).join(''))
    return {
        type: DISPLAY_RESULT,
        result
    }
}

export const changeValue = (text, id) => {
    return {
        type: CHANGE_VALUE,
        text,
        id
    }
}
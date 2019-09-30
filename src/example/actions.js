import {ADD_OPERATOR, SHOW_OPERATORS, CHANGE_VALUE, SET_RESULT, CALCULATING, DELETE_OPERATOR} from './action-types';

export const addOperator = operator => {
    return {
        type: ADD_OPERATOR,
        operator
    }
}

export const deleteOperator = () => {
    return {
        type: DELETE_OPERATOR
    }
}

export const showOperators = () => {
    return {
        type: SHOW_OPERATORS
    }
}

export const calculating = () => {
    return {
        type: CALCULATING
    }
}

const asyncCalculation = (currentExpression=[]) => {
    let calculate = new Promise(success => {
        setTimeout(() => {
            const onlyFi = currentExpression.filter(item => item.value)
            const expressionBody = onlyFi.map(item => {
                return item.operator + ' ' + item.value;
            }).join(' ')
            const result = eval(expressionBody)
            const fullExpression = result === undefined ? 'empty' : expressionBody  + ' = ' + result;
            success(fullExpression)
        }, 1000)
    })
    return calculate
}

const setResult = fullExpression => {
    return {
        type: SET_RESULT,
        result: fullExpression
    }
}

export const displayResult = currentExpression => dispatch => {
    dispatch(calculating())
    asyncCalculation(currentExpression)
        .then(fullExpression => dispatch(setResult(fullExpression)))
}

export const changeValue = (text, id) => {
    return {
        type: CHANGE_VALUE,
        text,
        id
    }
}
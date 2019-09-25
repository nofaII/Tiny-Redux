import React from 'react';
import {connect} from '../../TinyRedux/redux-react';
import {addOperator, showOperators, changeValue, displayResult} from '../actions';
import Buttons from './Buttons';
import Results from './Results';
import Inputs from './Inputs';

const App = props => {
    return (
        <div>
            <Inputs 
                currentExpression={props.currentExpression}
                onChangeValue={props.onChangeValue}
            />
            <Buttons
                readyForResult={props.readyForResult}
                onAddOperators={props.onAddOperators}
                onAddOperator={props.onAddOperator}
                onDisplayResult={props.onDisplayResult}
                currentExpression={props.currentExpression}
                operators={['+', '-', '*', '/']}
            />
            <Results results={props.results}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        readyForResult: state.readyForResult,
        currentExpression: state.currentExpression,
        results: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddOperator: i => dispatch(addOperator(i)), 
        onAddOperators: () => dispatch(showOperators()),
        onChangeValue: (text, id) => dispatch(changeValue(text, id)),
        onDisplayResult: exp => dispatch(displayResult(exp))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
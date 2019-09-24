import React from 'react';
import {connect} from '../TinyRedux/redux-react';
import {countUP, countDown} from './action';

const App = props => {
    return (
        <div>
            <h1>{props.count}</h1>
            <h2 onClick={props.countUP}>UP</h2>
            <h2 onClick={props.countDown}>DOWN</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        countUP: () => dispatch(countUP()), 
        countDown: () => dispatch(countDown())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
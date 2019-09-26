import {createStore, applyMiddleware} from '../TinyRedux/store';
import {thunkMiddleware} from '../TinyRedux/redux-thunk';
import reducer from './reducer';

const store = createStore(reducer,  applyMiddleware(thunkMiddleware));

export default store;

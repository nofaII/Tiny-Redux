import {createStore} from '../TinyRedux/store';
import reducer from './reducer';

const store = createStore(reducer);

export default store;

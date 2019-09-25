import React from 'react';
import ReactDOM from 'react-dom';
import App from './example/components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from './TinyRedux/redux-react';
import store from './example/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();

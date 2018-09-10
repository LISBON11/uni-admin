import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const testFn = function(state = [], action) {
    // console.log(store.getStore())

    return [];
}

const store = createStore(testFn)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

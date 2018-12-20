/**
 * Created on 09.02.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './store/reducer';
import state from './store/initialState';
import App from './container/App';

const store = createStore(
    reducers,
    state,
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#app'),
);

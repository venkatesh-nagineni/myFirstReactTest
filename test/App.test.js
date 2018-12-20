/**
 * Created on 09.02.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/container/App';

describe('App', () => {
    it('Should render without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

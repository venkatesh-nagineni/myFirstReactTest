/**
 * Created on 09.02.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Counter from './Counter';
import EntriesForm from './EntriesForm';

/**
 * @class App
 */
class App extends Component {
    routes = [
        {
            label: 'Home',
            path: '/',
            exact: true,
            component: Home,
        },
        {
            label: 'Counter',
            path: '/counter',
            exact: false,
            component: Counter,
        },
        {
            label: 'EntriesForm',
            path: '/guestBookEntry',
            exact: false,
            component: EntriesForm,
        },
    ];

    renderNavLink() {
        return this.routes.map((route, i) => (
            <li key={i}>
                <NavLink
                    to={route.path}
                    exact={route.exact}
                >{route.label}</NavLink>
            </li>
        ));
    }

    renderRoutes() {
        return this.routes.map((route, i) => (
            <Route
                key={i}
                exact
                path={route.path}
                component={route.component}
            />
        ));
    }

    /**
     * @return {*}
     */
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        {this.renderNavLink() }
                    </ul>
                    {this.renderRoutes()}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

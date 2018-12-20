/**
 * Created on 09.02.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { increase, decrease } from '../store/action';
import initialState from '../store/initialState';

/**
 * @class Counter
 */
class Counter extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    handleIncreaseButtonClick = () => {
        this.props.dispatch(increase());
    };

    handleDecreaseButtonClick = () => {
        this.props.dispatch(decrease());
    };

    /**
     * @return {*}
     */
    render() {
        return (
            <div>
                <h1>Count: {this.props.count}</h1>
                <button onClick={this.handleIncreaseButtonClick}>Increase</button>
                <button onClick={this.handleDecreaseButtonClick}>Decrease</button>
            </div>
        );
    }
}

export default connect(state => ({
    count: get(state, 'counter.count', initialState.counter),
}))(Counter);

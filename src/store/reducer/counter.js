/**
 * Created on 09.02.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { assign, cloneDeep } from 'lodash';
import { INCREMENT, DECREMENT } from '../action/types';
import initialState from '../initialState';

export default (state = cloneDeep(initialState), action) => {
    switch (action.type) {
    case INCREMENT:
        return assign(
            {},
            state,
            {
                count: state.count + 1,
            },
        );
    case DECREMENT:
        return assign(
            {},
            state,
            {
                count: state.count - 1,
            },
        );
    default:
        return state;
    }
};

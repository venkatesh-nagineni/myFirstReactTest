/**
 * Created on 09.02.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

import { INCREMENT, DECREMENT } from './types';

export const increase = () => ({
    type: INCREMENT,
});

export const decrease = () => ({
    type: DECREMENT,
});

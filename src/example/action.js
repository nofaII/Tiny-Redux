import {COUNT_UP, COUNT_DOWN} from './action-types';

export const countUP = () => {
    return {
        type: COUNT_UP
    }
}

export const countDown = () => {
    return {
        type: COUNT_DOWN
    }
}
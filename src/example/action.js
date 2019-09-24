import {COUNT_UP, COUNT_DOWN} from './action-types';

export const countUP = () => {
    console.log('d');
    
    return {
        type: COUNT_UP
    }
}

export const countDown = () => {
    return {
        type: COUNT_DOWN
    }
}
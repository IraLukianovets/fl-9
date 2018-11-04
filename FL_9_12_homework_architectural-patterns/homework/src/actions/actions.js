/*
export const LOAD_MORE = 'LOAD_MORE';
export const REMOVE_USER = 'REMOVE_USER';
export const SEARCH = 'SEARCH';

export function addAction(type, value) {
    return {
        type: type,
        value: value
    };
}
*/

const LOAD_MORE = 'LOAD_MORE';
const REMOVE_USER = 'REMOVE_USER';
const SEARCH = 'SEARCH';

function addAction(type, value) {
    return {
        type: type,
        value: value
    };
}

export {
    LOAD_MORE,
    REMOVE_USER,
    SEARCH,
    addAction
};
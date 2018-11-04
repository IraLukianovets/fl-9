export const LOAD_MORE = 'LOAD_MORE';
export const REMOVE_USER = 'REMOVE_USER';
export const SEARCH = 'SEARCH';

export function addAction(type, value) {
    return {
        type: type,
        value: value
    };
}
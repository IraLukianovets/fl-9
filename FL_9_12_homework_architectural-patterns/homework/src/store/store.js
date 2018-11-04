export const createStore = (reducer) => {
    let state;
    const listeners = [];
    const getState = () => {
        return state;
    };
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((callback) => {
            callback(state);
        });
    };
    const subscribe = (callback) => {
        listeners.push(callback);
    };
    dispatch();

    return {
        dispatch,
        subscribe,
        getState
    };
};
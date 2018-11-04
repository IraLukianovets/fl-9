import {LOAD_MORE, REMOVE_USER, SEARCH} from '../actions/actions';
import {USERS, STEP, SHOWED_BY_DEFAULT} from './../storages/userStorage';
import {getDomElements} from './../storages/domElements';

const defaultState = USERS.showByDefault();
const defaultAction = {
    type: 'Default'
};

export const reducer = function(state = defaultState, action = defaultAction) {
    let DOM_ELEMENTS = getDomElements();

    switch (action.type) {
    case LOAD_MORE:
    {
        if (action.value.length < STEP) {
            DOM_ELEMENTS.loadMore.classList.add('amimateToBottom');
            setTimeout(() => {
                DOM_ELEMENTS.loadMore.classList.add('invisible');
            }, 500);
        } else {
            DOM_ELEMENTS.loadMore.classList.remove('invisible', 'amimateToBottom');
        }
        return [...state, ...action.value];
    }
    case REMOVE_USER:
    {
        USERS.deleteUser(action.value);
        state = state.filter((user) => user.id != action.value);
        if (state.length < SHOWED_BY_DEFAULT) {
            return state = USERS.showByDefault();
        };
        return state;
    }
    case SEARCH:
    {
        return state.filter((user) => {
            return user.name.indexOf(action.value) !== -1;
        });
    }
    }
    return state;
};
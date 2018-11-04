import './style.scss';
import {template} from './utils/index';
import {LOAD_MORE, REMOVE_USER, SEARCH, addAction} from './actions/actions';
import {createStore} from './store/store';
import {reducer} from './reducers/reducers';
import {USERS} from './storages/userStorage';
import {getDomElements} from './storages/domElements';

const root = document.getElementById('root');
root.innerHTML = template;

const DOM_ELEMENTS = getDomElements();

const renderUsers = (users) => {
    const template = users.map((user) => {
        return `
            <tr id=${ user.id}>
                <td class='user-img'><img src=${ user.picture} alt='photo....'></td>
                <td>${ user.name}</td>
                <td>${ user.location}</td>
                <td>${ user.email}</td>
                <td>${ user.phone}</td>
                <td>${ user.timezone}</td>
                <td><button class="btn btn-remove">Delete</button></td>
            </tr>`;
    }).join('\n');
    DOM_ELEMENTS.usersList.innerHTML = template;
};

const store = createStore(reducer);

const displayedOutOf = () => {
    DOM_ELEMENTS.displayed.innerText = store.getState().length;
    DOM_ELEMENTS.outOf.innerText = USERS.getUsers().length;
};

displayedOutOf();
renderUsers(store.getState());

store.subscribe(displayedOutOf);
store.subscribe(() => {
    renderUsers(store.getState());
});

DOM_ELEMENTS.loadMore.addEventListener('click', () => {
    const value = USERS.loadMore();
    const action = addAction(LOAD_MORE, value);
    store.dispatch(action);
});

DOM_ELEMENTS.usersList.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-remove')) {
        const id = event.target.parentElement.parentElement.id;
        const action = addAction(REMOVE_USER, id);
        store.dispatch(action);
    }
});

DOM_ELEMENTS.input.addEventListener('keyup', (event) => {
    const action = addAction(SEARCH, event.target.value);
    store.dispatch(action);
});
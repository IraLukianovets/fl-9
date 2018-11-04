import USER_JSON from './../data';

export const SHOWED_BY_DEFAULT = 5;
export const STEP = 5;

function userStorage(defaultUsers) {
    let users = defaultUsers;
    let loaded = SHOWED_BY_DEFAULT;

    const getUsers = () => {
        return users;
    };

    const showByDefault = () => {
        return users.slice(0, SHOWED_BY_DEFAULT);
    };

    const loadMore = () => {
        return users.slice(loaded, loaded += STEP);
    };

    const deleteUser = (removeId) => {
        return users = users.filter((user) => user.id != removeId);
    };
    return {
        getUsers,
        showByDefault,
        loadMore,
        deleteUser
    };
}

export const USERS = userStorage(USER_JSON);
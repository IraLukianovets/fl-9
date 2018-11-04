export function getDomElements() {
    return {
        usersList: document.getElementById('users'),
        loadMore: document.getElementById('loadMore'),
        input: document.getElementById('searchField'),
        usersCount: document.querySelector('.user-count'),
        displayed: document.getElementById('displayed'),
        outOf: document.getElementById('out-of')
    };
};
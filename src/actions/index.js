export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const addTodo = {
    type: ADD_TODO,
    id: 1,
};

export const toggleTodo = {
    type: TOGGLE_TODO,
    id: 1,
}

export const setVisibilityFilter = {
    type: SET_VISIBILITY_FILTER,
    filter: 'COMPLETED',
}
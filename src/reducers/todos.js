import { ADD_TODO, TOGGLE_TODO } from '../actions';

const todoListReducer = (state = [], action) => {
    console.log(action.type);
    switch (action.type) {
        case ADD_TODO: {
            return [...state, singleTodoReducer(state, action)];
        }
        case TOGGLE_TODO: {
            return state.map(todo => singleTodoReducer(todo, action));
        }
        default: {
            return state;
        }
    }
};

const singleTodoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                text: action.text,
                id: action.id,
                completed: false,
            }
        }
        case TOGGLE_TODO: {
            if (state.id !== action.id) {
                return state;
            }
            return { ...state,
                completed: !state.completed,
            }
        }
    }
};

export default todoListReducer;
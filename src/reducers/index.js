import { ADD_TODO } from "../actions/index";
import { TOGGLE_TODO } from "../actions/index";

export const addTodoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, {
                text: action.text,
                id: action.id,
                completed: false,
            }]
            break;
        }
        case TOGGLE_TODO: {
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            })
        }
        default: {
            return {}
        }
    }
}

// export const toggleTodoReducer = (st)
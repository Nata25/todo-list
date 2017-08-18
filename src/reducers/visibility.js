import { SET_VISIBILITY_FILTER } from "../actions/index";

const visibility = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER: {
            return action.filter;
        }
        default: {
            return state;
        }
    }
};

export default visibility;
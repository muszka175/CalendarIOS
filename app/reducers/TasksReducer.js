import {
    LOADING_TASKS,
    FETCH_TASKS,
    // TASK_CREATE,
    // TASK_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    items: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING_TASKS:
            return Object.assign({}, state, { loading: true });
        case FETCH_TASKS:
            console.log('action', action);
            if(!action.payload) return Object.assign({}, state, { items: [], loading: false });
            const items = Object.entries(action.payload).map(entry => ({ id: entry[0], ...entry[1] }));
            console.log('items', items);
            return Object.assign({}, state, { items, loading: false });
        default:
            return state;
    }
};
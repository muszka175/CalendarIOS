import {
  CREATE_TASK,
  EDIT_TASK,
  TASK_LOADING,
  RESET_TASK_FORM,
  REMOVE_TASK
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESET_TASK_FORM:
      return Object.assign({}, state, { loading: false });
    case TASK_LOADING:
      return Object.assign({}, state, { loading: true });
    case CREATE_TASK:
      return Object.assign({}, state, { loading: false });
    case EDIT_TASK:
      return Object.assign({}, state, { loading: false });
    case REMOVE_TASK:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};
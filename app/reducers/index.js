import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TaskFormReducer from './TaskFormReducer';
import TasksReducer from './TasksReducer';
// import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
  taskForm: TaskFormReducer,
  tasks: TasksReducer,
  // employees: EmployeeReducer
});
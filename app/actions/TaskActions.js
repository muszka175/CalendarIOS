import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  FETCH_TASKS,
  EDIT_TASK,
  CREATE_TASK,
  TASK_LOADING,
  REMOVE_TASK,
  RESET_TASK_FORM,
} from './types';

export const fetchTasks = () => {
  const { currentUser } = firebase.auth();  /* */
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/tasks/`).on('value', snapshot => {  /* */ 
      dispatch({ type: FETCH_TASKS, payload: snapshot.val() })
    });
  }
}

export const createTask = (task) => {
  const { currentUser } = firebase.auth(); /* */
  return (dispatch) => {
    dispatch({ type: TASK_LOADING });
    firebase.database().ref(`/users/${currentUser.uid}/tasks`).push({  /* */
      name: task.name,
      date: task.date,
      description: task.description
    }).then(data => {
      dispatch({ type: CREATE_TASK });
      Actions.main();
    }).catch(error => {
      console.log(error);
    })
  }
}

export const editTask = (task, uid) => {
  const { currentUser } = firebase.auth(); /* */
  return (dispatch) => {
    dispatch({ type: TASK_LOADING });
    firebase.database().ref(`/users/${currentUser.uid}/tasks/${task.id}`).set({ /* */
      name: task.name,
      date: task.date,
      description: task.description
    }).then(data => {
      dispatch({ type: EDIT_TASK });
      Actions.main();
    }).catch(error => {
      console.log(error);
    })
  }
}

export const taskDone = (taskId) => {
  const { currentUser } = firebase.auth();  /* */
  return (dispatch) => {
    dispatch({ type: TASK_LOADING });
    firebase.database().ref(`/users/${currentUser.uid}/tasks/${taskId}`).remove() /* */
    .then(data => {
      dispatch({ type: REMOVE_TASK });
      Actions.main();
    }).catch(error => {
      console.log(error);
    })
  }
}

export const resetTaskForm = () => ({ type: RESET_TASK_FORM });
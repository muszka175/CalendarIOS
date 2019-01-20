import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '../components/common';
import { db } from '../App';
import moment from 'moment';

import {
  FETCH_TASKS,
  EDIT_TASK,
  CREATE_TASK,
  TASK_LOADING,
  REMOVE_TASK,
  RESET_TASK_FORM,
} from './types';

export const fetchTasks = () => {
  return (dispatch) => {
    firebase.database().ref('tasks/').on('value', snapshot => {
      dispatch({ type: FETCH_TASKS, payload: snapshot.val() })
    });
  }
}

export const createTask = (task) => {
  return (dispatch) => {
    dispatch({ type: TASK_LOADING });
    firebase.database().ref('tasks/').push({
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

export const editTask = (task) => {
  return (dispatch) => {
    dispatch({ type: TASK_LOADING });
    firebase.database().ref(`tasks/${task.id}`).set({
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
  return (dispatch) => {
    dispatch({ type: TASK_LOADING });
    firebase.database().ref(`tasks/${taskId}`).remove()
    .then(data => {
      dispatch({ type: REMOVE_TASK });
      Actions.main();
    }).catch(error => {
      console.log(error);
    })
  }
}

export const resetTaskForm = () => ({ type: RESET_TASK_FORM });
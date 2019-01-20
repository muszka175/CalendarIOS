import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TaskCreate from './components/TaskCreate';
import TaskEdit from './components/TaskEdit';
import TaskDetails from './components/TaskDetails';
import Main from './components/Main';
import TasksCalendar from './components/TasksCalendar';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Stack key='root'>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" />
                </Scene>

                <Scene key="main">
                    <Scene
                        onRight={() => Actions.taskCreate()}
                        rightTitle="Add"
                        key="taskList"
                        component={Main}
                        title="Tasks list"
                        initial
                    />
                    <Scene key="calendar" component={TasksCalendar} title="Calendar" />
                    <Scene key="taskCreate" component={TaskCreate} title="Create Task" />
                    <Scene key="taskEdit" component={TaskEdit} title="Edit Task" />
                    <Scene key="taskDetails" component={TaskDetails} title="Task Details" />
                </Scene>
            </Stack>
        </Router>
    );
};

export default RouterComponent;
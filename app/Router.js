import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from './components/LoginForm';
import TaskCreate from './components/TaskCreate';
import TaskEdit from './components/TaskEdit';
import TaskDetails from './components/TaskDetails';
import Main from './components/Main';
import { logoutUser } from './actions';
import TasksCalendar from './components/TasksCalendar';

const RouterComponent = (props) => {
    return (
        <Router /*sceneStyle={{ paddingTop: 65 }}*/ >
            <Scene key='root'>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" />
                </Scene>

                <Scene key="main">
                    <Scene
                        onLeft={props.logoutUser}
                        leftTitle="Logout"
                        onRight={() => Actions.taskCreate()}
                        rightTitle="Add"
                        key="taskList"
                        component={Main}
                        title="Tasks list"
                        titleStyle={{paddingLeft: 50}}
                        initial
                    />
                    <Scene key="calendar" component={TasksCalendar} title="Calendar" onRight={props.logoutUser} rightTitle="Logout" />
                    <Scene key="taskCreate" component={TaskCreate} title="Create Task" onRight={props.logoutUser} rightTitle="Logout" />
                    <Scene key="taskEdit" component={TaskEdit} title="Edit Task" onRight={props.logoutUser} rightTitle="Logout" />
                    <Scene key="taskDetails" component={TaskDetails} title="Task Details" onRight={props.logoutUser} rightTitle="Logout" />
                </Scene>
            </Scene>
        </Router>
    );
};

/* */

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logoutUser }, dispatch)
  }
  
  export default connect(null, mapDispatchToProps)(RouterComponent);
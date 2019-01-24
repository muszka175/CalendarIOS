import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import styles from '../styles/main';

import Task from './Task';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card, CardSection, Button } from './common';
import { Actions } from 'react-native-router-flux';
import { fetchTasks, taskDone } from '../actions';
import moment from 'moment';


class Main extends Component {
    componentDidMount() {
        this.props.fetchTasks();
    }

    _goToCalendar = () => {
        Actions.calendar();
    }

    compareDate = (first, second) => moment(first.date).valueOf() - moment(second.date).valueOf();

    render() {
        const tasks = 
        this.props.tasks.length > 0 ? 
        this.props.tasks.sort(this.compareDate).map(task => <Task key={task.id} task={task} deleteMethod={() => this.props.taskDone(task.id)} />) 
        : 
        <Text>There are no tasks.</Text>;

        return (
            <View style={styles.container}>
                <Card>
                    <CardSection>
                        <Button onPress={() => this._goToCalendar()}>
                            Show calendar
                        </Button>
                    </CardSection>
                </Card>
                <ScrollView style={styles.scrollContainer}>
                    {this.props.loading ? <ActivityIndicator /> : tasks}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToPros = state => ({
    tasks: state.tasks.items,
    loading: state.tasks.loading,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTasks, taskDone }, dispatch);
}

export default connect(mapStateToPros, mapDispatchToProps)(Main)
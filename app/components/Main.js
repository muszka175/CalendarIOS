import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import { createStackNavigator } from 'react-navigation';

import styles from '../styles/main';

import Task from './Task';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { Actions } from 'react-native-router-flux';
import { fetchTasks } from '../actions';



class Main extends Component {
    componentDidMount() {
        this.props.fetchTasks();
    }

    _goToCalendar = () => {
        Actions.calendar();
    }

    render() {
        const tasks = this.props.tasks.length > 0 ? this.props.tasks.map(task => <Task key={task.id} task={task} />) : <Text>There are no tasks.</Text>;

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
    return bindActionCreators({ fetchTasks }, dispatch);
}

export default connect(mapStateToPros, mapDispatchToProps)(Main)
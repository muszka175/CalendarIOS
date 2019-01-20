import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
} from 'react-native'
import { Card, CardSection, Button } from './common';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Spinner } from './common';
import { taskDone } from '../actions';

import styles from '../styles/main';

class TaskDetails extends React.Component {
    _goToTaskEdit = (task) => {
        Actions.taskEdit({ task })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <Card >
                        <CardSection>
                            <View>
                                <Text style={styles.listElementHeader}>{this.props.task.name}</Text>
                                {this.props.task.date && <Text>{moment.unix(this.props.task.date).format('DD.MM.YYYY')}</Text>}

                                <Text>{this.props.task.description}</Text>
                            </View>
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <Button onPress={() => this._goToTaskEdit(this.props.task)}>
                                Edit
                            </Button>
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            {!this.props.loading ? <Button onPress={() => this.props.taskDone(this.props.task.id)}>
                                Done
                            </Button> : <Spinner size="large" />}
                        </CardSection>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToPros = state => ({
    loading: state.taskForm.loading
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ taskDone }, dispatch)
}

export default connect(null, mapDispatchToProps)(TaskDetails);
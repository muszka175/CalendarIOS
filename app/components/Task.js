import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native'
import moment from 'moment';
import { Actions } from 'react-native-router-flux';

import { Card, CardSection } from '../components/common'

import styles from '../styles/main';

export default class Task extends React.Component {
    _goToTask = (task) => {
        Actions.taskDetails({ task })
    }

    render() {
        return (
            <Card key={this.props.task.id}>
                <TouchableOpacity onPress={() => this._goToTask(this.props.task)}>
                    <CardSection>
                        <View style={styles.note}>

                            <Text style={styles.taskName}>{this.props.task.name}</Text>
                            {this.props.task.date && <Text>{moment.unix(this.props.task.date).format('DD.MM.YYYY')}</Text>}

                            <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                                <Text style={styles.noteDeleteText}>Delete</Text>
                            </TouchableOpacity>

                        </View>
                    </CardSection>
                </TouchableOpacity>
            </Card>
        );
    }
}

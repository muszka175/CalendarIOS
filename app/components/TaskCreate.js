import React, { Component } from 'react';
import { DatePickerIOS, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { resetTaskForm, createTask } from '../actions';
import { Card, CardSection, Button, Input, Spinner } from './common';
import moment from 'moment';
import TaskForm from './TaskForm';

import styles from '../styles/main';
import { bindActionCreators } from 'redux';

class TaskCreate extends Component {
  state = {
    task: {
      name: null,
      date: moment(new Date()).unix(),
      description: null,
    }
  };


  _updateTask = (prop, value) => {
    this.setState({
      task: {
        ...this.state.task,
        [prop]: value,
      }
    });
  }

  componentDidMount() {
    this.props.resetTaskForm();
  }

  render() {
    return (
      // <Card>
      <View style={styles.container}>
        <TaskForm task={this.state.task} updateTask={this._updateTask} />

        <Card>
          <CardSection>
            {!this.props.loading ? <Button onPress={() => this.props.createTask(this.state.task)}>
              Create
            </Button> : <Spinner size="large" />}
          </CardSection>
        </Card>

      </View>
    );
  }
};

const mapStateToProps = (state) => ({
  loading: state.taskForm.loading
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTask, resetTaskForm }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreate);
import React, { Component } from 'react';
import { DatePickerIOS, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { resetTaskForm, editTask } from '../actions';
import { Card, CardSection, Button, Input, Spinner } from './common';

import TaskForm from './TaskForm';

import styles from '../styles/main';
import { bindActionCreators } from 'redux';

class TaskEdit extends Component {
  state = {
    task: {
      ...this.props.task
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
            {!this.props.loading ? <Button onPress={() => this.props.editTask(this.state.task)}>
              Edit
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
  return bindActionCreators({ editTask, resetTaskForm }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskEdit);
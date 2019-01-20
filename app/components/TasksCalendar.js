import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import { connect } from 'react-redux';
import styles from '../styles/main';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import { CalendarList, Calendar } from 'react-native-calendars';

class TasksCalendar extends Component {
  _getMarkedDates = () => {
    let markedDates = {};

    this.props.tasks.forEach(task => {
      if (task.date) markedDates[moment.unix(task.date).format('YYYY-MM-DD')] = { color: 'green', marked: true };
    })

    return markedDates;
  }

  render() {
    return (
      <View style={styles.container}>
        <CalendarList
          markedDates={this._getMarkedDates()}
          markingType={'period'}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks.items
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksCalendar);
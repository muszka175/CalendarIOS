import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection, Input } from './common';
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment';

export default class TaskForm extends Component {
    state = {
        isDateTimePickerVisible: false,
    };

    _showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    }

    _hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    }

    _handleDatePicked = (date) => {
        this._hideDateTimePicker();
        this.props.updateTask('date', moment(date).unix());
    };

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Clean my room"
                        value={this.props.task.name}
                        onChangeText={value => this.props.updateTask('name', value)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Date"
                        placeholder="01.01.2019"
                        value={moment.unix(this.props.task.date).format('DD.MM.YYYY') }
                        onFocus={this._showDateTimePicker}
                        onChangeText={value => this.props.updateTask('date', value)}
                    />
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        multiline={true}
                        label="Description"
                        placeholder="I need to clean my room this afternoon"
                        value={this.props.task.description}
                        onChangeText={value => this.props.updateTask('description', value)}
                    />
                </CardSection>
            </View>
        );
    }
}
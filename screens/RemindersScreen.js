import React, {Component} from 'react'
import {RemindersList} from '../components/RemindersList'

export default class RemindersScreen extends Component {
    render() {
        return (
            <RemindersList props={this.props}/>
        );
    }
}

import React, { Component } from 'react'
import DatePicker from 'react-date-picker';
import { withUser } from './UserContext'

@withUser
export default class Leads extends Component {


    render() {

        let propsPicker = {
            disabled: false,
            // onChange: onChange,
            // value: value,
            // minDate: new Date(minDate),

        };
        return (
            <div>
                <DatePicker
                    {...propsPicker}
                />
            </div>
        )
    }
}

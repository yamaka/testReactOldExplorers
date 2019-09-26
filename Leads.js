import React, { Component } from 'react'
import DatePicker from 'react-date-picker';
import { withUser } from './UserContext'

@withUser
export default class Leads extends Component {
    constructor(props){
        super(props)
        this.state = {
            listLeads : this.props.listLeads,
            value:''
        }
    };
    onChange = (date) =>{
        this.setState({value:date})
    }

    render() {

        const {value} = this.state
        let propsPicker = {
            disabled: false,
            onChange: this.onChange,
            value: value,
            // minDate: new Date(minDate),

        };
        const {listLeads} = this.props;
        return (
            <div style={{display: 'flex', flex: '1', flexDirection:'column', alignItems:'center', justifyContent:'center'}}> 
                <DatePicker
                    {...propsPicker}
                />
                <br/>
                <br/>
                <br/>
                <br/>
                <div style={{padding: '20px'}}>
                    <ul>
                        {listLeads.map((lead, index) => <li key={index} >lead.Name</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

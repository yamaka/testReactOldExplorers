import React, { Component } from 'react';
// Components
import { Link } from 'react-router-dom';
// Context
import { withUser } from './UserContext';

@withUser
export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/leads">Leads</Link>
                    </li>
                    <li>
                        <Link to="/solicitudes">Solicitudes</Link>
                    </li>
                    <li>
                        <Link to="/folder-completed">Carpetas</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

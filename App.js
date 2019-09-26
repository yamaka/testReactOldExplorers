import React from 'react';
import SettingRouter from './router';

import { UserProvider } from './UserContext';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            isSignedIn: false,
            toPublicAuth: true,
        };
    }

    render() {
        return (
            <UserProvider>
                <SettingRouter />
            </UserProvider>
        );
    }
}

import React, { Component } from 'react';

const UserContext = React.createContext({});

export function withUser(Component) {
    return function UserConsumer(props) {
        return (
            <UserContext.Consumer>
                {actions => <Component {...props} {...actions} />}
            </UserContext.Consumer>
        );
    };
}

export class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.setUser = User => {
            this.setState({ User });
        };
        this.setCalendars = Calendar => {
            this.setState({ Calendar });
        };

        this.setSubscriptionOnesignal = isSubscribeOnesignal => {
            this.setState({ isSubscribeOnesignal });
        };

        this.deleteCalendars = () => {
            this.setState({ Calendar: null });
        };

        this.deleteUser = () => {
            this.setState({ User: null });
        };

        this.setNavigateToURL = (route, params) => {
            this.setState({
                navigateTo: { route, params },
            });
        };

        this.setNotifications = arr => {
            this.setState({
                notifications: arr,
            });
        };

        this.state = {
            User: null,
            Calendar: null,
            isSubscribeOnesignal: null,
            navigateTo: null,
            setUser: this.setUser,
            setCalendars: this.setCalendars,
            setSubscriptionOnesignal: this.setSubscriptionOnesignal,
            deleteCalendars: this.deleteCalendars,
            deleteUser: this.deleteUser,
            setNavigateToURL: this.setNavigateToURL,
            notifications: [],
            setNotifications: this.setNotifications,
        };
    }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

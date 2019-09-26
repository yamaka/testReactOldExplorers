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
        this.state = {
            listLeads: [
            {
                Name:'fulano'
            },
            {
                Name: 'mengano'
            },
            {
                Name: 'zotano'
            }
        ],
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

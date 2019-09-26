import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';

// import ApiConfig from './src/page/ApiConfig';
import Config from './Config';
import Home from './Home';
import Leads from './Leads';



const demo = () => {
    return <div>Página no encontrada</div>;
};
const Router = Config.isLocalEnv() ? HashRouter : BrowserRouter;
class SettingRouter extends Component {
    render() {
        return (
            <Router basename={`${Config.ROUTER_BASENAME}/`}>
                {/* <ApiConfig> */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/leads" component={Leads} />

                        <Route component={demo} />
                    </Switch>
                {/* </ApiConfig> */}
            </Router>
        );
    }
}

export default SettingRouter;

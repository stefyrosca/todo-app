import * as React from "react";
import {CoreLayoutComponent} from "./core-layout.component";
import routes from "../routes/index";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Wrapper} from "../reducers/wrapper.component";

export class AppComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.actions = [];
    }

    render() {
        return <BrowserRouter>
            <CoreLayoutComponent>
                <Switch>
                    {routes.map((route, index) => {
                        return <Route path={route.path}
                                      component={Wrapper(route.component, this.props.store, this.props.actions)}
                                      key={index}/>
                    })}
                </Switch>
            </CoreLayoutComponent>
        </BrowserRouter>
    }
}
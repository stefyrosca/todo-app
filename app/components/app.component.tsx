import * as React from "react";
import {CoreLayoutComponent} from "./core-layout.component";
import routes from "../routes/index";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Store, Action} from "reactive-state";
import {AppState} from "../reducers/state";
import {Wrapper} from "../reducers/wrapper.component";

export class AppComponent extends React.Component<{ store: Store<AppState>, actions: Action<any>[] }, any> {

    actions: any;

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
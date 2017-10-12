import * as React from "react";
import {CoreLayoutComponent} from "./core-layout.component";
import routes from "../routes/index";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export class AppComponent extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {
        return <BrowserRouter>
            <CoreLayoutComponent>
                <Switch>
                    {routes.map((route, index) => {
                        return <Route path={route.path} component={route.component} key={index}/>
                    })}
                </Switch>
            </CoreLayoutComponent>
        </BrowserRouter>
    }
}
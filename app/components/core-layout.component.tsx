import * as React from "react";
import routes from "../routes/index";
import {Link, NavLink} from "react-router-dom";

export class CoreLayoutComponent extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <span><NavLink className={"navbar-brand"} to={'/'}>Main page here</NavLink></span>
                        <ul className={"nav navbar-nav"}>
                            {routes
                                .filter(route => route.shouldDisplay)
                                .map((route, index) => {
                                    return <li key={index}><NavLink to={route.path}>{route.display}</NavLink></li>
                                })}
                        </ul>
                    </div>
                </div>
            </nav>
            {this.props.children}
        </div>
    }
}
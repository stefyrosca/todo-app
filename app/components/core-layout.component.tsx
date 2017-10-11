import * as React from "react";
import routes from "../routes/index";
import {Link, NavLink} from "react-router-dom";

export class CoreLayoutComponent extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>Main page here
            <nav>
                <ul>
                    {routes.map((route, index) => {
                        return <li key={index}><NavLink to={route.path}>{route.display}</NavLink></li>
                    })}
                </ul>
            </nav>
            {this.props.children}
        </div>
    }
}
import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppComponent} from "./components/app.component";

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
    <AppComponent/>,
    MOUNT_NODE
);
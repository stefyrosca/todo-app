import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppComponent} from "./components/app.component.jsx";
import {AppState, createStore} from "./reducers/state";

const MOUNT_NODE = document.getElementById('root');

const {store, actions} = createStore();

ReactDOM.render(
    <AppComponent store={store} actions={actions}/>,
    MOUNT_NODE
);
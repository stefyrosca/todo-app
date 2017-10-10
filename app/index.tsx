import * as React from "react";
import * as ReactDOM from "react-dom";
import {TodoListComponent} from "./routes/todo-list/todo-list.component";

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
    <TodoListComponent/>,
    MOUNT_NODE
);
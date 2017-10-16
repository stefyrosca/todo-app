import * as React from 'react'
import {ToDo} from "../../model/todo.model";
import {ToDoStatus} from "../../model/todo-status.model";
import {TodoComponent} from "../../components/todo.component";
import todoService from '../../api/todo.service'
import {Subject} from "rxjs/Subject";
import {RouteComponentProps} from "react-router";
import {ToDoProps, todoSelector, ToDoState} from "../../reducers/todo-reducer";
import {connect} from "../../reducers/wrapper.component";

interface TodoListProps extends RouteComponentProps<any>, ToDoProps, ToDoState {
}

interface TodoListState {
    todos: { [id: string]: ToDo };
}

export class TodoListComponent extends React.Component<TodoListProps, TodoListState> {
    constructor(props) {
        super(props);
        this.state = {todos: {}};
        this.updateStatus = this.updateStatus.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    componentWillMount() {
        this.props.ADD_TODO(new ToDo('asdi', 'desc', ToDoStatus.DONE))
    }

    render() {
        return <div className={"container"}>
            <h4 className={"page-header"}> To do list </h4>
            <div>
                {
                    this.props.todos.map((todo: ToDo) => <TodoComponent key={todo.id} item={todo}
                                                                        updateStatus={this.updateStatus}
                                                                        redirect={this.redirect}/>)
                }
            </div>
        </div>
    }

    updateStatus(id: string, status: ToDoStatus) {
        let item = this.state.todos[id];
        if (!item)
            return;
        let newItem = Object.assign({}, item, {status});
        todoService.updateToDo(newItem);
    }

    redirect(id: string) {
        this.props.history.push(`/${id}`);
    }

    componentWillUnmount() {
        this.props.DELETE_TODO('asdi');
    }

}

export default connect(todoSelector)(TodoListComponent)

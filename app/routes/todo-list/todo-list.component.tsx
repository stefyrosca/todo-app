import * as React from 'react'
import {ToDo} from "../../model/todo.model";
import {ToDoStatus} from "../../model/todo-status.model";
import {TodoComponent} from "../../components/todo.component";
import todoService from '../../api/todo.service'
import {Subject} from "rxjs/Subject";
import {RouteComponentProps} from "react-router";

interface TodoListProps extends RouteComponentProps<any> {
}

interface TodoListState {
    todos: { [id: string]: ToDo };
}

export class TodoListComponent extends React.Component<TodoListProps, TodoListState> {
    private subscription: Subject<any>;

    constructor(props) {
        super(props);
        this.state = {todos: {}};
        this.updateStatus = this.updateStatus.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    componentWillMount() {
        this.subscription = todoService.getAll().subscribe(
            todos => this.setState(Object.assign({}, this.state, {todos})),
            error => console.log(error),
            () => {
            });
    }

    render() {
        return <div className={"container"}>
            <h4 className={"page-header"}> To do list </h4>
            <div>
                {

                    Object.keys(this.state.todos)
                        .map(id => <TodoComponent key={id} item={this.state.todos[id]}
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
        // dispose
        this.subscription.unsubscribe();
    }
}
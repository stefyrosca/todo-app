import * as React from 'react'
import {ToDo} from "../../model/todo.model";
import {ToDoStatus} from "../../model/todo-status.model";
import {TodoViewComponent} from "../../components/todo-view.component";
import todoService from '../../api/todo.service'
import {Subject} from "rxjs/Subject";
import {RouteComponentProps} from "react-router";

interface TodoListProps extends RouteComponentProps<any>{
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
            () => {});
    }

    render() {
        return <div>
            <h4> To do list </h4>
            {
                Object.keys(this.state.todos)
                    .map(id => <TodoViewComponent key={id} item={this.state.todos[id]}
                                                  updateStatus={this.updateStatus}
                                                  redirect={this.redirect}/>)
            }
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
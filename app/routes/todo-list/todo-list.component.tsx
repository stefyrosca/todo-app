import * as React from 'react'
import {ToDo} from "../../model/todo.model";
import {ToDoStatus} from "../../model/todo-status.model";
import {TodoViewComponent} from "../../components/todo-view.component";

interface TodoListProps {
    history: any;
}

interface TodoListState {
    todos: {[id: string]: ToDo};
}

export class TodoListComponent extends React.Component<TodoListProps, TodoListState> {

    constructor(props) {
        super(props);
        let todos = {};
        for (let i = 0; i < 10; i++) {
            let id = `id${i}`;
            let status = Object.keys(ToDoStatus)[i%3];
            todos[id] = new ToDo(id, `desc${i}`, ToDoStatus[status]);
        }
        this.state = {todos};
        this.updateStatus = this.updateStatus.bind(this);
        this.redirect = this.redirect.bind(this);

    }

    render() {
        return <div>
            <h4> To do list </h4>
            {
                Object.keys(this.state.todos).map(id => <TodoViewComponent key={id} item={this.state.todos[id]} updateStatus={this.updateStatus} redirect={this.redirect}/>)
            }
        </div>
    }

    updateStatus(id: string, status: ToDoStatus) {
        let item = this.state.todos[id];
        if (!item)
            return;
        let newItem = Object.assign({}, item, {status});
        let newTodos = Object.assign({}, this.state.todos);
        newTodos[id] = newItem;
        this.setState(Object.assign({}, this.state, {todos: newTodos}));
    }

    redirect(id:string) {
        this.props.history.push(id);
    }
}
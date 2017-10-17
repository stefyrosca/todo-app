import * as React from 'react'
import {ToDo} from "../../model/todo.model.js";
import {ToDoStatus} from "../../model/todo-status.model.js";
import {TodoComponent} from "../../components/todo.component.jsx";
import {RouteComponentProps} from "react-router";
import {ToDoProps, todoSelector, ToDoState} from "../../reducers/todo-reducer";
import {connect} from "../../reducers/wrapper.component.jsx";
import {CreateTodoComponent} from "./create-todo.component.jsx";

export class TodoListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visibleAddItem: false};
        this.redirect = this.redirect.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
    }

    componentWillMount() {
        // this.props.ADD_TODO(new ToDo('asdi', 'desc', ToDoStatus.DONE))
    }

    render() {
        return <div className={"container"}>
            <h4 className={"page-header"}> To do list </h4>
            <div>
                {
                    this.props.todos.map(todo => <div key={todo.id} style={{marginBottom: 10}}><TodoComponent
                                                                                                        item={todo}
                                                                                                        redirect={this.redirect}/>
                    </div>)
                }
            </div>
            <div>
                {this.state.visibleAddItem ? <CreateTodoComponent/> :
                    <button className="btn btn-sm btn-primary" onClick={this.addNewItem}>
                        Add new item
                    </button>
                }
            </div>
        </div>
    }

    addNewItem() {
        if (this.state.visibleAddItem) {
            console.log('create new')
        } else {
            console.log('clicked!!')
            this.setState({...this.state, visibleAddItem: true})
        }
    }


    redirect(id) {
        this.props.history.push(`/${id}`);
    }

    componentWillUnmount() {
        // this.props.DELETE_TODO('asdi');
    }

}

export default connect(todoSelector)(TodoListComponent)

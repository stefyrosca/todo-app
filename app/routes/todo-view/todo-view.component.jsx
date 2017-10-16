import * as React from 'react'
import ToDoService from '../../api/todo.service.js'
import {ToDo} from "../../model/todo.model.js";
import {TodoComponent} from "../../components/todo.component.jsx";

export class TodoViewComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (!this.props.item && this.props.match)
            this.localItem = ToDoService.getById(this.props.match.params.id);
    }

    render() {
        let item = this.props.item || this.localItem;
        if (!item)
            return <div> No item provided! </div>;
        return <div className="container">
            <TodoComponent item={this.localItem}/>
        </div>
    }
}
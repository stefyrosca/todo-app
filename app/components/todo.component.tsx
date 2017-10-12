import * as React from 'react'
import {ToDo} from "../model/todo.model";
import {ToDoStatus} from "../model/todo-status.model";
import ToDoService from '../api/todo.service'
import {match} from "react-router";
import './style.css'

interface TodoViewProps {
    item: ToDo;
    updateStatus: (id: string, status: ToDoStatus) => void;
    redirect: (id: string) => void;
    match?: match<any>;
}

interface TodoViewState {

}

export class TodoComponent extends React.Component<TodoViewProps, TodoViewState> {

    localItem: ToDo;

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
            <div className="row">
                <div className="col-lg-3">{item.description}</div>
                <div className="col-lg-3">{item.status}</div>
                <div className="col-lg-3">{
                    <select value={item.status} disabled={!this.props.updateStatus}
                            onChange={(event) => this.props.updateStatus(item.id, ToDoStatus[event.target.value])}>
                        {Object.keys(ToDoStatus).map((status, index) => <option value={status}
                                                                                key={index}>{status}</option>)}
                    </select>
                }
                </div>
                <div className='col-lg-3'>
                    {
                        this.props.redirect && <button className="btn btn-sm btn-info"
                                                       onClick={(event) => this.props.redirect(item.id)}>View
                            details</button>
                    }
                </div>
            </div>
        </div>
    }
}
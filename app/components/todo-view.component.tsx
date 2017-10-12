import * as React from 'react'
import {ToDo} from "../model/todo.model";
import {ToDoStatus} from "../model/todo-status.model";
import './style.css'
import ToDoService from '../api/todo.service'
import {match} from "react-router";

interface TodoViewProps {
    item: ToDo;
    updateStatus: (id: string, status: ToDoStatus) => void;
    redirect: (id: string) => void;
    match?: match<any>;
}

interface TodoViewState {

}

export class TodoViewComponent extends React.Component<TodoViewProps, TodoViewState> {

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
        return <div style={{width: '90%', margin: 'auto', display: 'flex', flex: 1}}>
            <div className={'description'}>{item.description}</div>
            <div className={'status'}>{item.status}</div>
            <div style={{flex: 1}}>{
                <select value={item.status}
                        onChange={(event) => this.props.updateStatus(item.id, ToDoStatus[event.target.value])}>
                    {Object.keys(ToDoStatus).map((status, index) => <option value={status}
                                                                            key={index}>{status}</option>)}
                </select>
            }
            </div>
            <div>
                {
                    this.props.redirect && <button onClick={(event) => this.props.redirect(item.id)}>View details</button>
                }
            </div>
        </div>
    }
}
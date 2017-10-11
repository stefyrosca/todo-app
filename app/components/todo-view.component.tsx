import * as React from 'react'
import {ToDo} from "../model/todo.model";
import {ToDoStatus} from "../model/todo-status.model";
import './style.css'

interface TodoViewProps {
    item: ToDo;
    updateStatus: (id:string, status:ToDoStatus) => void;
    redirect: (id:string) => void;
}

interface TodoViewState {

}


export class TodoViewComponent extends React.Component<TodoViewProps,TodoViewState> {

    constructor(props) {
        super(props);

    }

    render() {
        if (!this.props.item)
            return <div> No item provided! </div>;
        return <div style={{width: '90%', margin: 'auto', display: 'flex', flex: 1}}>
            <div className={'description'}>{this.props.item.description}</div>
            <div className={'status'}>{this.props.item.status}</div>
            <div style={{flex: 1}}>{
                <select value={this.props.item.status} onChange={(event)=>this.props.updateStatus(this.props.item.id, ToDoStatus[event.target.value])}>
                    {Object.keys(ToDoStatus).map((status, index) => <option value={status} key={index}>{status}</option>)}
                </select>
            }
            </div>
            <div>
                <button  onClick={(event)=>{this.props.redirect(`todo/${this.props.item.id}`)}}>View details</button>
            </div>
        </div>
    }
}
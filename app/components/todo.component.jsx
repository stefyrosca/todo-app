import * as React from 'react'
import {ToDoStatus} from "../model/todo-status.model.js";

export class TodoComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        let item = this.props.item;
        if (!item)
            return <div> No item provided! </div>;
        return <div className="container">
            <div className="row">
                <div className="col-md-3">{item.description}</div>
                <div className="col-md-3">{item.status}</div>
                <div className="col-md-3">{
                    <select value={item.status}
                            onChange={(event) => {/*this.props.updateStatus(item.id, ToDoStatus[event.target.value])*/
                            }}
                    >
                        {Object.keys(ToDoStatus).map((status, index) => <option value={status}
                                                                                key={index}>{status}</option>)}
                    </select>
                }
                </div>
                <div className='col-md-3'>
                    {
                        this.props.redirect && <span>
                            <button
                                className="btn btn-sm btn-info"
                                onClick={(event) => this.props.redirect(item.id)}>
                                <span className="glyphicon glyphicon-info-sign" aria-hidden="true"/> View details
                        </button>
                        </span>
                    }
                </div>
            </div>
        </div>
    }
}
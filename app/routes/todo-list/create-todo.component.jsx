import * as React from 'react'

export class CreateTodoComponent extends React.Component {

    render() {
        return <div className="container">
            <h2>Small Modal</h2>
            <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Small Modal</button>

            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                        <div className="modal-body">
                            <p>This is a small modal.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
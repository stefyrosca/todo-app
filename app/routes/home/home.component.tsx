import * as React from 'react'

export class HomeComponent extends React.Component<any, any> {

    constructor(props) {
        super(props)
    }

    render() {
        return <h3 className={"jumbotron page-header container"}>Welcome home</h3>
    }
}
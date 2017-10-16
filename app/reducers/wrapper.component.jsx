import * as React from 'react'
import {AppState} from "./state";

export function connect(selector = state => state) {
    return function wrapWithConnect(BasicComponent) {
        return class WrappedComponent extends React.Component {
            componentWillMount() {
                this.props.store.select(selector, true).subscribe(payload => this.setState({...payload}));
            }

            render() {
                return <BasicComponent {...this.state} {...this.props}/>
            }

        }
    }
}

export const Wrapper = (BasicComponent, store, actions) => {
    return class WrappedComponent extends React.Component {
        render() {
            return <BasicComponent store={store} {...actions} {...this.props} />
        }
    }
};

import * as React from 'react'
import {AppState} from "./state";
import {Action, Store} from "reactive-state";
import {Observable} from 'rxjs/Observable'

export function connect(selector = state => state) {
    return function wrapWithConnect(BasicComponent) {
        return class WrappedComponent extends React.Component<any, any> {
            private subscription: any | Observable<any>;

            componentWillMount() {
                this.props.store.select(selector, true).subscribe(payload => this.setState({...payload}));
            }

            render() {
                return <BasicComponent {...this.state} {...this.props}/>
            }

        }
    }
}

export const Wrapper = (BasicComponent: new() => React.Component<any, any>, store: Store<AppState>, actions: Action<any>[]) => {
    return class WrappedComponent extends React.Component {
        render() {
            return <BasicComponent store={store} {...actions} {...this.props} />
        }
    }
};

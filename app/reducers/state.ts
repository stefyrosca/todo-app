import {Action, Store} from "reactive-state";
import {addTodoReducers, ToDoActions, todoInitialState, ToDoState} from "./todo-reducer";

export interface AppState {
    todo: ToDoState;
}

const initialState: AppState = {
    todo: todoInitialState
};

function getActions(actions): any {
    return Object.keys(actions)
        .reduce((akk, key) => ({ ...akk, [key]: (value: any) => (ToDoActions[key].action as any).next(value) }), {})
}


export function createStore(): {store: Store<AppState>, actions: Action<any>[]} {
    const store: Store<AppState> = Store.create(initialState);
    store.select(state => state).subscribe()
    addTodoReducers(store);
    const actions = getActions(ToDoActions);
    return {store, actions};
}

import {Action, Store} from "reactive-state";
import {addTodoReducers, ToDoActions, todoInitialState, ToDoState} from "./todo-reducer";


function getActions(actions) {
    return Object.keys(actions)
        .reduce((akk, key) => ({...akk, [key]: (value) => ToDoActions[key].action.next(value)}), {})
}


export function createStore() {
    const initialState = {
        todo: todoInitialState
    };
    const store = Store.create(initialState);
    addTodoReducers(store);
    const actions = getActions(ToDoActions);
    return {store, actions};
}

import {Action, Reducer, Store} from "reactive-state";
import {ToDo} from "../model/todo.model.js";
import {Subscription} from "rxjs/Subscription";
import {AppState} from "./state";
import {ToDoStatus} from "../model/todo-status.model.js";


const createMockTodos = () => {
    let todos = [];
    for (let i = 0; i < 10; i++) {
        let id = `id${i}`;
        let status = Object.keys(ToDoStatus)[i % 3];
        todos.push(new ToDo(id, `desc${i}`, ToDoStatus[status]));
    }
    return todos;
}

export const todoInitialState = {
    todos: createMockTodos()
}


const TODO_ACTIONS_TYPES = {
    ADD_TODO: 'ADD_TODO',
    EDIT_TODO: 'EDIT_TODO',
    DELETE_TODO: 'DELETE_TODO'
}

const createToDoAction = new Action(TODO_ACTIONS_TYPES.ADD_TODO);
const createToDoReducer = (state, payload) => {
    return {...state, todos: [...state.todos, payload]};
};

const deleteToDoAction = new Action(TODO_ACTIONS_TYPES.DELETE_TODO);
const deleteToDoReducer = (state, payload) => {
    let todos = state.todos.filter(todo => todo.id !== payload);
    return {...state, todos};
};


export const ToDoActions = {
    [TODO_ACTIONS_TYPES.ADD_TODO]: {action: createToDoAction, reducer: createToDoReducer},
    [TODO_ACTIONS_TYPES.DELETE_TODO]: {action: deleteToDoAction, reducer: deleteToDoReducer}
};

const subscriptions = [];

export const addTodoReducers = (store) => {
    const todoStore = store.createSlice('todo');
    Object.keys(ToDoActions).forEach(key => {
        subscriptions.push(todoStore.addReducer(ToDoActions[key].action, ToDoActions[key].reducer));
    });
};

export const todoSelector = state => state.todo;

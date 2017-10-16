import {Action, Reducer, Store} from "reactive-state";
import {ToDo} from "../model/todo.model";
import {Subscription} from "rxjs/Subscription";
import {AppState} from "./state";
import {ToDoStatus} from "../model/todo-status.model";

export interface ToDoState {
    todos: ToDo[];
}

export interface ToDoProps {
    ADD_TODO: (payload: ToDo) => void;
    EDIT_TODO: (payload: ToDo) => void;
    DELETE_TODO: (id: string) => void;
}

const createMockTodos = () => {
    let todos = [];
    for (let i = 0; i < 10; i++) {
        let id = `id${i}`;
        let status = Object.keys(ToDoStatus)[i % 3];
        todos.push(new ToDo(id, `desc${i}`, ToDoStatus[status]));
    }
    return todos;
}

export const todoInitialState: ToDoState = {
    todos: createMockTodos()
};


enum TODO_ACTIONS_TYPES {
    ADD_TODO = 'ADD_TODO',
    EDIT_TODO = 'EDIT_TODO',
    DELETE_TODO = 'DELETE_TODO'
}

const createToDoAction = new Action<ToDo>(TODO_ACTIONS_TYPES.ADD_TODO);
const createToDoReducer: Reducer<ToDoState, ToDo | any> = (state: ToDoState, payload: ToDo) => {
    return {...state, todos: [...state.todos, payload]};
};

const deleteToDoAction = new Action<string>(TODO_ACTIONS_TYPES.DELETE_TODO);
const deleteToDoReducer: Reducer<ToDoState, string | any> = (state: ToDoState, payload: string) => {
    let todos = state.todos.filter(todo => todo.id != payload);
    return {...state, todos};
};


export const ToDoActions = {
    [TODO_ACTIONS_TYPES.ADD_TODO]: {action: createToDoAction, reducer: createToDoReducer},
    [TODO_ACTIONS_TYPES.DELETE_TODO]: {action: deleteToDoAction, reducer: deleteToDoReducer}
};

const subscriptions: Subscription[] = [];

export const addTodoReducers = (store: Store<AppState>) => {
    const todoStore = store.createSlice<ToDoState>('todo');
    Object.keys(ToDoActions).forEach(key => {
        subscriptions.push(todoStore.addReducer(ToDoActions[key].action, ToDoActions[key].reducer));
    });
};

export const todoSelector = (state: AppState) => state.todo;

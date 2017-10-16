import {ToDo} from "../model/todo.model";
import {ToDoStatus} from "../model/todo-status.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/publish';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

export class TodoService {
    constructor() {
        this.todos = {};
        for (let i = 0; i < 10; i++) {
            let id = `id${i}`;
            let status = Object.keys(ToDoStatus)[i % 3];
            this.todos[id] = new ToDo(id, `desc${i}`, ToDoStatus[status]);
        }
        this.subject = new BehaviorSubject(this.todos);
        this.observable = Observable.from(Object.keys(this.todos).map(id => this.todos[id])).publish();
        setTimeout(() => {
            let id = '166767656';
            let toDo = new ToDo(id, `descriere`, ToDoStatus.DONE);
            this.todos[id] = toDo;
            this.subject.next(this.todos)
        }, 5000)
    }

    getAll() {
        return this.subject;
    }

    getById(id) {
        return this.todos[id];
    }

    updateToDo(todo) {
        this.todos[todo.id] = todo;
        this.subject.next(this.todos);
    }

}

export default new TodoService();
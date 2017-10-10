import {ToDoStatus} from "./todo-status.model";

export class ToDo {
    public constructor(public id: string, public description: string, public status: ToDoStatus) {}
}
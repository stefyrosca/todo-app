import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoViewComponent} from "../components/todo-view.component";

const routes: {path: string, component: any, display: string}[] = [
    {path: '/list', component: TodoListComponent, display: 'List'},
    {path: '/todo/:id', component: TodoViewComponent, display: 'View todo'}
];
export default routes;
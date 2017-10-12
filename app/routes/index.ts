import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoViewComponent} from "../components/todo-view.component";

const routes: {path: string, component: any, display: string, shouldDisplay: boolean}[] = [
    {path: '/list', component: TodoListComponent, display: 'List', shouldDisplay: true},
    {path: '/:id', component: TodoViewComponent, display: 'View todo', shouldDisplay: false}
];
export default routes;
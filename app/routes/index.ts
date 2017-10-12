import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoComponent} from "../components/todo.component";
import {HomeComponent} from "./home/home.component";

const routes: {path: string, component: any, display: string, shouldDisplay: boolean}[] = [
    {path: '/list', component: TodoListComponent, display: 'List', shouldDisplay: true},
    {path: '/:id', component: TodoComponent, display: 'View todo', shouldDisplay: false},
    {path: '/', component: HomeComponent, display: 'Home', shouldDisplay: false}
];
export default routes;
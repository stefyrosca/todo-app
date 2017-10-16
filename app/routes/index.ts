// import {TodoListComponent} from "./todo-list/todo-list.component";
import TodoListComponent from "./todo-list/todo-list.component";
import {HomeComponent} from "./home/home.component";
import {TodoViewComponent} from "./todo-view/todo-view.component";

const routes: {path: string, component: any, display: string, shouldDisplay: boolean}[] = [
    {path: '/list', component: TodoListComponent, display: 'List', shouldDisplay: true},
    {path: '/:id', component: TodoViewComponent, display: 'View todo', shouldDisplay: false},
    {path: '/', component: HomeComponent, display: 'Home', shouldDisplay: false}
];
export default routes;
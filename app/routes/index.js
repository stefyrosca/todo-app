import TodoListComponent from "./todo-list/todo-list.component.jsx";
import {HomeComponent} from "./home/home.component.jsx";
import {TodoViewComponent} from "./todo-view/todo-view.component.jsx";

const routes = [
    {path: '/list', component: TodoListComponent, display: 'List', shouldDisplay: true},
    {path: '/:id', component: TodoViewComponent, display: 'View todo', shouldDisplay: false},
    {path: '/', component: HomeComponent, display: 'Home', shouldDisplay: false}
];
export default routes;
import * as React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {TodoListComponent} from '../routes/todo-list/todo-list.component'
import {ToDoStatus} from "../model/todo-status.model";
import {ToDo} from "../model/todo.model";
import {CreateTodoComponent} from "../routes/todo-list/create-todo.component";

const todos = [];

beforeAll(() => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < 3; i++) {
            let id = `id${i}`;
            let status = Object.keys(ToDoStatus)[i % 3];
            todos.push(new ToDo(id, `desc${i}`, ToDoStatus[status]));
        }
        resolve(todos);
    });
});

test('render TodoList', () => {
    const component = renderer.create(
        <TodoListComponent todos={todos}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('click button TodoList', () => {
    const component = shallow(
        <TodoListComponent todos={todos}/>
    );
    const button = component.find('button');
    expect(button.text()).toEqual('Add new item');
    button.simulate('click');
    expect(component.find('button').length).toEqual(0);
    expect(component.find(CreateTodoComponent).length).toEqual(1);
});

afterAll(() => {
   return new Promise((resolve, reject) => {
       todos.clear();
       resolve(todos);
   })
});
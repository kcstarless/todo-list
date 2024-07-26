// index.js

import './styles/main.scss';

import { createTodo } from './todo';
import { createProject } from './project';
import { getTodoList } from './ListManager';
import { renderAllTodo } from './render';
import { loadSidebar } from './nav';

// Expose functions to the global scope for console use. Dev only.
window.createTodo = createTodo;
window.createProject = createProject;
window.getTodoList = getTodoList;

const myProject = createProject('project 1');
myProject.addTodo('Task 1', 'Task 1 Description', '07-02-2025', true);
myProject.addTodo('Task 2', 'Task 2 Description', '07-02-2025', false);

const yourProject = createProject('project yours');
createProject('3rd project');
yourProject.addTodo('Different Task', 'This is a different project', '07-02-2025', true);

console.log(myProject.getTodoList()); //all todos belonging to a project
console.log(getTodoList());

loadSidebar(getTodoList());
renderAllTodo(getTodoList());

// console.log(getTodoList()); //all todos (belong to project or without project)

// deleteTodo('Task 1 Updated');
// getTodo('Task 2').stateToggle();
// console.log(getTodo('Task 2'));
// console.log(getTodoList());

// renderTask(getTodo('Task 2'));


// console.log(getTodo('Task 2'));


// renderProject(myProject.getTitle());

// renderAllTodo(myProject.getTodoList(myProject.title), myProject.getTitle());
// project.js

import { createTodo } from './todo.js';
import { getProjectTodoList, updateProjectTodosTitle } from './ListManager.js';
const projectList = [];

export function createProject(title) {

    // constructor
    const project = { title };

    // add project to project list
    projectList.push(project);

    // adds todo to project and push to projectTodoList
    function addTodo(title, desc, date, priority) {
        createTodo(title, desc, date, priority, false, project.title);
    }
    
    
    function getTitle() {
        return project.title;
    }

    function setTitle(newTitle) {
        updateProjectTodosTitle(newTitle, project.title); // update all project todos title first
        project.title = newTitle; // update title
    }

    function getTodoList() {
        return getProjectTodoList(project.title);
    }

    return {
        addTodo,
        getTitle,
        setTitle,
        getTodoList
    };
}

export function getProjectList() {
    return projectList;
}
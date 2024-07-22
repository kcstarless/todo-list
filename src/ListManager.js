// listManager.js

let  todoList = [];

export function addToListManager(todo) {
    todoList.push(todo);
}

export function getTodo(title) {
    return todoList.find(todo => todo.title === title); // grabs todo by title
}
export function getTodoIndex(title) {
    return todoList.findIndex(todo => todo.title === title) // grabs todo by title    
}

export function getTodoList() {
    return todoList; // all todos
}

export function getProjectTodoList(title){
    return todoList.filter(todo => todo.project === title); // project todos
}

export function updateProjectTodosTitle(newTitle, oldTitle) {
    getProjectTodoList(oldTitle).forEach(todo => { todo.project = newTitle }); // update all project todos title
}

export function updateTodo(title, tobeUpdated){
    const index = getTodoIndex(title); //grab index from the list to update
    todoList[index] = { ...todoList[index], ...tobeUpdated }; //update todo
}

export function deleteTodo(title) {
    const index = getTodoIndex(title) //grab index from the list to delete
    todoList.splice(index, 1);
}


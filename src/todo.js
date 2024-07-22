// todo.js

import { parse, format } from 'date-fns';
import { addToListManager } from './ListManager.js';

export function createTodo (title, desc, date, priority = false, complete = false, project = null) {
    // constructor
    const newTodo = {
        title,
        desc,
        date: parse(date, 'dd-MM-yyyy', new Date()),
        priority,
        complete,
        project,
        stateToggle(){
            this.complete = !this.complete;
        },
        formattedDate() {
            return format(this.date, 'dd-MM-yyyy'); // Use your desired format here
        }
    };

    addToListManager(newTodo);
    return newTodo;
}






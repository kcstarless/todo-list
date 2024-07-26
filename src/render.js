const content = document.getElementsByClassName('content')[0];

export function renderTodo(todo) { 
    const todoElement = document.createElement('div');
    todoElement.classList.add('card-body');
    todoElement.classList.add(todo.priority && 'card-body--high');

    todoElement.innerHTML = `<div class="todo-summary">   
                                <p>
                                    <input class="btn btn--round" type="checkbox" ${todo.complete ?'checked' : ''}>
                                </p>
                                <p>${todo.title}</p>
                                <a href="#" class="btn-expand">▼</a>
                                <p class="project">${todo.project}</p>
                            </div>

                            <div class="todo-details" style="display: none;">
                                <p>${todo.desc}</p>
                                <p>${todo.formattedDate()}</p>
                            </div>
                       `;  
                       
    // Add event listener to the checkbox
    const checkbox = todoElement.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        todo.stateToggle();  // Toggle the state of the todo
        // renderAllTodo(todoList);  // Re-render todos to reflect updated state
    });

    const expandButton = todoElement.querySelector('.btn-expand');
    const todoDetails = todoElement.querySelector('.todo-details');

    expandButton.addEventListener('click', (e) => {
        e.preventDefault();  // Prevent default link behavior
        const isExpanded = todoDetails.style.display === 'flex';
        todoDetails.style.display = isExpanded ? 'none' : 'flex';
        expandButton.textContent = isExpanded ? '▼' : '▲';
    });

    return todoElement;
}

export function renderAllTodo(list, projectTitle = null){
    content.innerHTML = '';
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');

    if (projectTitle === null) {
        cardTitle.textContent = 'Today tasks!~';
    } else {
        cardTitle.textContent = projectTitle;
    }

    card.appendChild(cardTitle);

    list.forEach(todo => { 
        const todoListElement = renderTodo(todo);
        card.appendChild(todoListElement);
    });
    content.appendChild(card);   
}


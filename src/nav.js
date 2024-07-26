import { getProjectTodoList, getTodoList } from "./ListManager";
import { renderAllTodo } from "./render";
import { createProject, getProjectList } from "./project";
import { createTodo } from "./todo";
import { format, parse } from "date-fns";

export function loadSidebar() {
  sidebarToday();
  sidebarProject();
  bindAddTaskEvent();
  bindAddProjectEvent();
}

function sidebarToday() {
  const todaysTodos = getTodoList();
  const content = document.querySelector(".sidebar-today");
  content.innerHTML = "";

  // Create "Today's Todos" link
  const todayLink = document.createElement("li");
  const todayLinkElement = document.createElement("a");
  todayLinkElement.href = "#"; // Prevent default link behavior
  todayLinkElement.textContent = "Today";

  // Add event listener to render today's todos
  todayLinkElement.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default link behavior
    renderAllTodo(todaysTodos);
  });

  todayLink.appendChild(todayLinkElement);
  content.appendChild(todayLink);
}

function sidebarProject() {
  const projects = getProjectList();
  const content = document.querySelector(".sidebar-project");
  content.innerHTML = "";

  // project list sidebar
  projects.forEach((project) => {
    const projectLink = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.href = "#"; // Prevent default link behavior
    linkElement.textContent = project.title;

    // Add event listener to filter todos by project
    linkElement.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent the default link behavior
      console.log(project);
      renderAllTodo(getProjectTodoList(project.title), project.title); // Render todos filtered by project
    });

    projectLink.appendChild(linkElement);
    content.appendChild(projectLink);
  });
}

// Add proejct event
function bindAddProjectEvent() {
  const addProjectButton = document.querySelector(".btn--secondary.round");
  const modal = document.getElementById("add-project-modal");
  const close = document.getElementsByClassName("close")[1];
  const form = document.getElementById("add-project-form");

  addProjectButton.addEventListener("click", () => {
    modal.style.display = "block"; 
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });  
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectTitle = document.getElementById('add-project-title').value;
    console.log(projectTitle);
    console.log("hello");

    createProject(projectTitle);
    modal.style.display = "none";
    sidebarProject();

  });
}


// add task event
function bindAddTaskEvent() {
  const addTaskButton = document.querySelector(".btn--primary.round"); // Button for adding tasks
  const modal = document.getElementById("add-task-modal");
  const span = document.getElementsByClassName("close")[0];
  const form = document.getElementById("add-task-form");
  const projectSelect = document.getElementById("project-title");

  addTaskButton.addEventListener("click", () => {
    projectSelect.innerHTML = ""; // Clear previous options
    const projects = getProjectList();
    projects.forEach((project) => {
      // populate select priority with current projects
      const option = document.createElement("option");
      option.value = project.title;
      option.textContent = project.title;
      projectSelect.appendChild(option);
    });

    modal.style.display = "block";
  });

  span.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskTitle = document.getElementById("task-title").value;
    const taskDesc = document.getElementById("task-desc").value;
    const taskDate = document.getElementById("task-date").value;
    const taskPriority =
      document.getElementById("task-priority").value === "true";
    const projectTitle = document.getElementById("project-title").value;

    // Convert the date to the desired format
    const formattedDate = format(
      parse(taskDate, "yyyy-MM-dd", new Date()),
      "dd-MM-yyyy"
    );

    createTodo(
      taskTitle,
      taskDesc,
      formattedDate,
      taskPriority,
      false,
      projectTitle
    );
    renderAllTodo(getTodoList());
    modal.style.display = "none";
  });
}

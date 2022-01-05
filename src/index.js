'use strict';

// TODO:
// using draw/erase naming convention to denote the dom-changes that these functions will initiate when provided an object
// such as a task, todo, or project

// drawTodo
// eraseTodo
// drawProject
// eraseProject
// drawTask
// eraseTask
// drawTodoCt

// drawTodos
// eraseTodos
// drawTasks
// drawProjects
// updateProjectForm
// updateTodoForm
    // updateTodoTitle
    // updateTodoDueDate
    // updateTodoPriority
    // updateTodoTasks
    // updateTodoNotes

// Option form actions
// hideCompleteTodos
// displayCompleteTodos

// unhideProjectEditForm
// hideProjectEditForm

// unhideTodoEditForm
// hideTodoEditForm

// closeProjectEditForm
// closeTodoEditForm

// Import styling
import './stylesheets/style.css';

// Import Icons
import todoTitanIcon from './icons/todo-titan-icon.svg';
import addTodoIcon from './icons/add-todo-icon.svg';
import allTimeIcon from './icons/all-time-icon.svg';
import circleIcon from './icons/circle-icon.svg';
import createNewProjectIcon from './icons/create-new-project-icon.svg';
import githubIcon from './icons/github-icon.png';
import hideCompleteTodosIcon from './icons/hide-complete-todos-icon.svg';
import highPriorityIcon from './icons/high-priority-icon.svg';
import mediumPriorityIcon from './icons/medium-priority-icon.svg';
import lowPriorityIcon from './icons/low-priority-icon.svg';
import myProjectsIcon from './icons/my-projects-icon.svg';
import projectDeleteIcon from './icons/project-delete-icon.svg';
import projectEditIcon from './icons/project-edit-icon.svg';
import projectListIcon from './icons/project-list-icon.svg';
import stepsListIcon from './icons/steps-list-icon.svg';
import submitIcon from './icons/submit-icon.svg';
import taskAddIcon from './icons/task-add-icon.svg';
import taskCompleteIcon from './icons/task-complete-icon.svg';
import taskDeleteIcon from './icons/task-delete-icon.svg';
import taskIncompleteIcon from './icons/task-incomplete-icon.svg';
import thisWeekIcon from './icons/this-week-icon.svg';
import timeSensitiveTaskIcon from './icons/time-sensitive-task-icon.svg';
import todayIcon from './icons/today-icon.svg';
import todoCompleteIcon from './icons/todo-complete-icon.svg';
import todoDeleteIcon from './icons/todo-delete-icon.svg';
import todoEditIcon from './icons/todo-edit-icon.svg';
import todoExpandLessIcon from './icons/todo-expand-less-icon.svg';
import todoExpandMoreIcon from './icons/todo-expand-more-icon.svg';
import todoIncompleteIcon from './icons/todo-incomplete-icon.svg';

// Import DOM Elements
import DOM from './dom';
import App from './app';

// Set Constants
const TITLE_TEXT = 'Todo Titan';
const LOGO_TEXT = 'TODO Titan';
const FOOTER_TEXT = 'View Source code on';
const GITHUB_PROFILE_TEXT = 'Created by';
const GITHUB_PROJECT_URL = 'https://github.com/Drew-Daniels/todo_titan';
const GITHUB_PROFILE_CONTAINER_TEXT = 'Created by';
const GITHUB_PROFILE_URL = 'https://github.com/Drew-Daniels';
const GITHUB_PROFILE_ANCHOR_TEXT = 'Drew Daniels';

const HTML = DOM.getHTML();
const HEAD = DOM.getHead();

// +++++ INITIAL PAGE SETUP +++++
// === HEAD ===
const FAVICON = DOM.createFavicon(todoTitanIcon, HEAD);
const TITLE = DOM.createTitle(TITLE_TEXT, HEAD);

// === BODY (Content-Container) ===
const BODY = DOM.getBody();
DOM.addClasses(BODY, 'content-container');

// = CONTENT =
const CONTENT = DOM.createDiv(BODY, 'content');

// Header
const HEADER = DOM.createHeader(CONTENT);

const LOGO_NAME_CONTAINER = DOM.createDiv(HEADER, 'logo-name-container');
const LOGO_EL = DOM.createImage(LOGO_NAME_CONTAINER, todoTitanIcon, 'Todo Titan Checkmark Icon', 'logo')
const LOGO_TEXT_EL = DOM.createSpan(LOGO_NAME_CONTAINER, LOGO_TEXT, "logo-text");

const VIEW_PROJECTS_BUTTON = DOM.createButton(HEADER, 'option-btn', 'fancy-btn')
VIEW_PROJECTS_BUTTON.id = 'view-projects-btn';
const VIEW_PROJECTS_BUTTON_SPAN = DOM.createSpan(VIEW_PROJECTS_BUTTON, 'View Projects');
const VIEW_PROJECTS_BUTTON_IMAGE = DOM.createImage(VIEW_PROJECTS_BUTTON, projectListIcon);


// ++++++++++ Main ++++++++++
const MAIN = DOM.createMain(CONTENT);
// +++++ Project Pane +++++
const PROJECT_PANE      = DOM.createDiv(MAIN, 'project-pane');

// Default Project List for 'Time-Sensitive' Todos
const PROJECT_LIST_CONTAINER_TS = DOM.createDiv(PROJECT_PANE, 'project-list-container');
const TS_PROJECT_LIST_HEADER = DOM.createDiv(PROJECT_LIST_CONTAINER_TS, 'project-header');
const TS_PROJECT_LIST_HEADER_MAIN = DOM.createDiv(TS_PROJECT_LIST_HEADER, 'project-header-main');
const TS_PROJECT_LIST_ICON = DOM.createImage(TS_PROJECT_LIST_HEADER_MAIN, timeSensitiveTaskIcon, 'Time Sensitive Task Icon');
const TS_PROJECT_LIST_TITLE = DOM.createSpan(TS_PROJECT_LIST_HEADER_MAIN, 'Overview');
const TS_PROJECT_LIST_UL = DOM.createUL(PROJECT_LIST_CONTAINER_TS, 'project-list');
const TS_PROJECT_LIST_TD_LI = DOM.createLI(TS_PROJECT_LIST_UL, 'project');
const TS_PROJECT_LIST_TD_LI_BTN = DOM.createButton(TS_PROJECT_LIST_TD_LI, 'project-btn');
const TS_PROJECT_LIST_TD_LI_BTN_IMG = DOM.createImage(TS_PROJECT_LIST_TD_LI_BTN, todayIcon, 'Today Icon', 'project-image');
const TS_PROJECT_LIST_TD_LI_BTN_SPAN = DOM.createSpan(TS_PROJECT_LIST_TD_LI_BTN, 'Today', 'project-title');
const TS_PROJECT_LIST_TD_LI_NUM_TODOS_CONTAINER = DOM.createDiv(TS_PROJECT_LIST_TD_LI, 'num-todos-container');
const TS_PROJECT_LIST_TD_LI_NUM_TODOS = DOM.createSpan(TS_PROJECT_LIST_TD_LI_NUM_TODOS_CONTAINER, '0', 'num-todos');
const TS_PROJECT_LIST_TW_LI = DOM.createLI(TS_PROJECT_LIST_UL, 'project');
const TS_PROJECT_LIST_TW_LI_BTN = DOM.createButton(TS_PROJECT_LIST_TW_LI, 'project-btn');
const TS_PROJECT_LIST_TW_LI_BTN_IMG = DOM.createImage(TS_PROJECT_LIST_TW_LI_BTN, thisWeekIcon, 'This Week Icon', 'project-image');
const TS_PROJECT_LIST_TW_LI_BTN_SPAN = DOM.createSpan(TS_PROJECT_LIST_TW_LI_BTN, 'This Week', 'project-title');
const TS_PROJECT_LIST_TW_LI_NUM_TODOS_CONTAINER = DOM.createDiv(TS_PROJECT_LIST_TW_LI, 'num-todos-container');
const TS_PROJECT_LIST_TW_LI_NUM_TODOS = DOM.createSpan(TS_PROJECT_LIST_TW_LI_NUM_TODOS_CONTAINER, '0', 'num-todos');
const TS_PROJECT_LIST_ALL_LI = DOM.createLI(TS_PROJECT_LIST_UL, 'project');
const TS_PROJECT_LIST_ALL_LI_BTN = DOM.createButton(TS_PROJECT_LIST_ALL_LI, 'project-btn');
const TS_PROJECT_LIST_ALL_LI_BTN_IMG  = DOM.createImage(TS_PROJECT_LIST_ALL_LI_BTN, allTimeIcon, 'All Time Icon', 'project-image');
const TS_PROJECT_LIST_ALL_LI_BTN_SPAN = DOM.createSpan(TS_PROJECT_LIST_ALL_LI_BTN, 'All', 'project-title');
const TS_PROJECT_LIST_ALL_LI_NUM_TODOS_CONTAINER = DOM.createDiv(TS_PROJECT_LIST_ALL_LI, 'num-todos-container');
const TS_PROJECT_LIST_ALL_LI_NUM_TODOS = DOM.createSpan(TS_PROJECT_LIST_ALL_LI_NUM_TODOS_CONTAINER, '0', 'num-todos');

// Custom Project List for 'User-Specific' Todos
const PROJECT_LIST_CONTAINER_US = DOM.createDiv(PROJECT_PANE, 'project-list-container');
const US_PROJECT_LIST_HEADER = DOM.createDiv(PROJECT_LIST_CONTAINER_US, 'project-header');
const US_PROJECT_LIST_HEADER_MAIN = DOM.createDiv(US_PROJECT_LIST_HEADER, 'project-header-main');
const US_PROJECT_LIST_ICON = DOM.createImage(US_PROJECT_LIST_HEADER_MAIN, myProjectsIcon, 'My Projects Icon');
const US_PROJECT_LIST_TITLE = DOM.createSpan(US_PROJECT_LIST_HEADER_MAIN, 'My Projects');
const US_PROJECT_LIST_UL = DOM.createUL(PROJECT_LIST_CONTAINER_US, 'project-list');

// +++++ TODO PANE +++++
const TODO_PANE = DOM.createDiv(MAIN, 'todo-pane');
// TODO OPTIONS BAR
const TODO_OPTIONS_BAR = DOM.createDiv(TODO_PANE, 'todo-options-bar');
const TODO_OPTIONS_LIST = DOM.createUL(TODO_OPTIONS_BAR, 'todo-options-list');
const TODO_OPTIONS_LI_ADD_TODO = DOM.createLI(TODO_OPTIONS_LIST, 'todo-options-list-item');
const TODO_OPTIONS_LI_ADD_TODO_BTN = DOM.createButton(TODO_OPTIONS_LI_ADD_TODO, 'option-btn', 'fancy-btn');
const TODO_OPTIONS_LI_ADD_TODO_BTN_SPAN = DOM.createSpan(TODO_OPTIONS_LI_ADD_TODO_BTN, 'Add a Todo','todo-option-text')
const TODO_OPTIONS_LI_ADD_TODO_BTN_IMG = DOM.createImage(TODO_OPTIONS_LI_ADD_TODO_BTN, addTodoIcon, 'Add Todo Icon', 'option-image');
const TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS = DOM.createLI(TODO_OPTIONS_LIST, 'todo-options-list-item');
const TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN = DOM.createButton(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS, 'option-btn', 'fancy-btn');
const TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN_SPAN = DOM.createSpan(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN, 'Hide Complete Todos','todo-option-text')
const TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN_IMG = DOM.createImage(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN, hideCompleteTodosIcon, 'Hide Complete Todos Icon', 'option-image');
const TODO_OPTIONS_LI_EDIT_THIS_PROJECT = DOM.createLI(TODO_OPTIONS_LIST, 'todo-options-list-item');
const TODO_OPTIONS_LI_EDIT_THIS_PROJECT_BTN = DOM.createButton(TODO_OPTIONS_LI_EDIT_THIS_PROJECT, 'option-btn', 'fancy-btn');
const TODO_OPTIONS_LI_EDIT_THIS_PROJECT_BTN_SPAN = DOM.createSpan(TODO_OPTIONS_LI_EDIT_THIS_PROJECT_BTN, 'Edit this project','todo-option-text')
const TODO_OPTIONS_LI_EDIT_THIS_PROJECT_BTN_IMG = DOM.createImage(TODO_OPTIONS_LI_EDIT_THIS_PROJECT_BTN, projectEditIcon, 'Project Edit Icon', 'option-image');
const TODO_OPTIONS_LI_DELETE_THIS_PROJECT = DOM.createLI(TODO_OPTIONS_LIST, 'todo-options-list-item');
const TODO_OPTIONS_LI_DELETE_THIS_PROJECT_BTN = DOM.createButton(TODO_OPTIONS_LI_DELETE_THIS_PROJECT, 'option-btn', 'fancy-btn');
const TODO_OPTIONS_LI_DELETE_THIS_PROJECT_BTN_SPAN = DOM.createSpan(TODO_OPTIONS_LI_DELETE_THIS_PROJECT_BTN, 'Delete this project','todo-option-text')
const TODO_OPTIONS_LI_DELETE_THIS_PROJECT_IMG = DOM.createImage(TODO_OPTIONS_LI_DELETE_THIS_PROJECT_BTN, projectDeleteIcon, 'Delete this project icon', 'option-image');

// TODO LIST
const TODO_LIST        = DOM.createUL(TODO_PANE, 'todo-list');

// PROJECT EDIT PANE
const PROJECT_EDIT_PANE = DOM.createDiv(MAIN, 'project-edit-pane', 'hide');
const PROJECT_EDIT_PANE_FORM = DOM.createForm(PROJECT_EDIT_PANE);
const PROJECT_EDIT_PANE_FORM_HEADER = DOM.createSpan(PROJECT_EDIT_PANE_FORM, 'Edit Project', 'form-header', 'fancy-header');
const PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_SECTION = DOM.createDiv(PROJECT_EDIT_PANE_FORM, 'edit-project-title-section', 'form-section');
const PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_LABEL = DOM.createLabel(PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_SECTION, 'project-title', 'Project Title:','project-title-label');
const PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_INPUT = DOM.createInput(PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_SECTION, 'text', 'project-title', 'Current Project Name');

const PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER = DOM.createDiv(PROJECT_EDIT_PANE_FORM, 'submission-container');
const PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER_BTN = DOM.createButton(PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER, 'submit-changes-btn', 'fancy-btn');
const PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER_BTN_IMG = DOM.createImage(PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER_BTN, submitIcon);

// TODO EDIT PANE
const TODO_EDIT_PANE    = DOM.createDiv(MAIN, 'todo-edit-pane');
const TODO_EDIT_PANE_FORM = DOM.createForm(TODO_EDIT_PANE, '');
const TODO_EDIT_PANE_FORM_HEADER = DOM.createSpan(TODO_EDIT_PANE_FORM, 'Edit Todo', 'form-header', 'fancy-header');

const TODO_EDIT_PANE_FORM_EDIT_TODO_TITLE_SECTION = DOM.createDiv(TODO_EDIT_PANE_FORM, 'edit-todo-title-section', 'form-section');
const TODO_EDIT_PANE_FORM_EDIT_TODO_TITLE_LABEL = DOM.createLabel(TODO_EDIT_PANE_FORM_EDIT_TODO_TITLE_SECTION, 'todo-title', 'Todo Title:', 'todo-title-label');
const TODO_EDIT_PANE_FORM_EDIT_TODO_TITLE_INPUT = DOM.createInput(TODO_EDIT_PANE_FORM_EDIT_TODO_TITLE_SECTION, 'text', 'todo-title', 'Current Todo Title')

const TODO_EDIT_PANE_FORM_EDIT_TODO_DUE_DATE_SECTION = DOM.createDiv(TODO_EDIT_PANE_FORM, 'form-section');
const TODO_EDIT_PANE_FORM_EDIT_TODO_DUE_DATE_LABEL = DOM.createLabel(TODO_EDIT_PANE_FORM_EDIT_TODO_DUE_DATE_SECTION, 'todo-due-date', 'Due Date:', 'todo-due-date-label');
const TODO_EDIT_PANE_FORM_EDIT_TODO_DUE_DATE_INPUT = DOM.createInput(TODO_EDIT_PANE_FORM_EDIT_TODO_DUE_DATE_SECTION, 'date', 'todo-due-date', '2022-12-31');

const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_SECTION = DOM.createDiv(TODO_EDIT_PANE_FORM, 'form-section');
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LABEL = DOM.createSpan(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_SECTION, 'Priority:', 'todo-priority-level-label');
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_CONTAINER = DOM.createDiv(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_SECTION, 'priority-level-container');
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_1 = DOM.createDiv(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_CONTAINER, 'priority-level-line');
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_1_INPUT = DOM.createInput(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_1, 'radio', 'priority-level', 'high-priority');
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_1_LABEL = DOM.createLabel(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_1, 'priority-level-1', 'High');

const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_2 = DOM.createDiv(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_CONTAINER, 'priority-level-line');
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_2_INPUT = DOM.createInput(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_2, 'radio', 'priority-level', 'high-priority');
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_2_LABEL = DOM.createLabel(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_2, 'priority-level-2', 'Medium');

const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_3 = DOM.createDiv(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_CONTAINER, 'priority-level-line');
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_3_INPUT = DOM.createInput(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_3, 'radio', 'priority-level', 'high-priority');
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_3_LABEL = DOM.createLabel(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_3, 'priority-level-3', 'Low');


const TODO_EDIT_PANE_FORM_EDIT_TODO_TASK_SECTION = DOM.createDiv(TODO_EDIT_PANE_FORM, 'form-section');
const TODO_EDIT_PANE_FORM_EDIT_TODO_TASK_LABEL = DOM.createSpan(TODO_EDIT_PANE_FORM_EDIT_TODO_TASK_SECTION, 'Tasks:', 'todo-tasks-label');
const TODO_EDIT_PANE_FORM_EDIT_TODO_TASK_LIST = DOM.createUL(TODO_EDIT_PANE_FORM_EDIT_TODO_TASK_SECTION, 'task-list');

const TODO_EDIT_PANE_FORM_EDIT_TODO_ADD_TASK_SECTION = DOM.createDiv(TODO_EDIT_PANE_FORM, 'form-section');
const TODO_EDIT_PANE_FORM_EDIT_TODO_ADD_TASK_BTN = DOM.createButton(TODO_EDIT_PANE_FORM_EDIT_TODO_ADD_TASK_SECTION, 'add-task-btn', 'fancy-btn');
const TODO_EDIT_PANE_FORM_EDIT_TODO_ADD_TASK_BTN_IMG = DOM.createImage(TODO_EDIT_PANE_FORM_EDIT_TODO_ADD_TASK_BTN, taskAddIcon, 'Add task icon');
const TODO_EDIT_PANE_FORM_EDIT_TODO_ADD_TASK_BTN_SPAN = DOM.createSpan(TODO_EDIT_PANE_FORM_EDIT_TODO_ADD_TASK_BTN, 'Add a task');

const TODO_EDIT_PANE_FORM_EDIT_TODO_NOTES_SECTION = DOM.createDiv(TODO_EDIT_PANE_FORM, 'form-section');
const TODO_EDIT_PANE_FORM_EDIT_TODO_NOTES_LABEL = DOM.createLabel(TODO_EDIT_PANE_FORM_EDIT_TODO_NOTES_SECTION, 'todo-notes', 'Notes:');
const TODO_EDIT_PANE_FORM_EDIT_TODO_NOTES_TEXTAREA = DOM.createTextArea(TODO_EDIT_PANE_FORM_EDIT_TODO_NOTES_SECTION,'todo-notes', '30', '10', undefined);

const TODO_EDIT_PANE_FORM_EDIT_TODO_SUBMISSION_CONTAINER = DOM.createDiv(TODO_EDIT_PANE_FORM, 'submission-container');
const TODO_EDIT_PANE_FORM_EDIT_TODO_SUBMISSION_BTN = DOM.createButton(TODO_EDIT_PANE_FORM_EDIT_TODO_SUBMISSION_CONTAINER, 'submit-changes-btn', 'fancy-btn');
const TODO_EDIT_PANE_FORM_EDIT_TODO_SUBMISSION_BTN_IMG = DOM.createImage(TODO_EDIT_PANE_FORM_EDIT_TODO_SUBMISSION_BTN, submitIcon, 'Submit Icon');

// Footer
const FOOTER = DOM.createFooter(CONTENT);
DOM.setInnerText(FOOTER, FOOTER_TEXT);

const GITHUB_PROJECT_ANCHOR = DOM.createAnchor(FOOTER, GITHUB_PROJECT_URL);
const GITHUB_IMG = DOM.createImage(GITHUB_PROJECT_ANCHOR, githubIcon, 'Github Icon', 'github-icon')

const GITHUB_PROFILE_CONTAINER = DOM.createDiv(FOOTER, 'github-profile-container');
GITHUB_PROFILE_CONTAINER.innerText = GITHUB_PROFILE_CONTAINER_TEXT;

const GITHUB_PROFILE_ANCHOR = DOM.createAnchor(GITHUB_PROFILE_CONTAINER, GITHUB_PROFILE_URL, 'github-profile-link');
GITHUB_PROFILE_ANCHOR.innerText = GITHUB_PROFILE_ANCHOR_TEXT;


// UI Functions
function applyBtnFunction(btn, fn) {
    btn.onClick = fn;
}
function drawTaskEdit(task=undefined) {
    let taskList = TODO_EDIT_PANE_FORM_EDIT_TODO_TASK_LIST;
    let title;
    let taskImg;
    if (task === undefined) {
        title = 'New Task';
    } else {
        title = task.getTitle();
        if (task.isComplete === true) {
            taskImg = taskCompleteIcon;
        } else {
            taskImg = taskIncompleteIcon;
        }
    }
    let LI = DOM.createLI(taskList, 'task');
    let btn = DOM.createButton(LI, 'task-checkbox');
    let img = DOM.createImage(btn, taskImg);
    let input = DOM.createInput(LI,'text', 'tasks', title);
    let deleteBtn = DOM.createButton(LI);
    let deleteBtnImg = DOM.createImage(deleteBtn, taskDeleteIcon, 'Task Delete Icon');
}

// Update Functions
function fillProjectForm(project) {
    let title = project.getTitle();
    let titleEl = PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_INPUT;

    titleEl.value = title;
}

function fillTodoForm(todo) {
    // attribute values
    let title = todo.getTitle();
    let dueDate = todo.getDueDate();
    let priority = todo.getPriority();
    let tasks = todo.getTasks();
    let notes = todo.getNotes();

    // element references
    let titleEl = TODO_EDIT_PANE_FORM_EDIT_TODO_TITLE_INPUT;
    let dueDateEl = TODO_EDIT_PANE_FORM_EDIT_TODO_DUE_DATE_INPUT;
    let priorityEl;
    switch (priority) {
        case 'low':
            priorityEl = TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_3_INPUT;
            break;
        case 'medium':
            priorityEl = TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_2_INPUT;
            break;
        case 'high':
            priorityEl = TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_1_INPUT;
            break;
    }
    let notesEl = TODO_EDIT_PANE_FORM_EDIT_TODO_NOTES_TEXTAREA;

    // assignment
    titleEl.value = title;
    dueDateEl.value = dueDate;
    tasks.forEach(task => drawTaskEdit(task))
    priorityEl.checked=true;
    notesEl.value = notes;

}

// TEST values
const testProject1 = new App.Project('First project');
const testProject2 = new App.Project('Cooking Wishlist');

const testTask1 = new App.Task('First task', false);
const testTodo1 = new App.Todo('First Todo','low', '2021-12-31', false);
const testTodo2 = new App.Todo('Espresso Machine','low', '2021-12-31', false);
const testTodo3 = new App.Todo('Buy rice cooker', 'high', '2021-12-31', true);

testTodo2.addNotes('These are my first notes');

const testTask2 = new App.Task('Get recommendations from Hayden', false);
const testTask3 = new App.Task('Research maintenance required', false);
const testTask4 = new App.Task('Get more counterspace', true);


testProject1.addTodo(testTodo1);

testProject2.addTodo(testTodo2);
testProject2.addTodo(testTodo3);

testTodo1.addTask(testTask1);
testTodo2.addTask(testTask2);
testTodo2.addTask(testTask3);
testTodo2.addTask(testTask4);

DOM.drawProject(US_PROJECT_LIST_UL, testProject1, projectListIcon);
DOM.drawTodo(TODO_LIST, testTodo1);
DOM.drawTodo(TODO_LIST, testTodo2);
DOM.drawTodo(TODO_LIST, testTodo3);

fillProjectForm(testProject2);
fillTodoForm(testTodo2);
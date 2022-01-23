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
import addProjectIcon from './icons/add-project-icon.svg';

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
const PROJECT_PANE    = DOM.createDiv(MAIN, 'project-pane');

// Default Project List for 'Time-Sensitive' Todos
const PROJECT_LIST_CONTAINER_TS = DOM.createDiv(PROJECT_PANE, 'project-list-container', 'time-specified-projects');
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
const PROJECT_LIST_CONTAINER_US = DOM.createDiv(PROJECT_PANE, 'project-list-container', 'user-specified-projects');
const US_PROJECT_LIST_HEADER = DOM.createDiv(PROJECT_LIST_CONTAINER_US, 'project-header');
const US_PROJECT_LIST_HEADER_MAIN = DOM.createDiv(US_PROJECT_LIST_HEADER, 'project-header-main');
const US_PROJECT_LIST_ICON = DOM.createImage(US_PROJECT_LIST_HEADER_MAIN, myProjectsIcon, 'My Projects Icon');
const US_PROJECT_LIST_TITLE = DOM.createSpan(US_PROJECT_LIST_HEADER_MAIN, 'My Projects');
const US_PROJECT_LIST_UL = DOM.createUL(PROJECT_LIST_CONTAINER_US, 'project-list');

const US_PROJECT_LIST_ADD_PROJECT_PANE = DOM.createDiv(PROJECT_PANE, 'add-project-btn-container')
const US_PROJECT_LIST_ADD_PROJECT_BTN = DOM.createButton(US_PROJECT_LIST_ADD_PROJECT_PANE, 'add-project-btn', 'fancy-btn')
const US_PROJECT_LIST_ADD_PROJECT_BTN_IMG = DOM.createImage(US_PROJECT_LIST_ADD_PROJECT_BTN, addProjectIcon);
const US_PROJECT_LIST_ADD_PROJECT_BTN_SPAN = DOM.createSpan(US_PROJECT_LIST_ADD_PROJECT_BTN, 'Add a New Project')

// +++++ TODO PANE +++++
const TODO_PANE = DOM.createDiv(MAIN, 'todo-pane');
// TODO OPTIONS BAR
const TODO_OPTIONS_BAR = DOM.createDiv(TODO_PANE, 'todo-options-bar');
const TODO_OPTIONS_LIST = DOM.createUL(TODO_OPTIONS_BAR, 'todo-options-list');
const TODO_OPTIONS_LI_ADD_TODO = DOM.createLI(TODO_OPTIONS_LIST, 'todo-options-list-item');
const TODO_OPTIONS_LI_ADD_TODO_BTN = DOM.createButton(TODO_OPTIONS_LI_ADD_TODO, 'option-btn', 'fancy-btn', 'add-todo-btn');
const TODO_OPTIONS_LI_ADD_TODO_BTN_SPAN = DOM.createSpan(TODO_OPTIONS_LI_ADD_TODO_BTN, 'Add a Todo','todo-option-text')
const TODO_OPTIONS_LI_ADD_TODO_BTN_IMG = DOM.createImage(TODO_OPTIONS_LI_ADD_TODO_BTN, addTodoIcon, 'Add Todo Icon', 'option-image');
const TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS = DOM.createLI(TODO_OPTIONS_LIST, 'todo-options-list-item');
const TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN = DOM.createButton(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS, 'option-btn', 'fancy-btn', 'toggle-show-hide-complete-todos-btn');
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
const TODO_LIST    = DOM.createUL(TODO_PANE, 'todo-list');

// PROJECT EDIT PANE
const PROJECT_EDIT_PANE = DOM.createDiv(MAIN, 'project-edit-pane', 'hide');
const PROJECT_EDIT_PANE_FORM = DOM.createForm(PROJECT_EDIT_PANE);
const PROJECT_EDIT_PANE_FORM_HEADER = DOM.createSpan(PROJECT_EDIT_PANE_FORM, 'Edit Project', 'form-header', 'fancy-header');
const PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_SECTION = DOM.createDiv(PROJECT_EDIT_PANE_FORM, 'edit-project-title-section', 'form-section');
const PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_LABEL = DOM.createLabel(PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_SECTION, 'project-title', 'Project Title:','project-title-label');
const PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_INPUT = DOM.createInput(PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_SECTION, 'text', 'project-title', 'Current Project Name');

const PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER = DOM.createDiv(PROJECT_EDIT_PANE_FORM, 'submission-container');
const PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER_BTN = DOM.createButton(PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER, 'submit-project-changes-btn','submit-changes-btn', 'fancy-btn');
const PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER_BTN_IMG = DOM.createImage(PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER_BTN, submitIcon);

// TODO EDIT PANE
const TODO_EDIT_PANE  = DOM.createDiv(MAIN, 'todo-edit-pane', 'hide');
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
const TODO_EDIT_PANE_FORM_EDIT_TODO_SUBMISSION_BTN = DOM.createButton(TODO_EDIT_PANE_FORM_EDIT_TODO_SUBMISSION_CONTAINER, 'submit-todo-changes-btn', 'submit-changes-btn', 'fancy-btn');
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

const HIDE_CLASS = 'hide';
const SHOW_CLASS = 'show';
const PROJECT_EDIT_HEADER_CREATE_TEXT = 'Create Project';
const PROJECT_EDIT_HEADER_EDIT_TEXT = 'Edit Project';
const TODO_EDIT_HEADER_CREATE_TEXT = 'Create Todo';
const TODO_EDIT_HEADER_EDIT_TEXT = 'Edit Todo';

// UI Functions
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

function selfTest() {

}

// OPTION BUTTONS
function addBtnFn(btn, fn, eventType='click') {
  btn.addEventListener(eventType, fn);
}

function isHidden(element) {
  const classes = DOM.getClasses(element);
  const result = classes.includes(HIDE_CLASS);
  return result;
}

function switchClass(btn, classOne, classTwo) {
  const classes = DOM.getClasses(btn);
  if (classes.includes(classOne)) {
    DOM.declassify(btn, [classOne]);
    DOM.classify(btn, [classTwo]);
  } else {
    DOM.declassify(btn, [classTwo]);
    DOM.classify(btn, [classOne]);
  }
}

function updateBtnText(btn, newBtnText) {
  const childNodes = btn.children;
  const childArr = [...childNodes];
  childArr.forEach(function(childEl) {
    console.log(childEl.tagName);
    if (childEl.tagName === 'SPAN') {
      childEl.innerHTML = newBtnText;
    }
  })
}

/**
 * Replaces an event listener with another
 */
function switchButtonFn(btn, eventType, fn1, fn2) {
  deactivateBtnFn(btn, eventType, fn1);
  activateBtnFn(btn, eventType, fn2);
}

function activateBtnFn(btn, eventType, fn) {
  btn.addEventListener(eventType, fn);
}

function deactivateBtnFn(btn, eventType, fn) {
  btn.removeEventListener(eventType, fn);
}

function completeTodosHidden() {
  const todoNodes = document.getElementsByClassName('todo-complete');
  const todo = todoNodes[0];
  const classes = [...todo.classList]
  let result;
  if (classes.includes(HIDE_CLASS)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function toggleShowHideCompleteTodos() {
  if (completeTodosHidden()) {
    showCompleteTodos();
    updateBtnText(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN, 'Hide Complete Todos');
  } else {
    hideCompleteTodos();
    updateBtnText(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN, 'Show Complete Todos');
  }
}

function hideCompleteTodos() {
  const todoNodes = document.querySelectorAll('.todo-complete');
  todoNodes.forEach(function(todoNode) {
    DOM.declassify(todoNode, [SHOW_CLASS]);
    DOM.classify(todoNode, [HIDE_CLASS]);
  })
}

function showCompleteTodos() {
  const todoNodes = document.querySelectorAll('.todo-complete');
  todoNodes.forEach(function(todoNode) {
    DOM.declassify(todoNode, [HIDE_CLASS]);
    DOM.classify(todoNode, [SHOW_CLASS]);
  })
}

// Project Add and Project Edit button listeners
addBtnFn(US_PROJECT_LIST_ADD_PROJECT_BTN, stageAddProjectForm);
addBtnFn(TODO_OPTIONS_LI_EDIT_THIS_PROJECT_BTN, stageEditProjectForm);

// Todo Option button listeners
addBtnFn(TODO_OPTIONS_LI_ADD_TODO_BTN, stageAddTodoForm);



// hideCompleteTodos here
// deleteThisProject here


// Form listeners
addBtnFn(PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER_BTN, hideProjectEditPane);
addBtnFn(TODO_EDIT_PANE_FORM_EDIT_TODO_SUBMISSION_BTN, hideTodoEditPane);
// Add 'Hide Complete Todos' functionality here
addBtnFn(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN, toggleShowHideCompleteTodos);
// Add 'Delete this Project' functionality here
// addBtnFn(TODO_OPTIONS_LI_DELETE_THIS_PROJECT_BTN, 'function here');


function updateTextContent(ele, newText) {
  ele.textContent = newText;
}

function updateValue(ele, value) {
  ele.value = value;
}

function setProjectEditHeaderToCreate() {
  updateTextContent(PROJECT_EDIT_PANE_FORM_HEADER, PROJECT_EDIT_HEADER_CREATE_TEXT);
}

function setTodoEditHeaderToCreate() {
  updateTextContent(TODO_EDIT_PANE_FORM_HEADER, TODO_EDIT_HEADER_CREATE_TEXT);
}

function setProjectTitleInputCreateMode() {
  updateValue(PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_INPUT, "New Project");
}

function setProjectEditHeaderToEdit() {
  updateTextContent(PROJECT_EDIT_PANE_FORM_HEADER, PROJECT_EDIT_HEADER_EDIT_TEXT);
}

function unhideElement(element, hideClass) {
  if (isHidden(element)) {
    DOM.declassify(element, [hideClass]);
  }
}

function hideElement(element, hideClass) {
  if (!(isHidden(element))) {
    DOM.classify(element, [hideClass]);
  }
}
/**
 * Used to add/remove a given class from an element - different from switchClass, which alternates between 2 classes
 * @param {*} element 
 * @param {*} toggleClass 
 */
function toggleClass(element, toggleClass) {
  let method;
  let classes = DOM.getClasses(element);
  if (classes.includes(toggleClass)) {
    method = DOM.declassify;
  }
  else {
    method = DOM.classify;
  }
  method(element, [toggleClass]);
}

function stageAddProjectForm() {
  setProjectEditHeaderToCreate();
  setProjectTitleInputCreateMode();
  // set project submit button event listener to create mode
  unhideProjectEditPane();
}

function stageEditProjectForm() {
  setProjectEditHeaderToEdit();
  // set project submit button event listener to edit mode
  // prefill ProjectTitle text with the actual text from the currently selected project
  toggleHideProjectEditPane();
}

function stageAddTodoForm() {
  setTodoEditHeaderToCreate();
  const todo = new App.Todo();
  fillTodoForm(todo);

  //add event listener here for to save todo
  unhideTodoEditPane();
}

// PROJECT EDIT PANE
// ENSURES TOGGLED
function toggleHideProjectEditPane() {
  toggleClass(PROJECT_EDIT_PANE, HIDE_CLASS);
}

// ENSURES UNHIDDEN
function unhideProjectEditPane() {
  unhideElement(PROJECT_EDIT_PANE, HIDE_CLASS);
}

// ENSURES HIDDEN
function hideProjectEditPane() {
  hideElement(PROJECT_EDIT_PANE, HIDE_CLASS);
}

// TODO EDIT PANE
// ENSURES TOGGLED
function toggleHideTodoEditPane() {
  toggleClass(TODO_EDIT_PANE, HIDE_CLASS);
}

// ENSURES UNHIDDEN
function unhideTodoEditPane() {
  unhideElement(TODO_EDIT_PANE, HIDE_CLASS);
}

// ENSURES HIDDEN
function hideTodoEditPane() {
  hideElement(TODO_EDIT_PANE, HIDE_CLASS);
}

// LOCAL STORAGE Functions
function storageAvailable(type) {
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

function getStorage() {
  return window['localStorage'];
}

function getProjects() {
  let projectStorage;
  let projects;
  if (storageAvailable('localStorage')) {
    let locStorage = getStorage();
    projectStorage = locStorage.getItem('userProjects');
    if (!(projectStorage === null)) {
      projects = JSON.parse(projectStorage);
    }
  } else {
    projects = [];
  }
  return projects;
}

// function addProject(title) {
//   const project = new App.Project(title);
//   return project;
// }

function updateProject(title, project) {
  project.title = title;
  return project;
}

// function addTodo(title, priority, dueDate, isComplete, tasks, notes, project) {
//   const todo = new App.Todo(title, priority, dueDate, isComplete, tasks, notes, project)
//   project.addTodo(todo);
//   return todo;
// }

function updateTodo(title, priority, dueDate, isComplete, tasks, notes, todo) {
  todo.title = title;
  todo.priority = priority;
  todo.dueDate = dueDate;
  todo.isComplete = isComplete;
  return todo;
}

function addTask(taskTitle, isComplete, todo) {
  const task = new App.Task(taskTitle, isComplete);
  todo.addTask(task);
  return task;
}

function updateTask(title, isComplete, task) {
  task.title = title;
  task.isComplete = isComplete;
  return task;
}

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
DOM.drawProject(US_PROJECT_LIST_UL, testProject2, projectListIcon);
DOM.drawTodo(TODO_LIST, testTodo1);
DOM.drawTodo(TODO_LIST, testTodo2);
DOM.drawTodo(TODO_LIST, testTodo3);

// fillProjectForm(testProject2);
// fillTodoForm(testTodo2);
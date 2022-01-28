'use strict';

// Import styling
import './stylesheets/style.css';

// Import Icons
import todoTitanIcon from './icons/todo-titan-icon.svg';
import addTodoIcon from './icons/add-todo-icon.svg';
import allTimeIcon from './icons/all-time-icon.svg';
import githubIcon from './icons/github-icon.png';
import hideCompleteTodosIcon from './icons/hide-complete-todos-icon.svg';
import highPriorityIcon from './icons/high-priority-icon.svg';
import mediumPriorityIcon from './icons/medium-priority-icon.svg';
import lowPriorityIcon from './icons/low-priority-icon.svg';
import myProjectsIcon from './icons/my-projects-icon.svg';
import projectDeleteIcon from './icons/project-delete-icon.svg';
import projectEditIcon from './icons/project-edit-icon.svg';
import projectListIcon from './icons/project-list-icon.svg';
import submitIcon from './icons/submit-icon.svg';
import taskAddIcon from './icons/task-add-icon.svg';
import taskCompleteIcon from './icons/task-complete-icon.svg';
import taskDeleteIcon from './icons/task-delete-icon.svg';
import taskIncompleteIcon from './icons/task-incomplete-icon.svg';
import thisWeekIcon from './icons/this-week-icon.svg';
import timeSensitiveTaskIcon from './icons/time-sensitive-task-icon.svg';
import todayIcon from './icons/today-icon.svg';
import todoCompleteIcon from './icons/todo-complete-icon.svg';
import todoEditIcon from './icons/todo-edit-icon.svg';
import todoExpandLessIcon from './icons/todo-expand-less-icon.svg';
import todoExpandMoreIcon from './icons/todo-expand-more-icon.svg';
import todoIncompleteIcon from './icons/todo-incomplete-icon.svg';
import addProjectIcon from './icons/add-project-icon.svg';
import discardChangesIcon from './icons/discard-changes-icon.svg';


// Import DOM Elements
import DOM from './dom';
import App from './app';

// Set Constants
const TITLE_TEXT = 'Todo Titan';
const LOGO_TEXT = 'TODO Titan';
const FOOTER_TEXT = 'View Source code on';
const GITHUB_PROJECT_URL = 'https://github.com/Drew-Daniels/todo_titan';
const GITHUB_PROFILE_CONTAINER_TEXT = 'Created by';
const GITHUB_PROFILE_URL = 'https://github.com/Drew-Daniels';
const GITHUB_PROFILE_ANCHOR_TEXT = 'Drew Daniels';

const HEAD = DOM.getHead();

// +++++ INITIAL PAGE SETUP +++++
// === HEAD ===
DOM.createFavicon(todoTitanIcon, HEAD);
DOM.createTitle(TITLE_TEXT, HEAD);

// === BODY (Content-Container) ===
const BODY = DOM.getBody();
DOM.addClasses(BODY, 'content-container');

// = CONTENT =
const CONTENT = DOM.createDiv(BODY, 'content');

// Header
const HEADER = DOM.createHeader(CONTENT);

const LOGO_NAME_CONTAINER = DOM.createDiv(HEADER, 'logo-name-container');
DOM.createImage(LOGO_NAME_CONTAINER, todoTitanIcon, 'Todo Titan Checkmark Icon', 'logo')
DOM.createSpan(LOGO_NAME_CONTAINER, LOGO_TEXT, "logo-text");

const VIEW_PROJECTS_BUTTON = DOM.createButton(HEADER, 'option-btn', 'fancy-btn')
VIEW_PROJECTS_BUTTON.id = 'view-projects-btn';
const VIEW_PROJECTS_BUTTON_SPAN = DOM.createSpan(VIEW_PROJECTS_BUTTON, 'View Projects');
const VIEW_PROJECTS_BUTTON_IMAGE = DOM.createImage(VIEW_PROJECTS_BUTTON, projectListIcon);


// ++++++++++ Main ++++++++++
const MAIN = DOM.createMain(CONTENT);
// +++++ Project Pane +++++
const PROJECT_PANE    = DOM.createDiv(MAIN, 'project-pane');

// Default Project List for 'Time-Sensitive' Todos
// const PROJECT_LIST_CONTAINER_TS = DOM.createDiv(PROJECT_PANE, 'project-list-container', 'time-specified-projects');
// const TS_PROJECT_LIST_HEADER = DOM.createDiv(PROJECT_LIST_CONTAINER_TS, 'project-header');
// const TS_PROJECT_LIST_HEADER_MAIN = DOM.createDiv(TS_PROJECT_LIST_HEADER, 'project-header-main');
// const TS_PROJECT_LIST_ICON = DOM.createImage(TS_PROJECT_LIST_HEADER_MAIN, timeSensitiveTaskIcon, 'Time Sensitive Task Icon');
// const TS_PROJECT_LIST_TITLE = DOM.createSpan(TS_PROJECT_LIST_HEADER_MAIN, 'Overview');
// const TS_PROJECT_LIST_UL = DOM.createUL(PROJECT_LIST_CONTAINER_TS, 'project-list');
// const TS_PROJECT_LIST_TD_LI = DOM.createLI(TS_PROJECT_LIST_UL, 'project');
// const TS_PROJECT_LIST_TD_LI_BTN = DOM.createButton(TS_PROJECT_LIST_TD_LI, 'project-btn');
// const TS_PROJECT_LIST_TD_LI_BTN_IMG = DOM.createImage(TS_PROJECT_LIST_TD_LI_BTN, todayIcon, 'Today Icon', 'project-image');
// const TS_PROJECT_LIST_TD_LI_BTN_SPAN = DOM.createSpan(TS_PROJECT_LIST_TD_LI_BTN, 'Today', 'project-title');
// const TS_PROJECT_LIST_TD_LI_NUM_TODOS_CONTAINER = DOM.createDiv(TS_PROJECT_LIST_TD_LI, 'num-todos-container');
// const TS_PROJECT_LIST_TD_LI_NUM_TODOS = DOM.createSpan(TS_PROJECT_LIST_TD_LI_NUM_TODOS_CONTAINER, '0', 'num-todos');
// const TS_PROJECT_LIST_TW_LI = DOM.createLI(TS_PROJECT_LIST_UL, 'project');
// const TS_PROJECT_LIST_TW_LI_BTN = DOM.createButton(TS_PROJECT_LIST_TW_LI, 'project-btn');
// const TS_PROJECT_LIST_TW_LI_BTN_IMG = DOM.createImage(TS_PROJECT_LIST_TW_LI_BTN, thisWeekIcon, 'This Week Icon', 'project-image');
// const TS_PROJECT_LIST_TW_LI_BTN_SPAN = DOM.createSpan(TS_PROJECT_LIST_TW_LI_BTN, 'This Week', 'project-title');
// const TS_PROJECT_LIST_TW_LI_NUM_TODOS_CONTAINER = DOM.createDiv(TS_PROJECT_LIST_TW_LI, 'num-todos-container');
// const TS_PROJECT_LIST_TW_LI_NUM_TODOS = DOM.createSpan(TS_PROJECT_LIST_TW_LI_NUM_TODOS_CONTAINER, '0', 'num-todos');
// const TS_PROJECT_LIST_ALL_LI = DOM.createLI(TS_PROJECT_LIST_UL, 'project');
// const TS_PROJECT_LIST_ALL_LI_BTN = DOM.createButton(TS_PROJECT_LIST_ALL_LI, 'project-btn');
// const TS_PROJECT_LIST_ALL_LI_BTN_IMG  = DOM.createImage(TS_PROJECT_LIST_ALL_LI_BTN, allTimeIcon, 'All Time Icon', 'project-image');
// const TS_PROJECT_LIST_ALL_LI_BTN_SPAN = DOM.createSpan(TS_PROJECT_LIST_ALL_LI_BTN, 'All', 'project-title');
// const TS_PROJECT_LIST_ALL_LI_NUM_TODOS_CONTAINER = DOM.createDiv(TS_PROJECT_LIST_ALL_LI, 'num-todos-container');
// const TS_PROJECT_LIST_ALL_LI_NUM_TODOS = DOM.createSpan(TS_PROJECT_LIST_ALL_LI_NUM_TODOS_CONTAINER, '0', 'num-todos');

// Custom Project List for 'User-Specific' Todos
const PROJECT_LIST_CONTAINER_US = DOM.createDiv(PROJECT_PANE, 'project-list-container', 'user-specified-projects');
const US_PROJECT_LIST_HEADER = DOM.createDiv(PROJECT_LIST_CONTAINER_US, 'project-header');
const US_PROJECT_LIST_HEADER_MAIN = DOM.createDiv(US_PROJECT_LIST_HEADER, 'project-header-main');
DOM.createImage(US_PROJECT_LIST_HEADER_MAIN, myProjectsIcon, 'My Projects Icon');
DOM.createSpan(US_PROJECT_LIST_HEADER_MAIN, 'My Projects');
const US_PROJECT_LIST_UL = DOM.createUL(PROJECT_LIST_CONTAINER_US, 'project-list');

const US_PROJECT_LIST_ADD_PROJECT_PANE = DOM.createDiv(PROJECT_PANE, 'add-project-btn-container')
const US_PROJECT_LIST_ADD_PROJECT_BTN = DOM.createButton(US_PROJECT_LIST_ADD_PROJECT_PANE, 'add-project-btn', 'fancy-btn');
DOM.createImage(US_PROJECT_LIST_ADD_PROJECT_BTN, addProjectIcon);
DOM.createSpan(US_PROJECT_LIST_ADD_PROJECT_BTN, 'Add a New Project');

// +++++ TODO PANE +++++
const TODO_PANE = DOM.createDiv(MAIN, 'todo-pane');
// TODO OPTIONS BAR
const TODO_OPTIONS_BAR = DOM.createDiv(TODO_PANE, 'todo-options-bar');
const TODO_OPTIONS_LIST = DOM.createUL(TODO_OPTIONS_BAR, 'todo-options-list');
const TODO_OPTIONS_LI_ADD_TODO = DOM.createLI(TODO_OPTIONS_LIST, 'todo-options-list-item');
const TODO_OPTIONS_LI_ADD_TODO_BTN = DOM.createButton(TODO_OPTIONS_LI_ADD_TODO, 'option-btn', 'fancy-btn', 'add-todo-btn', 'hide');
DOM.createSpan(TODO_OPTIONS_LI_ADD_TODO_BTN, 'Add a Todo','todo-option-text');
DOM.createImage(TODO_OPTIONS_LI_ADD_TODO_BTN, addTodoIcon, 'Add Todo Icon', 'option-image');
const TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS = DOM.createLI(TODO_OPTIONS_LIST, 'todo-options-list-item');
const TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN = DOM.createButton(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS, 'option-btn', 'fancy-btn', 'toggle-show-hide-complete-todos-btn', 'hide');
DOM.createSpan(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN, 'Hide Complete Todos','todo-option-text');
DOM.createImage(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN, hideCompleteTodosIcon, 'Hide Complete Todos Icon', 'option-image');
const TODO_OPTIONS_LI_EDIT_THIS_PROJECT = DOM.createLI(TODO_OPTIONS_LIST, 'todo-options-list-item');
const TODO_OPTIONS_LI_EDIT_THIS_PROJECT_BTN = DOM.createButton(TODO_OPTIONS_LI_EDIT_THIS_PROJECT, 'option-btn', 'fancy-btn', 'edit-project-btn', 'hide');
DOM.createSpan(TODO_OPTIONS_LI_EDIT_THIS_PROJECT_BTN, 'Edit this project','todo-option-text');
DOM.createImage(TODO_OPTIONS_LI_EDIT_THIS_PROJECT_BTN, projectEditIcon, 'Project Edit Icon', 'option-image');
const TODO_OPTIONS_LI_DELETE_THIS_PROJECT = DOM.createLI(TODO_OPTIONS_LIST, 'todo-options-list-item');
const TODO_OPTIONS_LI_DELETE_THIS_PROJECT_BTN = DOM.createButton(TODO_OPTIONS_LI_DELETE_THIS_PROJECT, 'option-btn', 'fancy-btn', 'delete-project-btn', 'hide');
DOM.createSpan(TODO_OPTIONS_LI_DELETE_THIS_PROJECT_BTN, 'Delete this project','todo-option-text');
DOM.createImage(TODO_OPTIONS_LI_DELETE_THIS_PROJECT_BTN, projectDeleteIcon, 'Delete this project icon', 'option-image');

// TODO LIST
const TODO_LIST    = DOM.createUL(TODO_PANE, 'todo-list');

// PROJECT EDIT PANE
const PROJECT_EDIT_PANE = DOM.createDiv(MAIN, 'project-edit-pane', 'hide');
const PROJECT_EDIT_PANE_FORM = DOM.createForm(PROJECT_EDIT_PANE, 'project-edit-form','mode-edit');
const PROJECT_EDIT_PANE_FORM_HEADER = DOM.createDiv(PROJECT_EDIT_PANE_FORM, 'form-header', 'fancy-header');
const PROJECT_EDIT_PANE_FORM_HEADER_SPAN = DOM.createSpan(PROJECT_EDIT_PANE_FORM_HEADER, 'Edit Project');
const PROJECT_EDIT_PANE_FORM_DISCARD_BTN = DOM.createButton(PROJECT_EDIT_PANE_FORM_HEADER, 'discard-project-btn');
DOM.createImage(PROJECT_EDIT_PANE_FORM_DISCARD_BTN, discardChangesIcon, 'something');

const PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_SECTION = DOM.createDiv(PROJECT_EDIT_PANE_FORM, 'edit-project-title-section', 'form-section');
DOM.createLabel(PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_SECTION, 'project-title', 'Project Title:','project-title-label');
const PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_INPUT = DOM.createInput(PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_SECTION, 'text', 'project-title', 'Current Project Name');

const PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER = DOM.createDiv(PROJECT_EDIT_PANE_FORM, 'submission-container');
const PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER_BTN = DOM.createButton(PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER, 'submit-project-changes-btn','submit-changes-btn', 'fancy-btn');
DOM.createImage(PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER_BTN, submitIcon);

// ============ TODO EDIT PANE =========================
const TODO_EDIT_PANE  = DOM.createDiv(MAIN, 'todo-edit-pane', 'hide');
const TODO_EDIT_PANE_FORM = DOM.createForm(TODO_EDIT_PANE, 'todo-edit-form');
const TODO_EDIT_PANE_FORM_HEADER = DOM.createDiv(TODO_EDIT_PANE_FORM, 'form-header', 'fancy-header');
const TODO_EDIT_PANE_FORM_HEADER_SPAN = DOM.createSpan(TODO_EDIT_PANE_FORM_HEADER, 'Edit Todo');
const TODO_EDIT_PANE_FORM_DISCARD_BTN = DOM.createButton(TODO_EDIT_PANE_FORM_HEADER, 'discard-todo-btn');
DOM.createImage(TODO_EDIT_PANE_FORM_DISCARD_BTN, discardChangesIcon, 'something');

// TODO id
const TODO_EDIT_PANE_FORM_EDIT_TODO_ID_SPAN = DOM.createSpan(TODO_EDIT_PANE_FORM, '', 'todo-id-span', 'hide');

// TODO title
const TODO_EDIT_PANE_FORM_EDIT_TODO_TITLE_SECTION = DOM.createDiv(TODO_EDIT_PANE_FORM, 'edit-todo-title-section', 'form-section');
DOM.createLabel(TODO_EDIT_PANE_FORM_EDIT_TODO_TITLE_SECTION, 'todo-title', 'Todo Title:', 'todo-title-label');
const TODO_EDIT_PANE_FORM_EDIT_TODO_TITLE_INPUT = DOM.createInput(TODO_EDIT_PANE_FORM_EDIT_TODO_TITLE_SECTION, 'text', 'todo-title', 'Current Todo Title');

// TODO isComplete
const TODO_EDIT_PANE_FORM_EDIT_TODO_IS_COMPLETE_SECTION = DOM.createDiv(TODO_EDIT_PANE_FORM, 'form-section');
DOM.createLabel(TODO_EDIT_PANE_FORM_EDIT_TODO_IS_COMPLETE_SECTION, 'todo-is-complete', 'Complete?', 'todo-is-complete-label');
const TODO_EDIT_PANE_FORM_EDIT_TODO_IS_COMPLETE_INPUT = DOM.createInput(TODO_EDIT_PANE_FORM_EDIT_TODO_IS_COMPLETE_SECTION, 'checkbox', 'todo-is-complete');

// TODO dueDate
const TODO_EDIT_PANE_FORM_EDIT_TODO_DUE_DATE_SECTION = DOM.createDiv(TODO_EDIT_PANE_FORM, 'form-section');
DOM.createLabel(TODO_EDIT_PANE_FORM_EDIT_TODO_DUE_DATE_SECTION, 'todo-due-date', 'Due Date:', 'todo-due-date-label');
const TODO_EDIT_PANE_FORM_EDIT_TODO_DUE_DATE_INPUT = DOM.createInput(TODO_EDIT_PANE_FORM_EDIT_TODO_DUE_DATE_SECTION, 'date', 'todo-due-date', '2022-12-31');

// TODO priority
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_SECTION = DOM.createDiv(TODO_EDIT_PANE_FORM, 'form-section');
DOM.createSpan(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_SECTION, 'Priority:', 'todo-priority-level-label');
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_CONTAINER = DOM.createDiv(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_SECTION, 'priority-level-container');
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_1 = DOM.createDiv(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_CONTAINER, 'priority-level-line');
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_1_INPUT = DOM.createInput(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_1, 'radio', 'priority-level', 'high');
DOM.createLabel(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_1, 'priority-level-1', 'High');
// TODO priority cont...
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_2 = DOM.createDiv(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_CONTAINER, 'priority-level-line');
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_2_INPUT = DOM.createInput(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_2, 'radio', 'priority-level', 'medium');
DOM.createLabel(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_2, 'priority-level-2', 'Medium');
// TODO priority cont...
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_3 = DOM.createDiv(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_CONTAINER, 'priority-level-line');
const TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_3_INPUT = DOM.createInput(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_3, 'radio', 'priority-level', 'low');
DOM.createLabel(TODO_EDIT_PANE_FORM_EDIT_TODO_PRIORITY_LEVEL_LINE_3, 'priority-level-3', 'Low');

// TODO tasks
const TODO_EDIT_PANE_FORM_EDIT_TODO_TASK_SECTION = DOM.createDiv(TODO_EDIT_PANE_FORM, 'form-section');
DOM.createSpan(TODO_EDIT_PANE_FORM_EDIT_TODO_TASK_SECTION, 'Tasks:', 'todo-tasks-label');
const TODO_EDIT_PANE_FORM_EDIT_TODO_TASK_LIST = DOM.createUL(TODO_EDIT_PANE_FORM_EDIT_TODO_TASK_SECTION, 'task-list');
// TODO tasks cont...
const TODO_EDIT_PANE_FORM_EDIT_TODO_ADD_TASK_SECTION = DOM.createDiv(TODO_EDIT_PANE_FORM, 'form-section');
const TODO_EDIT_PANE_FORM_EDIT_TODO_ADD_TASK_BTN = DOM.createButton(TODO_EDIT_PANE_FORM_EDIT_TODO_ADD_TASK_SECTION, 'add-task-btn', 'fancy-btn');
DOM.createImage(TODO_EDIT_PANE_FORM_EDIT_TODO_ADD_TASK_BTN, taskAddIcon, 'Add task icon');
DOM.createSpan(TODO_EDIT_PANE_FORM_EDIT_TODO_ADD_TASK_BTN, 'Add a task');

// TODO notes
const TODO_EDIT_PANE_FORM_EDIT_TODO_NOTES_SECTION = DOM.createDiv(TODO_EDIT_PANE_FORM, 'form-section');
DOM.createLabel(TODO_EDIT_PANE_FORM_EDIT_TODO_NOTES_SECTION, 'todo-notes', 'Notes:');
const TODO_EDIT_PANE_FORM_EDIT_TODO_NOTES_TEXTAREA = DOM.createTextArea(TODO_EDIT_PANE_FORM_EDIT_TODO_NOTES_SECTION,'todo-notes', '30', '10', undefined);

// TODO form submission
const TODO_EDIT_PANE_FORM_EDIT_TODO_SUBMISSION_CONTAINER = DOM.createDiv(TODO_EDIT_PANE_FORM, 'submission-container');
const TODO_EDIT_PANE_FORM_EDIT_TODO_SUBMISSION_BTN = DOM.createButton(TODO_EDIT_PANE_FORM_EDIT_TODO_SUBMISSION_CONTAINER, 'submit-todo-changes-btn', 'submit-changes-btn', 'fancy-btn');
DOM.createImage(TODO_EDIT_PANE_FORM_EDIT_TODO_SUBMISSION_BTN, submitIcon, 'Submit Icon');

// Footer
const FOOTER = DOM.createFooter(CONTENT);
DOM.setInnerText(FOOTER, FOOTER_TEXT);

const GITHUB_PROJECT_ANCHOR = DOM.createAnchor(FOOTER, GITHUB_PROJECT_URL);
DOM.createImage(GITHUB_PROJECT_ANCHOR, githubIcon, 'Github Icon', 'github-icon');

const GITHUB_PROFILE_CONTAINER = DOM.createDiv(FOOTER, 'github-profile-container');
GITHUB_PROFILE_CONTAINER.innerText = GITHUB_PROFILE_CONTAINER_TEXT;

const GITHUB_PROFILE_ANCHOR = DOM.createAnchor(GITHUB_PROFILE_CONTAINER, GITHUB_PROFILE_URL, 'github-profile-link');
GITHUB_PROFILE_ANCHOR.innerText = GITHUB_PROFILE_ANCHOR_TEXT;

const HIDE_CLASS = 'hide';
const TODO_COMPLETE_CLASS = 'todo-complete';
const TASK_COMPLETE_CLASS = 'task-complete';
const PROJECT_EDIT_HEADER_CREATE_TEXT = 'Create Project';
const PROJECT_EDIT_HEADER_EDIT_TEXT = 'Edit Project';
const TODO_EDIT_HEADER_CREATE_TEXT = 'Create Todo';
const TODO_EDIT_HEADER_EDIT_TEXT = 'Edit Todo';
const PROJECT_EDIT_PANE_FORM_CREATE_MODE_CLASS = 'mode-create';
const PROJECT_EDIT_PANE_FORM_EDIT_MODE_CLASS = 'mode-edit';

// OPTIONS
let HIDE_COMPLETE_TODOS = false;

// UI Functions
/**Updates the count of number of Incomplete Todos */
function updateCtTodos() {
  const projectEls = document.querySelectorAll('.project');
  projectEls.forEach(function(projectEl) {
    const projectID = projectEl.id;
    const projectObj = getProjectByID(projectID);
    const ctTodos = projectObj.getCtTodosIncomplete();

    const numTodosSpan = projectEl.querySelector('span.num-todos');
    numTodosSpan.textContent = ctTodos;
  })
}

function drawProject(attachTo, project) {
  let projectEl = DOM.createLI(attachTo, 'project');
  projectEl.id = project.getID();
  let projectElBtn = DOM.createButton(projectEl, 'project-btn');
  DOM.createImage(projectElBtn, projectListIcon,'project-image');
  DOM.createSpan(projectElBtn, project.getTitle(),'project-title');
  let numTodosContainer = DOM.createDiv(projectEl, 'num-todos-container');
  DOM.createSpan(numTodosContainer, project.getCtTodos(), 'num-todos');

  attachTo.appendChild(projectEl);

  return projectEl;
}

function drawTodoLine1(todo, todoEl) {
    let line1 = DOM.createDiv(todoEl, 'todo-line-1');
    // col 1
    let col1 = DOM.createDiv(line1, 'todo-col-base', 'todo-col-1');
    let todoCheckBoxBtn = DOM.createButton(col1, 'todo-checkbox');
    let todoImg;
    if (todo.isComplete === false) {
      todoImg = todoIncompleteIcon;
    } else {
      todoImg = todoCompleteIcon;
      todoEl = DOM.classify(todoEl, ['todo-complete']);
    }
    DOM.createImage(todoCheckBoxBtn, todoImg, 'Todo Complete Image', 'todo-checkbox-btn-img');
    DOM.createSpan(col1, todo.getTitle(), 'todo-title');

    // event listener
    addBtnFn(todoCheckBoxBtn, toggleTodoComplete);
    // col 2
    let col2 = DOM.createDiv(line1, 'todo-col-base', 'todo-col-2');
  
    DOM.createSpan(col2, todo.getDueDate(),'todo-due-date');
    let expanderContainer = DOM.createDiv(col2, 'expander-container');
    let expandMoreBtn = DOM.createButton(expanderContainer, 'expander-btn');
    DOM.createImage(expandMoreBtn, todoExpandMoreIcon);
    let expandLessBtn = DOM.createButton(expanderContainer, 'minimizer-btn','hide');
    DOM.createImage(expandLessBtn, todoExpandLessIcon);

    let editBtn = DOM.createButton(col2, 'edit-todo-btn');
    let editBtnImg = DOM.createImage(col2, todoEditIcon)
    editBtn.appendChild(editBtnImg);

    let priorityImgURL;
    switch (todo.getPriority()) {
      case 'low':
        priorityImgURL = lowPriorityIcon;
        break;
      case 'medium':
        //something
        priorityImgURL = mediumPriorityIcon;
        break;
      case 'high':
        priorityImgURL = highPriorityIcon;
        break;
    }
    let priorityBtn = DOM.createButton(col2, 'todo-priority-btn');
    DOM.createImage(priorityBtn, priorityImgURL, 'Todo Priority', 'todo-priority-btn-img');    

    return line1;
}

function drawTodoLine2(todo, todoEl) {
  let line2 = DOM.createDiv(todoEl, 'todo-line-2');
  let taskList = DOM.createUL(line2, 'task-list');
  let tasks = todo.getTasks();
  tasks.forEach(task => {
    drawTaskDisplayMode(taskList, task);
  });

  return line2;
}
/**
 * Takes a Todo object and adds necessary elements and event listeners to display it on-screen.
 * @param {*} attachTo 
 * @param {*} todo 
 * @returns 
 */
function drawTodo(attachTo, todo) {
  let todoEl = DOM.createLI(attachTo, 'todo');
  todoEl.id = todo.getID();
  
  drawTodoLine1(todo, todoEl);
  drawTodoLine2(todo, todoEl);

  attachTo.appendChild(todoEl);

  return todoEl;
}

/**
 * Used to add DOM task elements under a todo in the todo pane - similar to 'drawTaskEditMode' minus the delete button and the fact that the task title is displayed
 * in SPAN rather than INPUT
 * @param {*} attachTo 
 * @param {*} task 
 * @returns a fully drawn task elment for displaying in the todo pane
 */
function drawTaskDisplayMode(attachTo, task) {
  let taskEl = DOM.createLI(attachTo, 'task');

  let taskCheckbox = DOM.createButton(taskEl, 'task-checkbox-btn');
  let taskImg;
  if (task.isComplete === false) {
    taskImg = taskIncompleteIcon;
  } else {
    taskImg = taskCompleteIcon;
  }
  DOM.createImage(taskCheckbox, taskImg, 'Task Checkbox Image', 'task-checkbox-btn-img');
  DOM.createSpan(taskEl, task.getTitle(), 'task-title');

  addBtnFn(taskCheckbox, toggleTaskComplete);

  return taskEl;
}

function markTodoComplete(todoEl) {
  DOM.classify(todoEl, ['todo-complete']);
}

function markTodoIncomplete(todoEl) {
  DOM.declassify(todoEl, ['todo-complete'])
}

function toggleTodoComplete() {
  const that = this;
  const todoEl = that.parentNode.parentNode.parentNode;
  const todoImg = that.firstChild;
  const classes = DOM.getClasses(todoEl);
  if (classes.includes(TODO_COMPLETE_CLASS)) {
    markTodoIncomplete(todoEl);
    todoImg.src = todoIncompleteIcon;
  } else {
    markTodoComplete(todoEl);
    todoImg.src = todoCompleteIcon;
  }

  const todoObj = App.getTodo(todoEl.id);
  todoObj.isComplete = (!classes.includes(TODO_COMPLETE_CLASS));

  save();

  updateCtTodos();
}

function markTaskComplete(taskEl) {
  DOM.classify(taskEl, ['task-complete']);
}

function markTaskIncomplete(taskEl) {
  DOM.declassify(taskEl, ['task-complete'])
}

function toggleTaskComplete() {
  const that = this;
  const taskEl = that.parentNode;
  const taskImg = that.firstChild;
  const classes = DOM.getClasses(taskEl);
  if (classes.includes(TASK_COMPLETE_CLASS)) {
    markTaskIncomplete(taskEl);
    taskImg.src = taskIncompleteIcon;
  } else {
    markTaskComplete(taskEl);
    taskImg.src = taskCompleteIcon;
  }
}

function drawNewTask() {
  let task = new App.Task();
  let taskEl = drawTaskEditMode(TODO_EDIT_PANE_FORM_EDIT_TODO_TASK_LIST, task);
  let taskCheckboxBtn = taskEl.querySelector('button.task-checkbox-btn');
  addBtnFn(taskCheckboxBtn, toggleTaskComplete, 'click');
  task = null;
}

function deleteTask() {
  const task = this.parentNode;
  deleteChildren(task);
  task.remove();
}
/**
 * Similar to 'drawTaskDisplayMode' only this version uses INPUT to display task title and adds an 'delete' button
 * @param {*} task 
 */
function drawTaskEditMode(attachTo, task) {
  let title;
  let taskImg;
  title = task.getTitle();
  if (task.isComplete === true) {
    taskImg = taskCompleteIcon;
  } else {
    taskImg = taskIncompleteIcon;
  }
  let taskEl = DOM.createLI(attachTo, 'task');

  let btn = DOM.createButton(taskEl, 'task-checkbox-btn');
  DOM.createImage(btn, taskImg, 'task-checkbox-img');
  DOM.createInput(taskEl,'text', 'tasks', title);
  let deleteBtn = DOM.createButton(taskEl, 'task-delete-btn');
  DOM.createImage(deleteBtn, taskDeleteIcon, 'Task Delete Button Image', 'task-delete-btn-img');

  addBtnFn(deleteBtn, deleteTask);
  
  return taskEl;
}

// Update Functions
function fillProjectForm(project) {
  let title = project.getTitle();
  let titleEl = PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_INPUT;

  titleEl.value = title;
}

function fillTodoForm(todo) {
  TODO_EDIT_PANE_FORM_EDIT_TODO_ID_SPAN.textContent = todo.getID();
  TODO_EDIT_PANE_FORM_EDIT_TODO_TITLE_INPUT.value = todo.getTitle();
  TODO_EDIT_PANE_FORM_EDIT_TODO_IS_COMPLETE_INPUT.checked = todo.isComplete;
  TODO_EDIT_PANE_FORM_EDIT_TODO_DUE_DATE_INPUT.value = todo.getDueDate();

  let priority = todo.getPriority();
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
  priorityEl.checked=true;

  let tasks = todo.getTasks();
  tasks.forEach(task => drawTaskEditMode(TODO_EDIT_PANE_FORM_EDIT_TODO_TASK_LIST, task))
  let notes = todo.getNotes();
  TODO_EDIT_PANE_FORM_EDIT_TODO_NOTES_TEXTAREA.value = notes;
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

function updateBtnText(btn, newBtnText) {
  const childNodes = btn.children;
  const childArr = [...childNodes];
  childArr.forEach(function(childEl) {
    if (childEl.tagName === 'SPAN') {
      childEl.innerHTML = newBtnText;
    }
  })
}

function showSelectedProjectTodos() {
  const selectedProject = getSelectedProject();
  const todoIDs = selectedProject.getTodoIDs();
  todoIDs.forEach(function (todoID) {
    const todoNode = document.querySelector('#' + todoID);
    unhide(todoNode);
  })
}

function hideAllTodos() {
  const todoNodes = document.querySelectorAll('.todo');
  todoNodes.forEach(function ensureTodoHidden(todoNode) {
    const classes = DOM.getClasses(todoNode);
    if (!(classes.includes(HIDE_CLASS))) {
      hide(todoNode);
    }
  })
}

function hideAllTasks() {
  const taskNodes = document.querySelectorAll('.todo .task-list');
  taskNodes.forEach(function ensureTaskHidden(taskNode) {
    const classes = DOM.getClasses(taskNode);
    if (!(classes.includes(HIDE_CLASS))) {
      hide(taskNode);
    }
  })
}

/**
 * Checks to see if any complete todo is hidden. 
 * If TRUE, all completed todos are unhidden. 
 * If FALSE, all completed todos are hidden.
 */
function toggleShowHideCompleteTodos() {
  if (HIDE_COMPLETE_TODOS) {
    HIDE_COMPLETE_TODOS = false;
    showCompleteTodos();
    updateBtnText(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN, 'Hide Complete Todos');
  } else {
    HIDE_COMPLETE_TODOS = true;
    hideCompleteTodos();
    updateBtnText(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN, 'Show Complete Todos');
  }
}

function hideCompleteTodos() {
  const todoNodes = document.querySelectorAll('.todo-complete');
  todoNodes.forEach(function(todoNode) {
    hide(todoNode);
  })
}

function hideAddTodoBtn() {
  hide(TODO_OPTIONS_LI_ADD_TODO_BTN);
}

function hideHideCompleteTodosBtn() {
  hide(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN);
}

function unhideAddTodoBtn() {
  unhide(TODO_OPTIONS_LI_ADD_TODO_BTN);
}

function unhideHideCompleteTodosBtn() {
  unhide(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN);
}

function showCompleteTodos() {
  // Only unhide complete todos IF THEY ARE FOR the currently selected project
  const selectedProject = getSelectedProject();
  const todoIDs = selectedProject.getTodoIDs();
  todoIDs.forEach(function(todoID) {
    const todoEl = document.querySelector('#' + todoID);
    unhide(todoEl);
  })
}

function deleteChildren(parentEl) {
  while (parentEl.firstChild) {
    parentEl.lastChild.remove();
  }
}

function deleteSelectedProject() {
  const selectedProject = getSelectedProject();
  const selectedProjectEl = getSelectedProjectEl();
  const todoIDs = selectedProject.getTodoIDs();
  // delete all todo elements that have an id included in this array
  todoIDs.forEach(function(todoID) {
    const todoEl = document.querySelector('#' + todoID);
    if (todoEl) {
      deleteChildren(todoEl);
      todoEl.remove();
    }
  })
  
  deleteChildren(selectedProjectEl)
  selectedProjectEl.parentNode.removeChild(selectedProjectEl);
  
  App.delProject(selectedProject.getID());
  
  if (projectsExist()) {
    selectLastProject();
    const newlySelectedProject = getSelectedProject();
    unhideTodos(newlySelectedProject);
  } else {
    hideAddTodoBtn();
    hideHideCompleteTodosBtn();
    hideEditThisProjectBtn();
    hideDeleteThisProjectBtn();
  }

  save();
}

function updateTextContent(ele, newText) {
  ele.textContent = newText;
}

function setProjectEditHeaderToCreate() {
  updateTextContent(PROJECT_EDIT_PANE_FORM_HEADER_SPAN, PROJECT_EDIT_HEADER_CREATE_TEXT);
}

function setTodoEditHeaderToCreate() {
  updateTextContent(TODO_EDIT_PANE_FORM_HEADER_SPAN, TODO_EDIT_HEADER_CREATE_TEXT);
}

function setProjectEditHeaderToEdit() {
  updateTextContent(PROJECT_EDIT_PANE_FORM_HEADER_SPAN, PROJECT_EDIT_HEADER_EDIT_TEXT);
}

function setTodoEditHeaderToEdit() {
  updateTextContent(TODO_EDIT_PANE_FORM_HEADER_SPAN, TODO_EDIT_HEADER_EDIT_TEXT);
}

function unhide(element) {
  if (isHidden(element)) {
    DOM.declassify(element, [HIDE_CLASS]);
  }
}

function hide(element) {
  DOM.classify(element, [HIDE_CLASS]);
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

function setProjectFormModeToCreate() {
  DOM.classify(PROJECT_EDIT_PANE_FORM, [PROJECT_EDIT_PANE_FORM_EDIT_MODE_CLASS]);
  DOM.classify(PROJECT_EDIT_PANE_FORM, [PROJECT_EDIT_PANE_FORM_CREATE_MODE_CLASS]);
}

function setProjectFormModeToEdit() {
  DOM.declassify(PROJECT_EDIT_PANE_FORM, [PROJECT_EDIT_PANE_FORM_CREATE_MODE_CLASS]);
  DOM.classify(PROJECT_EDIT_PANE_FORM, [PROJECT_EDIT_PANE_FORM_EDIT_MODE_CLASS]);
}

function stageAddProjectForm() {
  setProjectEditHeaderToCreate();
  let project = new App.Project();
  fillProjectForm(project);
  App.delProject(project.getID());
  setProjectFormModeToCreate();
  unhideProjectEditPane();
  project = null;
}

function stageEditProjectForm() {
  setProjectEditHeaderToEdit();
  const currProject = getSelectedProject();
  const currProjectTitleInput = document.querySelector('input[name=project-title]');
  currProjectTitleInput.value = currProject.getTitle();
  setProjectFormModeToEdit();
  toggleHideProjectEditPane();
}

function clearTasksFromTodoForm(taskList) {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.lastChild);
  }
}

function stageAddTodoForm() {
  setTodoEditHeaderToCreate();
  clearTasksFromTodoForm(TODO_EDIT_PANE_FORM_EDIT_TODO_TASK_LIST);
  let todo = new App.Todo();
  fillTodoForm(todo);
  unhideTodoEditPane();
  App.delTodo(todo.getID());
  todo = null;
}

function stageEditTodoForm() {
  const todoEl = this.parentNode.parentNode.parentNode;
  const todoObj = App.getTodo(todoEl.id);
  setTodoEditHeaderToEdit();
  clearTasksFromTodoForm(TODO_EDIT_PANE_FORM_EDIT_TODO_TASK_LIST);
  fillTodoForm(todoObj);
  unhideTodoEditPane();
}

// PROJECT EDIT PANE
// ENSURES TOGGLED
function toggleHideProjectEditPane() {
  toggleClass(PROJECT_EDIT_PANE, HIDE_CLASS);
}

// ENSURES UNHIDDEN
function unhideProjectEditPane() {
  unhide(PROJECT_EDIT_PANE);
}

// ENSURES HIDDEN
function hideProjectEditPane() {
  hide(PROJECT_EDIT_PANE);
}

function resetProjectEditForm() {
  let project = new App.Project();
  fillProjectForm(project);
  App.delProject(project.getID());
  project = null;
}

function hideAndResetProjectEditForm() {
  hideProjectEditPane();
  resetProjectEditForm();
}

// TODO EDIT PANE
// ENSURES UNHIDDEN
function unhideTodoEditPane() {
  unhide(TODO_EDIT_PANE);
}

// ENSURES HIDDEN
function hideTodoEditPane() {
  hide(TODO_EDIT_PANE);
}

function hideAndResetTodoEditForm() {
  hideTodoEditPane();
  resetTodoEditPane();
}

function resetTodoEditPane() {
  let todo = new App.Todo();
  fillTodoForm(todo);
  App.delTodo(todo.getID());
  todo = null;
}
/**
 * Returns true if any '.project' elements are found - false otherwise
*/
function projectsExist() {
  const projectsFound = document.querySelectorAll('.project').length;
  return (projectsFound ? true : false);
}

function hideEditThisProjectBtn() {
  if (!(projectsExist())) {
    hide(TODO_OPTIONS_LI_EDIT_THIS_PROJECT_BTN);
  }
}
function hideDeleteThisProjectBtn() {
  if (!(projectsExist())) {
    hide(TODO_OPTIONS_LI_DELETE_THIS_PROJECT_BTN);
  }
}
function unhideEditThisProjectBtn() {
  unhide(TODO_OPTIONS_LI_EDIT_THIS_PROJECT_BTN);
}
function unhideDeleteThisProjectBtn() {
  unhide(TODO_OPTIONS_LI_DELETE_THIS_PROJECT_BTN);
}

function projectFormModeIsCreate() {
  const classes = DOM.getClasses(PROJECT_EDIT_PANE_FORM);
  let result;
  if (classes.includes(PROJECT_EDIT_PANE_FORM_CREATE_MODE_CLASS)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function updateBtnDisplay() {
  if (projectsExist()) {
    unhideEditThisProjectBtn();
    unhideDeleteThisProjectBtn();
    if (isHidden(TODO_OPTIONS_LI_ADD_TODO_BTN)) {
      unhideAddTodoBtn();
      unhideHideCompleteTodosBtn();
    }
  }
}

function submitProjectForm() {
  let title = PROJECT_EDIT_PANE_FORM_EDIT_PROJECT_TITLE_INPUT.value;
  hideProjectEditPane();
  resetProjectEditForm();
  let projectEl;
  if (projectFormModeIsCreate()) {
    projectEl = createAndDomifyProject(title)[1];
      clearProjectSelection();
      hideAllTodos();
      selectLastProject();
      const selectedProject = getSelectedProject();
      unhideTodos(selectedProject);
  } else {
    const projectEl = getSelectedProjectEl();
    const projectElTitleSpan = projectEl.querySelector('span.project-title');
    projectElTitleSpan.textContent = title;

    const projectObj = getSelectedProject();
    projectObj.title = title;
  }
  updateBtnDisplay();
  save();
  return projectEl;
}

/**
 * the currently 'selected' project as an object, so that that project object can be used and manipulated
 * @returns Project
 */
function getSelectedProject() {
  const selectedProjectElID = document.querySelector('.project.selected').id;
  const projectArray = App.getProjects();
  let project;
  projectArray.forEach(function (projectObj) {
    if (projectObj.getID() === selectedProjectElID) {
      project = projectObj;
    }
  })
  return project;
}

function unhideTodos(project) {
  const todoIDs = project.getTodoIDs();
  const todoEls = document.querySelectorAll('.todo');
  todoEls.forEach(function(todoEl) {
    if (todoIDs.includes(todoEl.id)) {
      unhide(todoEl);
    }
  })
}

function selectThisProject() {
  const projectEl = this.parentNode;
  clearProjectSelection();
  selectProject(projectEl);
  const project = getSelectedProject();
  hideAllTodos();
  unhideTodos(project);
  if (HIDE_COMPLETE_TODOS) {
    hideCompleteTodos();
  }
}

function selectProject(projectEl) {
  DOM.classify(projectEl, ['selected']);
}

function deselectProject(projectEl) {
  DOM.declassify(projectEl, ['selected']);
}

function selectLastProject() {
  const projects = document.querySelectorAll('.project');
  let ctProjects = projects.length;
  const lastProjectEl = projects[--ctProjects];
  selectProject(lastProjectEl);
  
  return lastProjectEl;
}

function selectFirstProject() {
  const projectEls = document.querySelectorAll('.project');
  const projectEl = projectEls[0];
  selectProject(projectEl);
  
  return projectEl;
}

function clearProjectSelection() {
  const selectedProjectEl = getSelectedProjectEl();
  if (!(selectedProjectEl === null)) {
    deselectProject(selectedProjectEl);
  }
}

/**
 * 
 * @param {*} taskNodes Array of DOM nodes that containing task data that can later be used to create tasks
 * @returns 
 */
function getTodoFormTaskValues(taskNodes) {
  let taskValues;
  const todoID = TODO_EDIT_PANE_FORM_EDIT_TODO_ID_SPAN.textContent;
  const taskValuesArray = new Array();
  taskNodes.forEach(function(taskNode) {
    let taskIsComplete;
    let taskClasses = DOM.getClasses(taskNode);
    if (taskClasses.includes(TASK_COMPLETE_CLASS)) {
      taskIsComplete = true;
    } else {
      taskIsComplete = false;
    }
    let taskTitle = taskNode.querySelector('input').value;
    taskValues = [taskTitle, taskIsComplete, todoID];
    taskValuesArray.push(taskValues);
  })

  return taskValuesArray;
}

function getTasksFromTaskValues(taskValuesArray) {
  let title;
  let isComplete;
  let todoID;
  let task;
  const tasks = new Array();
  taskValuesArray.forEach(function(taskValueArray) {
    [title, isComplete, todoID] = taskValueArray;
    task = new App.Task(title, isComplete, todoID);
    tasks.push(task);
  })
  return tasks;
}

function updateTasksFromTaskValues(taskValuesArray) {
  let parentTodoID;
  // delete tasks previously belonging to this todo
  const oldTasks = App.getTasks();
  let todoID;
  oldTasks.forEach(function(oldTask) {
    todoID = oldTask.getTodoID();
    if (todoID === parentTodoID) {
      App.delTask(oldTask.getID());
    }
  })
  // recreate these tasks and assign them to this Todo
  const newTasks = getTasksFromTaskValues(taskValuesArray);

  return newTasks;
}

/**
 * Returns the values from a TodoForm
 * @returns [title, priority, dueDate, isComplete, tasks, notes]
 */
function getTodoFormValues() {
    let title = TODO_EDIT_PANE_FORM_EDIT_TODO_TITLE_INPUT.value;
    let priority = document.querySelector('input[name="priority-level"]:checked').value;
    let dueDate = TODO_EDIT_PANE_FORM_EDIT_TODO_DUE_DATE_INPUT.value;
    let isComplete = TODO_EDIT_PANE_FORM_EDIT_TODO_IS_COMPLETE_INPUT.checked;
    let taskValues = getTodoFormTaskValues(document.querySelectorAll('.form-section > ul.task-list > li.task'));
    let notes = TODO_EDIT_PANE_FORM_EDIT_TODO_NOTES_TEXTAREA.value;

    return [title, priority, dueDate, isComplete, taskValues, notes];
}

function todoFormInCreateMode() {
  return (TODO_EDIT_PANE_FORM_HEADER_SPAN.textContent === TODO_EDIT_HEADER_CREATE_TEXT)
}

/**
 * Collects Todo form values to either CREATE a new Todo object or UPDATE an existing Todo, and updating the screen
 */
function submitTodoForm() {
  let [title, priority, dueDate, isComplete, taskValues, notes] = getTodoFormValues();
  console.log(title);
  console.log(priority);
  console.log(dueDate);
  console.log(isComplete);
  console.log(taskValues);
  console.log(notes);

  // inspect the header to determine what the outcome of submitting of the form should be
  if (todoFormInCreateMode()) {
    updateTasksFromTaskValues(taskValues);
    createAndDomifyTodo(title, priority, dueDate, isComplete, notes);
  } else {
    updateTasksFromTaskValues(taskValues);
    updateTodo(title, priority, dueDate, isComplete, notes, TODO_EDIT_PANE_FORM_EDIT_TODO_ID_SPAN.textContent);
  }
  save();
  updateCtTodos();
}

/**
 * Takes two buttons - reveals the first by removing the 'hide' class and hides the second by applying the 'hide' class
 * @param {*} showButton 
 * @param {*} hideButton 
 */
function showHideButtons(showButton, hideButton) {
  unhide(showButton);
  hide(hideButton);
}

function showTasks() {
  let todoLine1 = this.parentNode.parentNode.parentNode;
  let todoLine2 = todoLine1.nextSibling;
  let taskList = todoLine2.querySelector('.task-list');
  // SHOW tasks
  unhide(taskList);
  // SHOW minimizer button - HIDE expander button
  const expanderBtn = todoLine1.querySelector('.expander-btn');
  const minimizerBtn = todoLine1.querySelector('.minimizer-btn');
  showHideButtons(minimizerBtn, expanderBtn);
}

function hideTasks() {
  let todoLine1 = this.parentNode.parentNode.parentNode;
  let todoLine2 = todoLine1.nextSibling;
  let taskList = todoLine2.querySelector('.task-list');
  hide(taskList);
  const expanderBtn = todoLine1.querySelector('.expander-btn');
  const minimizerBtn = todoLine1.querySelector('.minimizer-btn');
  showHideButtons(expanderBtn, minimizerBtn);
}

/**
 * Creates a Project object and saves to localStorage
 * @param {*} title 
 * @param {*} id 
 * @returns Project
 */
function createProject(title, id) {
  const projectObj = new App.Project(title, id);
  return projectObj;
}

/**
 * Takes a Project object and adds it to the DOM - updating peripheral functionality as necessary
 * @param {*} projectObj 
 * @returns Project HTML Element
 */
function domifyProject(projectObj) {
  const projectEl = drawProject(US_PROJECT_LIST_UL, projectObj)
  addBtnFn(projectEl.querySelector('button.project-btn'), selectThisProject, 'click');
  clearProjectSelection();
  selectLastProject();
  unhideTodos(projectObj);
  updateBtnDisplay();

  return projectEl;
}
/**
 * Routes calls to 'createProject' and 'domifyProject'
 * @param {*} title 
 * @param {*} id 
 * @returns [Project object, Project HTML element]
 */
function createAndDomifyProject(title, id) {
  const projectObj = createProject(title, id);
  const projectEl = domifyProject(projectObj);
  return [projectObj, projectEl];
}

function getSelectedProjectID() {
  const selectedProjectID = document.querySelector('.project.selected').id;
  return selectedProjectID;
}

function getProjectByID(projectID) {
  const projectObj = App.getProject(projectID);
  return projectObj;
}

function getSelectedProjectEl() {
  const projectEl = document.querySelector('.project.selected');
  return projectEl;
}
/**
 * Creates a new Todo object and saves to localStorage
 * @param {*} title 
 * @param {*} priority 
 * @param {*} dueDate 
 * @param {*} isComplete 
 * @param {*} tasks 
 * @param {*} notes 
 * @param {*} projectID 
 * @param {*} id 
 * @returns 
 */
function createTodo(title, priority, dueDate, isComplete, notes, projectID, id) {
  hideTodoEditPane();
  resetTodoEditPane();
  let todoObj;
  let pid;
  if (projectID) {
    pid = projectID;
  } else {
    pid = getSelectedProjectID();
  }
  todoObj = new App.Todo(title, priority, dueDate, isComplete, notes, pid, id);

  return todoObj;
}

/**
 * Creates DOM elements to display a Todo object and adds appropriate listeners
 * @param {*} todoObj 
 * @returns 
 */
function domifyTodo(todoObj) {
  const todoEl = drawTodo(TODO_LIST, todoObj);
  hideAllTasks();
  addTodoListeners(todoEl);

  return todoEl;
}

function addTodoListeners(todoEl) {
  const expanderBtn = todoEl.querySelector('.expander-btn');
  const minimizerBtn = todoEl.querySelector('.minimizer-btn');
  const editBtn = todoEl.querySelector('.edit-todo-btn');

  addBtnFn(expanderBtn, showTasks);
  addBtnFn(minimizerBtn, hideTasks);
  addBtnFn(editBtn, stageEditTodoForm);

  return todoEl;
}

/**
 * Creates a new Todo object and adds DOM elements to display on the screen
 * @param {*} title 
 * @param {*} priority 
 * @param {*} dueDate 
 * @param {*} isComplete 
 * @param {*} notes 
 * @param {*} projectID 
 * @param {*} id 
 * @returns [Todo object, Todo HTML Element]
 */
function createAndDomifyTodo(title, priority, dueDate, isComplete, notes, projectID, id) {
  const todoObj = createTodo(title, priority, dueDate, isComplete, notes, projectID, id);
  const todoEl = domifyTodo(todoObj);
  return [todoObj, todoEl];
}

function createTask(title, isComplete, todoID, id) {
  const taskObj = new App.Task(title, isComplete, todoID, id);
  return taskObj;
}

/**
 * Updates a pre-existing todo in App memory and updates DOM elements
 * @param {*} title 
 * @param {*} priority 
 * @param {*} dueDate 
 * @param {*} isComplete 
 * @param {*} tasks 
 * @param {*} notes 
 * @param {*} todoID 
 * @returns [Todo object, Todo HTML Element]
 */
function updateTodo(title, priority, dueDate, isComplete, tasks, notes, todoID) {
  hideTodoEditPane();
  resetTodoEditPane();
  const todoObj = App.getTodo(todoID);
  todoObj.title = title;
  todoObj.priority = priority;
  todoObj.dueDate = dueDate;
  todoObj.isComplete = isComplete;
  todoObj.notes = notes;

  // UPDATE DOM
  // Get references
  const todoEl = document.querySelector('#' + todoID);
  const titleEl = todoEl.querySelector('.todo-title');
  const dueDateEl = todoEl.querySelector('.todo-due-date');
  const priorityBtnImg = todoEl.querySelector('.todo-priority-btn-img');
  const isCompleteBtnImg = todoEl.querySelector('.todo-checkbox-btn-img');
  const taskListEl = todoEl.querySelector('.task-list');

  // Update DOM content using updated Todo values
  // TITLE
  titleEl.textContent = todoObj.getTitle();
  // DUE DATE
  dueDateEl.value = todoObj.getDueDate();
  // PRIORITY
  let priorityImgURL;
  switch (todoObj.getPriority()) {
    case 'low':
      priorityImgURL = lowPriorityIcon;
      break;
    case 'medium':
      //something
      priorityImgURL = mediumPriorityIcon;
      break;
    case 'high':
      priorityImgURL = highPriorityIcon;
      break;
  }
  priorityBtnImg.src = priorityImgURL;
  // IS COMPLETE
  let checkboxImg;
  if (todoObj.isComplete === false) {
    checkboxImg = todoIncompleteIcon;
    DOM.declassify(todoEl, ['todo-complete']);
  } else {
    checkboxImg = todoCompleteIcon;
    DOM.classify(todoEl, ['todo-complete']);
  }
  isCompleteBtnImg.src = checkboxImg;
  // TASKS
  deleteChildren(taskListEl);
  tasks.forEach(function(task) {
    drawTaskDisplayMode(taskListEl, task);
  })

  return [todoObj, todoEl];
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

function getStorageItem(item) {
  let itemStorage;
  let parsedItem;
  if (storageAvailable('localStorage')) {
    let locStorage = getStorage();
    itemStorage = locStorage.getItem(item);
    if (!(itemStorage === null)) {
      parsedItem = JSON.parse(itemStorage);
    } else {
      parsedItem = [];
    }
  }
  return parsedItem;
}

/**
 * Saves projects, todos, and tasks to separate localStorage key-item pairs
 */
function save() {
  const projects = App.getProjects();
  localStorage.setItem('projects', JSON.stringify(projects));

  const todos = App.getTodos();
  localStorage.setItem('todos', JSON.stringify(todos));

  const tasks = App.getTasks();
  localStorage.setItem('tasks', JSON.stringify(tasks));

}

function startup() {
  // Project Add and Project Edit button listeners
  addBtnFn(US_PROJECT_LIST_ADD_PROJECT_BTN, stageAddProjectForm);
  addBtnFn(TODO_OPTIONS_LI_EDIT_THIS_PROJECT_BTN, stageEditProjectForm);
  // Todo Option button listeners
  addBtnFn(TODO_OPTIONS_LI_ADD_TODO_BTN, stageAddTodoForm);
  // Form listeners
  addBtnFn(PROJECT_EDIT_PANE_FORM_DISCARD_BTN, hideAndResetProjectEditForm);
  // differentiate between submission from 'create' versions of form to 'edit' versions of the form
  addBtnFn(PROJECT_EDIT_PANE_FORM_SUBMISSION_CONTAINER_BTN, submitProjectForm);
  addBtnFn(TODO_EDIT_PANE_FORM_DISCARD_BTN, hideAndResetTodoEditForm);
  addBtnFn(TODO_EDIT_PANE_FORM_EDIT_TODO_SUBMISSION_BTN, submitTodoForm);
  addBtnFn(TODO_OPTIONS_LI_HIDE_COMPLETE_TODOS_BTN, toggleShowHideCompleteTodos);
  addBtnFn(TODO_OPTIONS_LI_DELETE_THIS_PROJECT_BTN, deleteSelectedProject);
  addBtnFn(TODO_EDIT_PANE_FORM_EDIT_TODO_ADD_TASK_BTN, drawNewTask);

  hideAllTasks();
  hideAddTodoBtn();
  hideHideCompleteTodosBtn();
  
  // local storage steps here
  // retrieve objects from local storage
  const projectStorageItems = getStorageItem('projects');
  const todoStorageItems = getStorageItem('todos');
  const taskStorageItems = getStorageItem('tasks');

  const projects = new Array();
  const todos = new Array();
  const tasks = new Array();

  projectStorageItems.forEach(function(projectStorageItem) {
    const project = createProject(
      projectStorageItem.title, 
      projectStorageItem.id
    );
    projects.push(project);
  })

  todoStorageItems.forEach(function(todoStorageItem) {
    const todo = createTodo(
      todoStorageItem.title, 
      todoStorageItem.priority, 
      todoStorageItem.dueDate,
      todoStorageItem.isComplete,
      todoStorageItem.notes,
      todoStorageItem.projectID,
      todoStorageItem.id
    );
    todos.push(todo);
  })

  taskStorageItems.forEach(function(taskStorageItem) {
    const task = createTask(
      taskStorageItem.title, 
      taskStorageItem.isComplete,
      taskStorageItem.todoID,
      taskStorageItem.id,
    );
    tasks.push(task);
  })

  console.log(projects);
  console.log(todos);
  console.log(tasks);

  if (projects.length > 0) {
    projects.forEach(function(project) {
      domifyProject(project);
      todos.forEach(function revealTodo(todo) {
        if (todo.projectID === project.getID()) {
          domifyTodo(todo);
          const taskList = document.querySelector('#' + todo.id + ' .task-list');
          tasks.forEach(function(task) {
            if (task.todoID === todo.id) {
              drawTaskDisplayMode(taskList, task);
            }
          })
        }
      })
    })
    updateCtTodos();
    hideAllTodos();
    clearProjectSelection();
    selectFirstProject();
    showSelectedProjectTodos();
  }
}

startup();
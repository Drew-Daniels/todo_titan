'use strict';

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

// Set Constants
const TITLE_TEXT = 'Todo Titan'
const HTML = DOM.getHTML();
const HEAD = DOM.getHead();

// +++++ INITIAL PAGE SETUP +++++
// === HEAD ===
const FAVICON = DOM.createFavicon(todoTitanIcon);
DOM.attach(FAVICON, HEAD);
const TITLE = DOM.createTitle(TITLE_TEXT);
DOM.attach(TITLE, HEAD);

// === BODY (Content-Container)===
const BODY = DOM.getBody();
DOM.addClasses(BODY, 'content-container');
DOM.attach(BODY, HTML);

// = CONTENT =
const CONTENT = DOM.createDiv('content');
DOM.attach(CONTENT, BODY);
// Header
const HEADER = DOM.createHeader();
DOM.attach(HEADER, CONTENT);
const LOGO_NAME_CONTAINER = DOM.createDiv('logo-name-container');
DOM.attach(LOGO_NAME_CONTAINER, HEADER);

// Main
const MAIN = DOM.createMain()
DOM.attach(MAIN, CONTENT);

// Footer
const FOOTER = DOM.createFooter(CONTENT);
DOM.attach(FOOTER, CONTENT);



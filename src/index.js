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
const TITLE_TEXT = 'Todo Titan';
const LOGO_TEXT = 'TODO Titan';
const FOOTER_TEXT = 'View Source code on';
const GITHUB_PROFILE_TEXT = 'Created by';
const GITHUB_PROJECT_URL = 'https://github.com/Drew-Daniels/todo_titan';
const GITHUB_PROFILE_URL = 'https://github.com/Drew-Daniels';

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


// Main
const MAIN = DOM.createMain(CONTENT);

// Footer
const FOOTER = DOM.createFooter(CONTENT);
DOM.setInnerText(FOOTER, FOOTER_TEXT);

const GITHUB_PROJECT_ANCHOR = DOM.createAnchor(FOOTER, GITHUB_PROJECT_URL);
const GITHUB_IMG = DOM.createImage(GITHUB_PROJECT_ANCHOR, githubIcon, 'Github Icon', 'github-icon')

const GITHUB_PROFILE_CONTAINER = DOM.createDiv(FOOTER, 'github-profile-container');
GITHUB_PROFILE_CONTAINER.innerText = 'Created by';

const GITHUB_PROFILE_ANCHOR = DOM.createAnchor(GITHUB_PROFILE_CONTAINER, GITHUB_PROFILE_URL, 'github-profile-link');
GITHUB_PROFILE_ANCHOR.innerText = 'Drew Daniels';



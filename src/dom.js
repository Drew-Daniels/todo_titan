'use strict';

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

// Create Functions
function createFavicon(faviconPath, attachTo) {
  let faviconEl = document.createElement('link');
  faviconEl.setAttribute('rel', 'shortcut icon');
  faviconEl.setAttribute('href', faviconPath);
  attachTo.appendChild(faviconEl);
  return faviconEl;
}
function createTitle(webpagetitle, attachTo) {
  let titleEl = document.createElement('title');
  titleEl.innerHTML = webpagetitle;
  attachTo.appendChild(titleEl);
  return titleEl;
}
function createHeader(attachTo, ...classes) {
  let headerEl = document.createElement('header');
  headerEl = classify(headerEl, classes);
  attachTo.appendChild(headerEl);
  return headerEl;
}
function createMain(attachTo, ...classes) {
  let mainEl = document.createElement('main');
  mainEl = classify(mainEl, classes);
  attachTo.appendChild(mainEl);
  return mainEl;
}
function createFooter(attachTo, ...classes) {
  let footerEl = document.createElement('footer');
  footerEl = classify(footerEl, classes);
  attachTo.appendChild(footerEl);
  return footerEl;
}
function createDiv(attachTo, ...classes) {
  let divEl = document.createElement('div');
  divEl = classify(divEl, classes);
  attachTo.appendChild(divEl);
  return divEl;
}
function createButton(attachTo, ...classes) {
  let buttonEl = document.createElement('button');
  buttonEl.type = 'button';
  buttonEl = classify(buttonEl, classes);
  attachTo.appendChild(buttonEl);
  return buttonEl;
}
function createImage(attachTo, src, alt, ...classes) {
  let imageEl = document.createElement('img');
  imageEl.src = src;
  imageEl.alt = alt;
  imageEl = classify(imageEl, classes);
  attachTo.appendChild(imageEl);
  return imageEl;
}
function createSpan(attachTo, text, ...classes) {
  let spanEl = document.createElement('span');
  spanEl.innerText = text;
  spanEl = classify(spanEl, classes);
  attachTo.appendChild(spanEl);
  return spanEl;
}
function createAnchor(attachTo, href, ...classes) {
  let anchorEl = document.createElement('a');
  anchorEl.href = href;
  anchorEl = classify(anchorEl, classes);
  attachTo.appendChild(anchorEl);
  return anchorEl;
}
function createUL(attachTo, ...classes) {
  let ulEl = document.createElement('ul');
  ulEl = classify(ulEl, classes);
  attachTo.appendChild(ulEl);
  return ulEl;
}
function createOL(attachTo, ...classes) {
  let olEl = document.createElement('ol');
  olEl = classify(olEl, classes);
  attachTo.appendChild(olEl);
  return olEl;
}
function createLI(attachTo, ...classes) {
  let liEl = document.createElement('li');
  liEl = classify(liEl, classes);
  attachTo.appendChild(liEl);
  return liEl;
}
function createForm(attachTo, action='', ...classes) {
  let formEl = document.createElement('form');
  formEl.action = action;
  formEl = classify(formEl, classes);
  attachTo.appendChild(formEl);
  return formEl;
}
function createInput(attachTo, type, name, value, ...classes) {
  let inputEl = document.createElement('input');
  inputEl.type = type;
  inputEl.name = name;
  inputEl.value = value;
  inputEl = classify(inputEl, classes);
  attachTo.appendChild(inputEl);
  return inputEl;
}

function createLabel(attachTo, labelFor, labelText, ...classes) {
  let labelEl = document.createElement('label');
  labelEl.innerText = labelText;
  labelEl.htmlFor = labelFor;
  labelEl = classify(labelEl, classes);
  attachTo.appendChild(labelEl);
  return labelEl;
}
function createTextArea(attachTo, name, cols='30', rows='10', text='Default Text', ...classes) {
  let textAreaEl = document.createElement('textarea');
  textAreaEl.name = name;
  textAreaEl.cols = cols;
  textAreaEl.rows = rows;
  textAreaEl.innerText = text;
  textAreaEl = classify(textAreaEl, classes);
  attachTo.appendChild(textAreaEl);
  return textAreaEl;
}

// draw functions
function drawProject(attachTo, project) {
  let projectEl = createLI(attachTo, 'project');

  let projectElBtn = createButton(projectEl, 'project-btn');
  let projectElImg = createImage(projectElBtn, projectListIcon,'project-image');
  let projectElTitle = createSpan(projectElBtn, project.getTitle(),'project-title');
  let numTodosContainer = createDiv(projectEl, 'num-todos-container');
  let numTodos = createSpan(numTodosContainer, project.getCtTodos(), 'num-todos');

  attachTo.appendChild(projectEl);
  return
}

function drawTodo(attachTo, todo) {
  let todoEl = createLI(attachTo, 'todo');

  // +++ line 1 +++
  let line1 = createDiv(todoEl, 'todo-line-1');
  // col 1
  let col1 = createDiv(line1, 'todo-col-base', 'todo-col-1');
  let todoCheckBoxBtn = createButton(col1, 'todo-checkbox');
  let todoImg;
  if (todo.isComplete === false) {
    todoImg = todoIncompleteIcon;
  } else {
    todoImg = todoCompleteIcon;
    todoEl = classify(todoEl, ['todo-complete']);
  }
  let checkboxBtnImg = createImage(todoCheckBoxBtn, todoImg);
  let todoTitle = createSpan(col1, todo.getTitle(), 'todo-title');

  // col 2
  let col2 = createDiv(line1, 'todo-col-base', 'todo-col-2');
  // TODO: format the date
  let dueDate = createSpan(col2, todo.getDueDate(),'todo-due-date');
  let expanderContainer = createDiv(col2, 'expander-container');
  let expandMoreBtn = createButton(expanderContainer);
  let expandMoreBtnImg = createImage(expandMoreBtn, todoExpandMoreIcon);
  let expandLessBtn = createButton(expanderContainer, 'hide');
  let expandLessBtnImg = createImage(expandLessBtn, todoExpandLessIcon);

  let editBtn = createButton(col2);
  let editBtnImg = createImage(col2, todoEditIcon)

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
  let priorityImg = createImage(col2, priorityImgURL);
  // +++ line 2 +++
  let line2 = createDiv(todoEl, 'todo-line-2');
  let taskList = createUL(line2, 'task-list');
  let tasks = todo.getTasks();
  tasks.forEach(task => {
    drawTask(taskList, task);
  });

  attachTo.appendChild(todoEl);
  return todoEl;
}
function drawTask(attachTo, task) {
  let taskEl = createLI(attachTo, 'task');
  let taskCheckbox = createButton(taskEl, 'task-checkbox');
  let taskImg;
  if (task.isComplete === false) {
    taskImg = taskIncompleteIcon;
  } else {
    taskImg = taskCompleteIcon;
  }
  let taskCheckboxImg = createImage(taskCheckbox, taskImg);
  let taskTitle = createSpan(taskEl, task.getTitle());
  return taskEl;
}

// GET Functions - Used to grab nodes that exist by default or have already been created using the functions above
function getHTML() {
  let htmlEl = document.querySelector('html');
  return htmlEl;
}
function getHead() {
  let headEl = document.querySelector('head');
  return headEl;
}
function getBody() {
  let bodyEl = document.querySelector('body');
  return bodyEl;
}

// HELPER functions
function addClasses(element, ...classes) {
  element.classList.add(classes);
  return element;
}
function classify(element, classes) {
  if (classes.length !== 0) {
    element.classList.add(...classes);
  }
  return element;
}
function declassify(element, classToRemove) {
  if (classes.length !== 0) {
    element.classList.remove(classToRemove);
  }
  return element;
}
function attach(element, attachTo) {
  attachTo.appendChild(element);
}
function setInnerText(element, text) {
  element.innerText = text;
}

// Export
export default {
  // CREATE functions
  createFavicon, createTitle, createHeader, createMain, createFooter, createDiv, createButton, createImage, createSpan, createAnchor, createUL, createOL, createLI, createForm, createLabel, createInput, createTextArea,
  // GET functions
  getHTML, getHead, getBody,
  // HELPER functions
  addClasses, attach, setInnerText,
  // DRAW functions
  drawProject, drawTodo,
  };
'use strict';

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
function createTextArea(attachTo, name, cols='30', rows='10', text='', ...classes) {
  let textAreaEl = document.createElement('textarea');
  textAreaEl.name = name;
  textAreaEl.cols = cols;
  textAreaEl.rows = rows;
  textAreaEl.innerText = text;
  textAreaEl = classify(textAreaEl, classes);
  attachTo.appendChild(textAreaEl);
  return textAreaEl;
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
  // expects an array of class names
  if (classes.length !== 0) {
    element.classList.add(...classes);
  }
  return element;
}
function declassify(element, classesToRemove) {
  // expects an array of class names
  if (classesToRemove.length !== 0) {
    for (let i=0; i < classesToRemove.length; i++) {
      element.classList.remove(classesToRemove[i]);
    }
  }
  return element;
}
function getClasses(element) {
  const classList = element.className.split(' ');
  return classList;
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
  addClasses, attach, setInnerText, classify, declassify, getClasses,
  };
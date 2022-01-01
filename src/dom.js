'use strict';

// Create Functions
function createFavicon(faviconPath) {
    let faviconEl = document.createElement('link');
    faviconEl.setAttribute('rel', 'shortcut icon');
    faviconEl.setAttribute('href', faviconPath);
    return faviconEl;
}
function createTitle(webpagetitle) {
    let titleEl = document.createElement('title');
    titleEl.innerHTML = webpagetitle;
    return titleEl;
}
function createHeader() {
    let headerEl = document.createElement('header');
    return headerEl;
}
function createMain() {
    let mainEl = document.createElement('main');
    return mainEl;
}
function createFooter() {
    let footerEl = document.createElement('footer');
    return footerEl;
}
function createDiv(...classes) {
    let divEl = document.createElement('div');
    if (classes !== 'undefined') {
        divEl.classList.add(classes);
    }
    return divEl;
}
function createButton(buttonText, ...classes) {
    let buttonEl = document.createElement('button');
    buttonEl.innerText = buttonText;
    if (classes !== 'undefined') {
        buttonEl.classList.add(classes);
    }
    return buttonEl;
}
function createImage(src, alt, ...classes) {
    let imageEl = document.createElement('img');
    imageEl.src = src;
    imageEl.alt = alt;
    if (classes !== 'undefined') {
        imageEl.classList.add(classes);
    }
    return imageEl;
}
function createSpan(text, ...classes) {
    let spanEl = document.createElement('span');
    spanEl.innerText = text;
    if (classes !== 'undefined') {
        spanEl.classList.add(classes);
    }
    return spanEl;
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
function attach(element, attachTo) {
    attachTo.appendChild(element);
}

// Export
export default {
    // CREATE functions
    createFavicon, createTitle, createHeader, createMain, createFooter, createDiv, createButton, createImage, createSpan,
    // GET functions
    getHTML, getHead, getBody,
    // HELPER functions
    addClasses, attach};
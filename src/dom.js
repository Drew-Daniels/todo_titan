'use strict';
const HEAD = document.querySelector('head');
const TITLE = document.createElement('title');
const HEADER = document.createElement('header');
const BODY = document.createElement('body');
const MAIN = document.createElement('main');
const FOOTER = document.createElement('footer');

function addFavicon(faviconPath) {
    let faviconEl = document.createElement('link');
    faviconEl.setAttribute('rel', 'shortcut icon');
    faviconEl.setAttribute('href', faviconPath);
    HEAD.appendChild(faviconEl);
}

function addTitle(webpageTitle) {
    let titleEl = document.createElement('title');
    titleEl.innerHTML = webpageTitle;
    HEAD.appendChild(titleEl);
}

export default {addFavicon, addTitle};
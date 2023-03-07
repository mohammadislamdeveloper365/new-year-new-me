let openMenu = getElement('.new-year-open-menu');
let closeMenu = getElement('.new-year-close-menu');
let mainMenu = getElement('.new-year-main-menu');


addListener(openMenu, 'click', function () {
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
    mainMenu.style.display = 'flex';
});

addListener(closeMenu, 'click', function () {
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
    mainMenu.style.display = 'none';
});



function getElement(id) {
    return document.querySelector(id);
}

function addListener(element, eventType, callBack) {
    element.addEventListener(eventType, callBack);
}
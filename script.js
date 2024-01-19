//burger menu click event listener
document.querySelector(`.burger-menu`).addEventListener(`click`, function(event) {
    
    let menuWrapper = document.querySelector(`.main-menu-mobile-wrapper`);
    if (!menuWrapper.classList.contains(`shown`)) menuWrapper.classList.add(`shown`);
    if (menuWrapper.classList.contains(`hidden`)) menuWrapper.classList.remove(`hidden`); 

    let menu = document.querySelector(`.main-menu-mobile`);
    if (!menu.classList.contains(`shown`)) menu.classList.add(`shown`);
    if (menu.classList.contains(`hidden`)) menu.classList.remove(`hidden`);
});

//close beurger menu click event listener
document.querySelector(`.close-menu-mobile-btn`).addEventListener(`click`, function(e){
    let menuWrapper = document.querySelector(`.main-menu-mobile-wrapper`);
    if (menuWrapper.classList.contains(`shown`)) menuWrapper.classList.remove(`shown`);
    if (!menuWrapper.classList.contains(`hidden`)) menuWrapper.classList.add(`hidden`); 

    let menu = document.querySelector(`.main-menu-mobile`);
    if (menu.classList.contains(`shown`)) menu.classList.remove(`shown`);
    if (!menu.classList.contains(`hidden`)) menu.classList.add(`hidden`);
});
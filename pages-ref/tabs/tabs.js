const menuItems = document.querySelectorAll('.tab-menu-item');
const contentItems = document.querySelectorAll('.tab');

let currentMenu = menuItems[0];
let currentItem = contentItems[0];

menuItems.forEach((e, i) => {
    e.addEventListener('click', () => {
        currentMenu.classList.remove('active-menu');
        currentItem.classList.remove('active-content');
        menuItems[i].classList.add('active-menu');
        contentItems[i].classList.add('active-content');
        currentMenu = menuItems[i];
        currentItem = contentItems[i];
    })
})
const accordionItems = document.querySelectorAll('.accordion-list-item');
const accordionSublist = document.querySelectorAll('.accordion-sublist');
const accordionPlusItems = document.querySelectorAll('.plus');

let currentOpenedItem = accordionItems[0];
let currentMinus = accordionPlusItems[0];

accordionItems.forEach((e, i) => {
    e.addEventListener('click', () => {
        if (accordionSublist[i] === currentOpenedItem && accordionSublist[i].classList.contains('accordion-list-opened')) {
            currentOpenedItem.classList.remove('accordion-list-opened');
            currentMinus.classList.remove('minus');
            return;
        }
        currentOpenedItem.classList.remove('accordion-list-opened');
        currentMinus.classList.remove('minus');
        accordionSublist[i].classList.toggle('accordion-list-opened');
        accordionPlusItems[i].classList.toggle('minus');
        currentOpenedItem = accordionSublist[i];
        currentMinus = accordionPlusItems[i];
    })
});

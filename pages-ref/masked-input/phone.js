const phoneInput = document.getElementById('phone');
const form = document.getElementById('form');
const phone = document.getElementById('phone');
const sheetMonkey = 'https://api.sheetmonkey.io/form/rGv5WdVcYLTm5gq7R4hTHj' // ссылка на таблицу

$("#phone").mask("+380 (99) 999-99-99",{autoclear: false, placeholder: "0"});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newForm = document.createElement('form');
    const name = document.createElement('input');
    const phone = document.createElement('input');

    newForm.setAttribute("method", "post");
    newForm.setAttribute("action", sheetMonkey);
    newForm.setAttribute('target', 'output');
    newForm.style.height = 0;
    newForm.style.overflow = 'hidden';
    

    name.setAttribute("type", "hidden");
    name.setAttribute("name", "name");
    name.value = form.elements.name.value;

    phone.setAttribute("type", "hidden");
    phone.setAttribute("name", "phone");
    phone.value = form.elements.phone.value.slice(1, form.elements.phone.value.length);

    newForm.appendChild(name);
    newForm.appendChild(phone);
    document.body.appendChild(newForm);
    newForm.submit();
    document.body.removeChild(newForm);
});

// let maskOptions = {
//     mask: '+38{0} (00) 000-00-00',
//     lazy: false,
//     greedy: false,
//     placeholderChar: '0',
// }

// let mask = IMask(phoneInput, maskOptions);
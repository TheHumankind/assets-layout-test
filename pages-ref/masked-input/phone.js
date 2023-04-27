const phoneInput = document.getElementById('phone');

let maskOptions = {
    mask: '+{38} ( 000 ) 000 - 00 - 00',
    lazy: false,
    placeholderChar: '_',
};

let mask = IMask(phoneInput, maskOptions);
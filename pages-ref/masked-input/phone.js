const phoneInput = document.getElementById('phone');

let maskOptions = {
    mask: '+38{0} (00) 000-00-00',
    lazy: false,
    greedy: false,
    placeholderChar: '0',
}

let mask = IMask(phoneInput, maskOptions);
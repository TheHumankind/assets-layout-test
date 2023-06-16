const popBG = document.getElementById('popBackground');
const notificationMessage = document.getElementById('notification')

const rejectBtn = document.getElementById('disagreeBtn');
const agreeBtn = document.getElementById('agreeBtn')


rejectBtn.addEventListener('click', () => {
    popBG.classList.remove('on');
});

agreeBtn.addEventListener('click', () => {
    notificationMessage.classList.remove('on');
})
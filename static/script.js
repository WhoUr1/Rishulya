// ========== Падающие сердечки ==========

const HEART_EMOJIS = ['❤️', '💖', '💕', '💗', '💝', '💞', '💓'];
const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
    const heart = document.createElement('div');

    heart.classList.add('heart');
    heart.textContent =
        HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.opacity = (Math.random() * 0.4 + 0.5).toString();

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 250);


// ========== Живой таймер отношений ==========

// Получаем данные из HTML
const timerMode = document.body.dataset.mode;
const startDate = new Date(document.body.dataset.startDate);

// Элементы таймера
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateTimer() {
    const now = new Date();

    let difference;

    if (timerMode === 'together') {
        // Сколько времени прошло с начала отношений
        difference = now - startDate;
    } else {
        // Сколько осталось до начала
        difference = startDate - now;
    }

    // Защита от отрицательного времени
    if (difference < 0) {
        difference = 0;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysElement.textContent = days;
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
}

// Сразу показываем правильное значение
updateTimer();

// Обновляем каждую секунду
setInterval(updateTimer, 1000);


// ========== Сюрприз ==========

function showSurprise() {
    const surprise = document.getElementById('surprise');
    const isHidden = surprise.classList.contains('hidden');

    surprise.classList.toggle('hidden');

    // Если открыли — взрыв сердечек
    if (isHidden) {
        for (let i = 0; i < 40; i++) {
            setTimeout(createHeart, i * 40);
        }

        // Плавно прокрутить к сюрпризу
        setTimeout(() => {
            surprise.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 300);
    }
}
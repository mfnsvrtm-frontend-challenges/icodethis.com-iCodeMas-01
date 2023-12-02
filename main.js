
const template = document.querySelector('.card-template').content;
const countdown = document.querySelector('.countdown');

countdown.append(
    ...['Days', 'Hours', 'Minutes', 'Seconds'].map(unit => {
        const instance = template.cloneNode(true).firstElementChild;
        instance.classList.add(unit.toLowerCase());
    
        const unitEl = instance.querySelector('.unit');
        unitEl.textContent = unit;

        return instance;
    })
)

function updateDelta() {
    const delta = calculateDelta();
    const el = {
        days: document.querySelector(`.days`),
        hours: document.querySelector(`.hours`),
        minutes: document.querySelector(`.minutes`),
        seconds: document.querySelector(`.seconds`),
    }
    const units = ['days', 'hours', 'minutes', 'seconds'];

    for (const unit of units) {
        el[unit].querySelector('.value').textContent = delta[unit];
    }

    for (const unit of units) {
        if (delta[unit] == 0) {
            el[unit].classList.add('hidden');
        } else {
            break;
        }
    }
}

function calculateDelta() {
    const today = new Date();
    const christmas = new Date(today.getFullYear() + 1, 0);

    let delta = (christmas - today) / 1000;

    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    const hours = Math.floor(delta / 3600);
    delta -= hours * 3600;

    const minutes = Math.floor(delta / 60);
    delta -= minutes * 60;

    const seconds = Math.floor(delta);

    return {
        days,
        hours,
        minutes,
        seconds,
    };
}

updateDelta();
setInterval(updateDelta, 1000);
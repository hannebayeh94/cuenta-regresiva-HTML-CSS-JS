

const $days = document.getElementById('days');
const $hours = document.getElementById('hours');
const $minutes = document.getElementById('minutes');
const $seconds = document.getElementById('seconds');
const $finalMessage = document.querySelector('.final-sms');


// fecha a futuro
const countDownDate = new Date('Dec 25, 2022 00:00:00').getTime();


let interval = setInterval(() => {

    // fecha actual y milisegundos
    const now = new Date().getTime();

    // obtener las distancia entre ambas fechas 
    let distance = countDownDate - now;

    // calculo de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / (1000));    


    // mostrar resultado
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    // final message
    if (distance < 0) {
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
    }

    
}, 1000);

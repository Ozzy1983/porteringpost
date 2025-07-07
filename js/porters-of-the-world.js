function updateClock(id, offsetHours) {
    const clock = document.getElementById(id);
    const now = new Date();
    
    // UTC time + offset
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const localTime = new Date(utc + (3600000 * offsetHours));

    let hours = localTime.getHours().toString().padStart(2, '0');
    let minutes = localTime.getMinutes().toString().padStart(2, '0');
    let seconds = localTime.getSeconds().toString().padStart(2, '0');

    clock.innerHTML = `
        <h3>${hours}</h3>
        <h3>:</h3>
        <h3>${minutes}</h3>
        <h3>:</h3>
        <h3>${seconds}</h3>
    `;
}

// Actualizar cada segundo
setInterval(() => {
    updateClock("london-clock", 0);     // GMT
    updateClock("kampala-clock", 6);    // GMT+6
}, 1000);

// Ejecutar al cargar
updateClock("london-clock", 0);
updateClock("kampala-clock", 6);


//SLIDER

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const buttons = document.querySelectorAll('.btn');

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    buttons[i].classList.remove('active');
  });

  slides[index].classList.add('active');
  buttons[index].classList.add('active');

  currentSlide = index;
}

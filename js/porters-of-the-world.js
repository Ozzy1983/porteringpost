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
        <h3 id="target01">${hours}</h3>
        <h3>:</h3>
        <h3 id="target02">${minutes}</h3>
        <h3>:</h3>
        <h3 id="target03">${seconds}</h3>
    `;
}

// Actualizar cada segundo
setInterval(() => {
    updateClock("london-clock", 0);     // GMT
    updateClock("kampala-clock", 8);    // GMT+8
}, 1000);

// Ejecutar al cargar
updateClock("london-clock", 0);
updateClock("kampala-clock", 8);


//SLIDER

const slideContainer = document.getElementById("slideContainer");
const totalSlides = slideContainer.children.length;
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  slideContainer.style.transform = `translateX(-${300 * currentIndex}px)`;
}, 5000); // cambia cada 5 segundos

// SECOND SLIDER

const slides = document.querySelectorAll(".slide");
let currentIndex2 = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  changeSlide(currentIndex2 + 1);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  changeSlide(currentIndex2 - 1);
});

function changeSlide(index) {
  slides[currentIndex2].classList.remove("active");
  currentIndex2 = (index + slides.length) % slides.length;
  slides[currentIndex2].classList.add("active");
}

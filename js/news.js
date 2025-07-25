//DIVS EFFECTS

const entradas = document.querySelectorAll('.entrada');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

entradas.forEach(el => observer.observe(el));

/*SHOW THE TEXT */
function toggleNews(element) {
  const texto = element.querySelector(".news-text");
  if (texto.style.display === "block") {
    texto.style.display = "none";
    } else {
    texto.style.display = "block";
  }
}


// SLIDER BUTTON

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const buttons = document.querySelectorAll(".slider-buttons .btn");

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    buttons[i].classList.toggle("active", i === index);
  });
}




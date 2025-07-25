document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Solo se anima una vez. Si quieres que se repita, quita esta línea:
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Se activa cuando el 20% del elemento está visible
      }
    );

    const paragraph = document.querySelector(".text-effect");
    observer.observe(paragraph);
});


// FECHA ACTUAL

const fechaElemento = document.getElementById("fecha-actual");
const hoy = new Date();

// Opcional: formato personalizado (dd/mm/yyyy)
const opciones = { day: '2-digit', month: '2-digit', year: 'numeric' };
const fechaFormateada = hoy.toLocaleDateString('es-ES', opciones);

fechaElemento.textContent = fechaFormateada;
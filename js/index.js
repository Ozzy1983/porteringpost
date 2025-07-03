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

    const paragraph = document.querySelector(".text p");
    observer.observe(paragraph);
});
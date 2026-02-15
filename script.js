document.addEventListener('DOMContentLoaded', () => {

  const petalsLayer = document.getElementById('petals-layer');
  const envelope = document.getElementById('envelope');
  const flowerScreen = document.getElementById('flower-screen');
  const overlay = document.getElementById('overlay');
  const music = document.getElementById('bg-music');


  const mensajes = [
    "Amo tu sonrisa", "Eres mi luz", "Gracias por estar", "Eres increíble",
    "Dianita hermosa", "Mi lugar seguro", "Eres magia", "Te admiro tanto",
    "Eres mi mundo", "Tan inteligente", "Me encantas", "Pura ternura",
    "Mi persona fav", "Eres arte", "Siempre contigo", "Eres valiente",
    "Tu alegría sana", "Eres perfecta", "Amo tus locuras", "Mi corazón",
    "Inspiradora", "Mi gran apoyo", "Eres paz", "Tan dulce",
    "Mi vida entera", "Amo tu fuerza", "Única en el mundo", "Mi mejor regalo",
    "Eres mi sol", "Te amo infinito", "Mi niña de las pulseras", "La chabubu girl XD",
    "El amor de mi vida", "Mi alma gemela", "Mi 14 favorito", "Mi mejor decisión",
    "La más bonita de la calle mollendo"
  ];

  function createPetals() {

    mensajes.forEach((msj, i) => {

      const petal = document.createElement('div');
      petal.className = 'petal';

      let layer = Math.floor(i / 10);
      let angle = (i % 10) * (360 / 10);

      let distance = 80 + (layer * 30);
      let rotation = angle + (layer * 15);

      petal.style.transform = `rotate(${rotation}deg) translateY(-${distance}px)`;
      petal.dataset.originalTransform = petal.style.transform;

      petal.innerHTML = `<span>${msj}</span>`;

      petal.addEventListener('click', (e) => {
        e.stopPropagation();

        closePetal();

        petal.classList.add('active');
        overlay.classList.add('show');
      });

      petalsLayer.appendChild(petal);

    });

  }
  document.addEventListener("click", e => {
        const activePetal = document.querySelector(".petal.active");
        const activeCenter = document.querySelector(".flower-center.active-center");

        if (!activePetal && !activeCenter) return;

        if (
            activePetal && activePetal.contains(e.target)
        ) return;

        if (
            activeCenter && activeCenter.contains(e.target)
        ) return;

        closePetal();
    });

  envelope.addEventListener('click', () => {

    envelope.classList.add('hidden');
    flowerScreen.classList.remove('hidden');

    createPetals();

    music.play().catch(() => {});

  });



    function closePetal() {
        document.querySelectorAll(".petal.active")
            .forEach(p => p.classList.remove("active"));

        document.querySelector(".flower-center")
            ?.classList.remove("active-center");

        overlay.classList.remove("show");

    }

    const center = document.querySelector(".flower-center");

    center.addEventListener("click", e => {
    e.stopPropagation();

    closePetal();

    center.classList.add("active-center");
    overlay.classList.add("show");

    launchLoveParticles();
    });

    function launchLoveParticles() {

    for (let i = 0; i < 40; i++) {

        const spark = document.createElement("div");
        spark.className = "spark";

        spark.style.left = (window.innerWidth / 2) + "px";
        spark.style.top = (window.innerHeight / 2) + "px";

        spark.style.setProperty("--x", (Math.random() - 0.5) * 400 + "px");
        spark.style.setProperty("--y", (Math.random() - 0.5) * 400 + "px");

        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), 1200);

    }

    }

});

const body = document.querySelector("body");
const particleContainer = document.getElementById("particle-container");

// Arka plan ışığını ve partikülleri tetikleyen ana olay
window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // 1. MAVİ AYDINLATMA EFEKTİ
  // Renkleri biraz daha belirginleştirdim
  body.style.background = `radial-gradient(circle at ${x}px ${y}px, #14213d 0%, #090a0f 50%)`;

  // 2. BEYAZ PARTİKÜL EFEKTİ
  createParticle(x, y);
});

function createParticle(x, y) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const size = Math.random() * 4 + "px";
  particle.style.width = size;
  particle.style.height = size;

  particle.style.left = x + "px";
  particle.style.top = y + "px";

  particleContainer.appendChild(particle);

  const destinationX = (Math.random() - 0.5) * 100;
  const destinationY = (Math.random() - 0.5) * 100;

  const animation = particle.animate(
    [
      { transform: `translate(0, 0)`, opacity: 1 },
      { transform: `translate(${destinationX}px, ${destinationY}px)`, opacity: 0 },
    ],
    {
      duration: 800 + Math.random() * 600,
      easing: "ease-out",
    }
  );

  animation.onfinish = () => particle.remove();
}
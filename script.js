const body = document.querySelector("body");
const particleContainer = document.getElementById("particle-container");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Arka plan aydınlatma
  body.style.background = `radial-gradient(circle at ${x}px ${y}px, #14213d 0%, #090a0f 50%)`;

  // Mavi partikül oluşturma
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
      { transform: "translate(0, 0)", opacity: 0.8 },
      {
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0,
      },
    ],
    { duration: 1000, easing: "ease-out" },
  );

  animation.onfinish = () => particle.remove();
}

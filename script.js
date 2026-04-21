const body = document.querySelector('body');
const particleContainer = document.getElementById('particle-container');

body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // 1. DAHA HAFİF IŞIK: Işığın yarıçapını ve parlaklığını azalttık
    body.style.background = `radial-gradient(circle at ${x}px ${y}px, #14213d 0%, #090A0F 40%)`;

    // 2. PARTİKÜL EFEKTİ (Yıldız Tozu)
    createParticle(x, y);
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Rastgele boyut (1px ile 4px arası)
    const size = Math.random() * 4 + 'px';
    particle.style.width = size;
    particle.style.height = size;
    
    // Konum
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    particleContainer.appendChild(particle);
    
    // Partikülün rastgele bir yöne dağılması
    const destinationX = (Math.random() - 0.5) * 100;
    const destinationY = (Math.random() - 0.5) * 100;
    
    const animation = particle.animate([
        { transform: `translate(0, 0)`, opacity: 1 },
        { transform: `translate(${destinationX}px, ${destinationY}px)`, opacity: 0 }
    ], {
        duration: 1000 + Math.random() * 1000,
        easing: 'ease-out'
    });

    // Animasyon bitince elementi sil ki bilgisayarı yormasın
    animation.onfinish = () => particle.remove();
}
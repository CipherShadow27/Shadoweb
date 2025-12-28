btn.addEventListener('click', () => {
    overlay.style.display = 'flex';
    runLoading();
});

function runLoading() {
    let p = 0;
    const interval = setInterval(() => {
        p += 1;
        fill.style.width = p + "%";
        perc.innerText = p + "%";

        if (logs[p]) {
            msg.innerText = logs[p];
            // Efecto de parpadeo rojo cuando hay advertencias
            if(p === 70) msg.style.color = '#ff003c';
            else msg.style.color = '#00f2ff';
        }
        if (p >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                alert("Carga completa. Redirigiendo...");
            }, 800);
        }
    }, 50); // Velocidad: 80ms por cada 1%
}
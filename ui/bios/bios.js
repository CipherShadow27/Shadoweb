// ui/bios/bios.js

export function initShell() {
    updateClock();
    setInterval(updateClock, 1000);
    setSystemMode(); 
}

export function setBiosLoading(active) {
    const leds = document.querySelectorAll('.led-indicator');
    const statusText = document.getElementById('led-status-text');

    if (active) {
        leds.forEach(led => {
            led.classList.add('active-loading'); // Asegúrate de tener esta clase en CSS
        });
        if(statusText) statusText.innerText = "SYSTEM_READY";
    } else {
        setSystemMode(); // Vuelve al color de la hora
    }
}

// Función interna (no necesita export si solo se usa aquí)
function setSystemMode() {
    const hour = new Date().getHours();
    const leds = document.querySelectorAll('.led-indicator');
    
    leds.forEach(led => {
        led.classList.remove('active-primex', 'active-xentinelx', 'active-cypherx', 'active-loading');
    });

    if (hour >= 5 && hour < 12) {
        leds.forEach(led => led.classList.add('active-primex'));
    } else if (hour >= 12 && hour < 20) {
        leds.forEach(led => led.classList.add('active-xentinelx'));
    } else {
        leds.forEach(led => led.classList.add('active-cypherx'));
    }
}

function updateClock() {
    const clockEl = document.getElementById('clock-display');
    if(clockEl) {
        const now = new Date();
        clockEl.innerText = now.toLocaleTimeString('es-MX');
    }
}
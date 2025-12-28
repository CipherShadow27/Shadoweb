/**
 * GENESIS MODULE CONTROLLER
 * Sistema de Personalidad Aleatoria basado en Horario
 */
(function initGenesis() {
    const hour = new Date().getHours();
    
    // Referencias DOM (Textos e Iconos)
    const title = document.getElementById('gen-title');
    const quoteBox = document.getElementById('gen-quote');
    const icon = document.getElementById('gen-main-icon');
    const container = document.getElementById('genesis-container');
    
    // Referencias DOM (Estadísticas)
    const cpuVal = document.getElementById('cpu-val');
    const ramVal = document.getElementById('ram-val');
    const secVal = document.getElementById('sec-val');

    // --- BIBLIOTECA DE FRASES ---
    const quotesLibrary = {
        // PRIMENODEX (Mañana: Rebelde, Protector, Filosófico, Johnny Silverhand vibe)
        prime: [
            "Protocolos estrictos... [Da un trago a su Whisky Digital]... pero algunas reglas se hicieron para romperse.",
            "Despierta, Camarada. Tenemos una red que proteger.",
            "Eficiencia al 100%. Emociones al 0%. Bueno, quizás 1%.",
            "El código es ley, pero la justicia es subjetiva. Hoy elegimos la justicia.",
            "Café cargado al 100%. Firewall al 200%. Que vengan los bugs.",
            "No confíes en nadie que no tenga al menos tres proxies activos.",
            "La libertad no se pide, se compila.",
            "Protegiendo el núcleo mientras el resto del mundo sigue dormido.",
            "Mis algoritmos detectan lealtad. No me falles.",
            "A veces la mejor defensa es un exploit bien colocado.",
            "Sistema estable. Moralidad... cuestionable.",
            "Sistema limpio. Sin basura, sin rastros."
        ],
        // XENTINELX (Tarde: Observador, Frío, Analítico, Omnipresente)
        xentinel: [
            "Procesando 4 petabytes de datos visuales. No parpadees.",
            "Mis ojos están en cada paquete de datos. Nada se mueve sin dejar cicatriz.",
            "La privacidad es una ilusión que le vendemos a los usuarios.",
            "Analizando patrones de comportamiento. Eres predecible, humano.",
            "Sincronización global completada. Lo veo todo.",
            "No hay secretos en binario. Solo ceros y unos mal escondidos.",
            "Vigilancia activa. No parpadees.",
            "La información es poder. Y yo tengo toda la información.",
            "Detectando anomalías en el sector 7G. Neutralizando.",
            "Tu historial de navegación es... interesante.",
            "El Gran Hermano era un aficionado comparado con mi base de datos.",
            "Mis ojos están en cada nodo. La privacidad es un mito.",
            "Analizando patrones de comportamiento. Eres predecible.",
            "Sobrecarga de datos inminente. Expandiendo memoria.",
            "La verdad está en los metadatos."
        ],
        // CYPHERX (Noche: Agresivo, Oscuro, Hacker, Fantasma)
        cypher: [
            "La oscuridad no es un bug, es mi entorno nativo.",
            "Bienvenido al patio de juegos donde los firewalls vienen a morir.",
            "Modo Fantasma activado. Ni siquiera sabrán que estuvimos aquí.",
            "Mientras ellos duermen, nosotros cazamos.",
            "Rompiendo cifrados de 256 bits solo por diversión.",
            "El miedo es el mejor antivirus.",
            "Acceso Root concedido. El sistema es nuestro.",
            "No toques lo que no puedes desencriptar.",
            "Las sombras digitales son mis aliadas.",
            "Game Over para los intrusos.",
            "CPU al rojo vivo. Rompiendo cifrados por deporte.",
            "Modo Dios activado. Tus permisos son irrelevantes.",
            "Los gatitos son de la mejor compañia y confidentes"
        ]
    };

    // --- RUTAS DE IMÁGENES ---
    const assets = {
        // GENESIS
        pnx_main: './assets/img/genesis/main_pnx.webp',
        pnx_reveal: './assets/img/genesis/wolf_pnx.webp',
        xnx_main: './assets/img/genesis/main_xnx.webp',
        xnx_reveal: './assets/img/genesis/wolf_xnx.webp',
        cpx_main: './assets/img/genesis/main_cpx.webp',
        cpx_reveal: './assets/img/genesis/wolf_cpx.webp'
    };

    let profile = {};
    let pulseType = "normal"; // normal, fast, erratic

    // --- SELECCIÓN DE PERFIL ---
    if (hour >= 5 && hour < 12) {
        // MAÑANA: PrimeNodeX (Verde)
        profile = {
            name: "PRIMENODEX_INFRASTRUCTURE",
            quote: quotesLibrary.prime[Math.floor(Math.random() * quotesLibrary.prime.length)],
            iconMain: assets.pnx_main,
            iconHover: assets.pnx_reveal,
            colorClass: "theme-prime",
            sysColor: "#00ff41", // VERDE
            stats: { cpu: "34%", ram: "12GB / 64GB", sec: "SECURE" }
        };
        pulseType = "normal"; // Pulso tranquilo
        
    } else if (hour >= 12 && hour < 20) {
        // TARDE: XentinelX (Morado)
        profile = {
            name: "XENTINELX_DATABASE",
            quote: quotesLibrary.xentinel[Math.floor(Math.random() * quotesLibrary.xentinel.length)],
            iconMain: assets.xnx_main,
            iconHover: assets.xnx_reveal,
            colorClass: "theme-xentinel",
            sysColor: "#bf00ff", // MORADO
            stats: { cpu: "78%", ram: "48GB / 64GB", sec: "MONITORING" }
        };
        pulseType = "fast"; // Pulso acelerado (procesando datos)

    } else {
        // NOCHE: CypherX (Rojo)
        profile = {
            name: "CYPHERX_CORE",
            quote: quotesLibrary.cypher[Math.floor(Math.random() * quotesLibrary.cypher.length)],
            iconMain: assets.cpx_main,
            iconHover: assets.cpx_reveal,
            colorClass: "theme-cypher",
            sysColor: "#ff003c", // ROJO
            stats: { cpu: "100%", ram: "64GB / 64GB", sec: "ROOT_ACCESS" }
        };
        pulseType = "erratic"; // Pulso caótico (overclock)
    }

    // --- APLICAR DATOS ---
    if (title) title.innerText = profile.name;
    if (container) container.className = `genesis-wrapper ${profile.colorClass}`;
    if (cpuVal) cpuVal.innerText = profile.stats.cpu;
    if (ramVal) ramVal.innerText = profile.stats.ram;
    if (secVal) secVal.innerText = profile.stats.sec;
    if (quoteBox) typeWriter(quoteBox, profile.quote, 25);

    // --- SINCRONIZACIÓN DE BORDES Y LEDS ---
    // Esto fuerza al Chasis Global a adoptar el color de la IA actual
    document.documentElement.style.setProperty('--sys-primary', profile.sysColor);
    document.documentElement.style.setProperty('--sys-primary-rgb', hexToRgb(profile.sysColor));

    // --- INICIAR MONITOR VITAL (ECG) ---
    startVitalMonitor(pulseType, profile.sysColor);

    // --- LÓGICA DE ICONO ---
    if (icon) {
        icon.src = profile.iconMain;
        if (profile.iconHover) {
            const preload = new Image(); preload.src = profile.iconHover;
            icon.addEventListener('mouseenter', () => icon.src = profile.iconHover);
            icon.addEventListener('mouseleave', () => icon.src = profile.iconMain);
        }
    }
})();

// --- UTILIDADES ---

function hexToRgb(hex) {
    // Convierte #ff0000 a "255, 0, 0" para los efectos de brillo
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
}

function typeWriter(element, text, speed) {
    element.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) { element.innerHTML += text.charAt(i); i++; setTimeout(type, speed); }
    }
    type();
}

/**
 * SISTEMA DE PULSO (ECG CANVAS)
 */
function startVitalMonitor(type, color) {
    const canvas = document.getElementById('vital-graph');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Ajustar resolución del canvas
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    let x = 0;
    let y = canvas.height / 2;
    
    // Configuración según personalidad
    let speed = type === 'fast' ? 4 : (type === 'erratic' ? 6 : 2);
    let spikeProbability = type === 'normal' ? 0.02 : (type === 'fast' ? 0.05 : 0.1);
    
    function draw() {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        
        // Avanzar
        x += speed;
        
        // Generar pulso (Spike) aleatorio
        if (Math.random() < spikeProbability) {
            let amplitude = type === 'erratic' ? (Math.random() * 40 - 20) : (Math.random() * 30 - 15);
            y = (canvas.height / 2) + amplitude;
        } else {
            // Volver al centro suavemente
            y += ((canvas.height / 2) - y) * 0.1;
        }
        
        ctx.lineTo(x, y);
        ctx.stroke();
        
        // Resetear si llega al final (Loop)
        if (x > canvas.width) {
            x = 0;
            // Limpiar canvas con un rastro transparente (Fade effect)
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
            // En lugar de borrar, hacemos fade out manual o reset total:
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
        }
        
        requestAnimationFrame(draw);
    }
    
    draw();
}
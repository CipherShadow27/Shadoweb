/**SHADOWCORE KERNEL v2.0 - BIGSHADOW LABS Sistema de Gestión de Procesos y Gatekeeper Dinámico*/
import { setBiosLoading, initShell } from '../../ui/bios/bios.js';
const sysAudio = new Audio('./assets/audio/access.mp3');
sysAudio.volume = 0.3;

const SYSTEM_CONFIG = {
    // Definición de Procesos y sus Reglas de Acceso
    processes: {
        'genesis': {
            name: 'PRIMENODEX_INFRASTRUCTURE',
            path: './modules/genesis/genesis.html',
            theme: 'genesis', // Verde-Amarillo
            loader: 'gatekeeper',
            symbol: 'shield', // Escudo Digital
            messages: {
                10: "ESTABLECIENDO ENTORNO GENESIS...",
                30: "CARGANDO LIBRERIAS ENCRIPTADAS...",
                60: "DESCRIPTANDO SECTOR ZERO...",
                80: "ACCESO ROOT TEMPORAL.",
                100: "BIENVENIDO AL SISTEMA."
            }
        },
        'trinity': {
            name: 'XENTINELX_DATABASE',
            path: './modules/trinity/trinity.html',
            theme: 'trinity', // Azul-Morado
            loader: 'gatekeeper',
            symbol: 'eye', // El Ojo
            messages: {
                10: "SINCRONIZANDO ONDAS CEREBRALES...",
                30: "CARGANDO LIBRERÍAS DE TRINITYOX...",
                50: "XENTINELX MONITOREANDO SESIÓN...",
                70: "ADVERTENCIA: INTENTO DE ACCESO EXTERNO DETECTADO.",
                80: "ELIMINANDO INTRUSOS DE LA RED...",
                100: "BIENVENIDO AL SISTEMA."
            }
        },
        'protocol': {
            name: 'CYPHERX_CORE',
            path: './modules/protocol/protocol.html',
            theme: 'protocol', // Multicolor
            loader: 'gatekeeper',
            symbol: 'skull', // Calavera
            messages: {
                10: "VALIDANDO CREDENCIALES BSL...",
                30: "ESTABLECIENDO PROTOCOLO NEURONAL...",
                50: "ESCANEO BIOMÉTRICO EN CURSO...",
                70: "NÚCLEO ESTABLE AL 100%.",
                100: "AUTENTICACIÓN COMPLETA."
            }
        }
    }
};

// --- ORQUESTADOR PRINCIPAL ---
window.onload = async () => {
    const isBooted = sessionStorage.getItem('sys_booted');
    
    if (!isBooted) {
        // Lanza el logo institucional (main.png)
        await runInitialBoot();
        sessionStorage.setItem('sys_booted', 'true');
    }
    // Iniciar por defecto en Genesis
    launchProcess('genesis');
};

/**Lanza un proceso completo: Transición -> Loader -> Contenido*/
window.launchProcess = async function(processKey) {
    const config = SYSTEM_CONFIG.processes[processKey];
    if (!config) return console.error("ERR: PROCESS_NOT_FOUND");

    if (typeof setBiosLoading === "function") setBiosLoading(true);

    const viewport = document.getElementById('process-viewport');

    // 1. Aplicar Identidad Visual al CSS Global
    document.body.setAttribute('data-active-env', config.theme);

    // 2. Ejecutar Gatekeeper (Cerberus Evolucionado)
    await runGatekeeper(config);

    // 3. Inyectar Módulo Final
    try {
        const response = await fetch(config.path);
        const html = await response.text();
        
        viewport.innerHTML = html;
        
        // Cargar recursos específicos (CSS/JS) del módulo
        loadResources(processKey);
        
        if (typeof setBiosLoading === "function") setBiosLoading(false);

    } catch (err) {
        viewport.innerHTML = `<div class="sys-error">CRITICAL_FETCH_ERROR: ${processKey.toUpperCase()}</div>`;
    }
};

/**Maneja la pantalla de carga institucional inicial*/
async function runInitialBoot() {
    const viewport = document.getElementById('process-viewport');
    const messages = [
        "Initializing ShadowCore...",
        "Verifying system integrity...",
        "Loading interface modules...",
        "Establishing secure channels...",
        "Access granted."
    ];
    try {
        const resp = await fetch('./modules/loaders/boot/boot.html');
        viewport.innerHTML = await resp.text();
        const logContainer = document.getElementById('boot-logs');
        
        
        for (let i = 0; i < messages.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 800));
            const line = document.createElement('div');
            line.innerText = `> ${messages[i]}`;
            logContainer.appendChild(line);
        }
        // Breve espera final antes de entrar a Genesis
        return new Promise(resolve => setTimeout(resolve, 4000)); // 4 seg de logo BSL

    } catch (e) { return Promise.resolve(); }
}

/**Gatekeeper: Transforma a Cerberus según el símbolo y mensajes*/
async function runGatekeeper(config) {
    const viewport = document.getElementById('process-viewport');

    // --- SEGURIDAD CRÍTICA ---
    // Usamos 'viewport' en lugar de 'overlay' porque el overlay se borra al hacer fetch.
    // El viewport siempre existe, así que es el lugar seguro para guardar el ID.
    if (viewport.dataset.processId) {
        clearInterval(Number(viewport.dataset.processId));
        viewport.dataset.processId = ""; // Limpiamos la marca
    }
    
    const resp = await fetch('./modules/loaders/cerberus/cerberus.html');
    viewport.innerHTML = await resp.text();

    const symbolImg = document.getElementById('gatekeeper-symbol');

    const symbolMap = {
        'skull': './assets/img/system/icon_skull.webp',
        'eye': './assets/img/system/icon_eye.webp',
        'shield': './assets/img/system/icon_shield.webp'
    };
    // Pequeña validación por si el config no tiene symbol definido
    if(symbolImg && config.symbol) {
        symbolImg.src = symbolMap[config.symbol] || symbolMap['shield'];
    }
    
    // 2. Lógica de la barra de carga
    const overlay = document.getElementById('loader-viewport');
    const fill = document.getElementById('fill');
    const perc = document.getElementById('perc');
    const msg = document.getElementById('status-msg');
    const symbol = document.getElementById('gatekeeper-symbol');

    // Resetear UI
    if (overlay) overlay.style.display = 'flex';
    if (fill) fill.style.width = "0%";
    if (perc) perc.innerText = "0%";
    if (msg) msg.innerText = "INICIANDO...";
    
    // Cambiar Icono (Redundancia de seguridad)
    if (symbol) symbol.src = `./assets/img/system/icon_${config.symbol}.webp`; 

    return new Promise(resolve => {
        let p = 0;
        
        // Iniciamos el intervalo y lo guardamos en una constante
        const interval = setInterval(() => {
            p++;
            
            if (fill) fill.style.width = p + "%";
            if (perc) perc.innerText = p + "%";
            
            if (config.messages && config.messages[p] && msg) {
                msg.innerText = config.messages[p];
            }

            if (p >= 100) {
                // Limpieza al terminar correctamente
                clearInterval(interval);
                // Borramos la marca del VIEWPORT
                viewport.dataset.processId = ""; 
                
                setTimeout(() => {
                    if (overlay) overlay.style.display = 'none';
                    resolve();
                }, 800);
            }
        }, 30); 

        // 2. SEGURIDAD: GUARDAR EL ID EN EL VIEWPORT
        // Esto evita que si recargas rápido, el intervalo anterior siga vivo.
        viewport.dataset.processId = interval;
    });
}


/**Inyecta dinámicamente CSS y JS del módulo*/
function loadResources(name) {
    // Limpiar estilos y scripts previos para evitar colisiones
    document.getElementById('module-styles')?.remove();
    document.getElementById('module-script')?.remove();

    const link = document.createElement('link');
    link.id = 'module-styles';
    link.rel = 'stylesheet';
    link.href = `./modules/${name}/${name}.css`;
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.id = 'module-script';
    script.src = `./modules/${name}/${name}.js`;
    document.body.appendChild(script);
}

function updateClock() {
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ":" + 
            now.getMinutes().toString().padStart(2, '0') + ":" + 
            now.getSeconds().toString().padStart(2, '0');
    
    // Check de seguridad por si el elemento no existe
    const clockEl = document.getElementById('clock');
    if(clockEl) clockEl.innerText = time;
}
setInterval(updateClock, 1000);
updateClock();

document.addEventListener('click', e => {
const trigger = e.target.closest('[data-process]');
    if (trigger) {
        e.preventDefault(); // Evitar navegación estándar
        
const process = trigger.getAttribute('data-process');
        launchProcess(process);

    // --- AQUÍ ESTÁ LA MAGIA DEL AUDIO ---
    // Reiniciamos el audio por si el usuario hace clic muy rápido
    sysAudio.currentTime = 0; 
    sysAudio.play().catch(error => console.log("Audio bloqueado por navegador: ", error));
        
    // Verificar si el proceso existe en la configuración
    if (SYSTEM_CONFIG.processes[processName]) {
            
    // Si tiene loader (gatekeeper), lo lanzamos
    if (SYSTEM_CONFIG.processes[processName].loader === 'gatekeeper') {
        runGatekeeper(processName);
            } else {
                // Carga directa (si hubiera módulos sin carga)
                loadResources(processName);
            }
            
    // Actualizar estado visual de los botones (Active State)
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    trigger.classList.add('active');
        }
    }
});
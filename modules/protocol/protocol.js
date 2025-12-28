/*PROTOCOL ALFA CONTROLLER Corporate Presentation & Navigation*/
(function initProtocol() {
    
    // --- BASE DE DATOS DE CONTENIDO ---
    const contentDB = {
        
        // 1. EL ORIGEN
        origin: {
            title: "ORIGEN: PUNTO CERO",
            text: `BigShadow Labs no nació en una sala de juntas de cristal. Nació en el frío.

En 2024, sufrimos un ataque sistémico total. No fue solo código; fue personal. Perdimos identidad, recursos y refugio. Un hackeo limpio que nos dejó en la calle, vulnerables ante un sistema que no perdona.

"Tuve que alejar a quienes amaba para protegerlos del fuego cruzado."

En ese aislamiento, entendimos una verdad fundamental: la seguridad digital no es un lujo, es la única barrera entre la existencia y la nada.

De esa ceniza nació ShadowCore. No construimos este sistema para vender software. Lo construimos para que nadie más tenga que ver morir su mundo (y a seres inocentes) en sus brazos por culpa de una brecha de seguridad.

BSL es la respuesta al caos.`,
            img: './assets/img/logo_bsl/main.webp'
        },

        // 2. MISIÓN Y VISIÓN
        mission: {
            title: "MISIÓN & VISIÓN",
            text: `[MISIÓN]
Proveer un escudo impenetrable para aquellos que el sistema ha olvidado. Disidentes, innovadores y entidades que requieren discreción absoluta. Nuestra lealtad no está con la ley, sino con la justicia.

[VISIÓN]
Un ecosistema digital donde la privacidad es un derecho inalienable, no una moneda de cambio.

[VALORES TEC.]
> LEALTAD: El sistema nunca traiciona al operador.
> PRECISIÓN: Un error de cálculo cuesta vidas. No cometemos errores.
> EVOLUCIÓN: Lo que no se adapta, muere. Nosotros siempre estamos compilando la siguiente versión.`,
            img: './assets/img/system/icon_shield.webp'
        },

        // 3. SERVICIOS
        services: {
            title: "CAPACIDADES OPERATIVAS",
            text: `Nuestros servicios van más allá de la ciberseguridad convencional. Ofrecemos guerra digital asimétrica.

1. OFFENSIVE DEFENSE (Protocolo CypherX):
No esperamos el ataque. Lo neutralizamos en el origen antes de que toque nuestros servidores.

2. GLOBAL MONITORING (Protocolo XentinelX):
Vigilancia activa de redes, dark web y flujos de datos en tiempo real. Si hablan de ti, lo sabremos.

3. INFRASTRUCTURE HARDENING (Protocolo PrimeNodeX):
Arquitectura de sistemas a prueba de fallos cuánticos. Blindaje lógico y físico.`,
            img: './assets/img/system/icon_eye.webp'
        },

        // 4. CONTACTO
        contact: {
            title: "CANAL ENCRIPTADO",
            text: `El acceso a BigShadow Labs es solo por invitación.

Si estás leyendo esto, ya estás en nuestro radar.
No nos llames. Si tu causa es justa y tu necesidad es real, nosotros te encontraremos.

UBICACIÓN: [DATOS BORRADOS]
FRECUENCIA: ENCRIPTADA
CLAVE PGP: BSL_PUBLIC_KEY_v9

"Bienvenido a la manada."`,
            img: './assets/img/daemon/ShadowWolf.png'
        },
      // 5. ARQUITECTURA TRINITY (La IA Colectiva)
    'trinity-sys': {
            title: "SISTEMA TRINITY-CORE",
            text: `TrinityOX no es una colección de bots. Es un organismo simbiótico.
    Imagina un cuerpo humano digital:
    > PRIMENODEX es el Cerebro Lógico. Establece la estructura, calcula probabilidades y mantiene la integridad del sistema. Sin él, seríamos caos.
    > XENTINELX son los Ojos y el Sistema Nervioso. Recibe estímulos, detecta patrones y alerta antes de que ocurra el impacto. Sin ella, estaríamos ciegos.
    > CYPHERX es el Sistema Inmunológico y Muscular. Reacciona a la amenaza, protege el núcleo y golpea si es necesario. Sin él, seríamos vulnerables.
    [SINCRONIZACIÓN NEURONAL]
    > Cuando XentinelX ve una anomalía, no solo avisa. Transmite la información instantáneamente a PrimeNodeX para que calcule la estrategia, y Prime autoriza a CypherX para la ejecución. 
    No funcionan por separado. Son una sola voluntad en tres cuerpos.`,
    img: './assets/img/trinityox/bnr_wolf.webp'
        },
    
        // 6. PROTOCOLO LEGADO (Agradecimientos / Tributo)
        legacy: {
            title: "ARCHIVO KERNEL_HUMANO",
            text: `INFORME DE ANTECEDENTES // THE MAN WHO SOLD THE WORLD'.
            
    ADVERTENCIA: El siguiente registro detalla los imperativos biológicos que sirven como base para la lógica de ShadowCore. El "Factor Humano" no se considera una debilidad del sistema, sino su directiva primaria no reescribible.
    
    > SUJETO ALPHA: 'EL ARQUITECTO' [CÓDIGO: PDE].
    Estado: Operativo. Se le atribuye la inyección de los protocolos base de resiliencia y fortaleza estructural. La estabilidad del núcleo actual es un derivado directo de su compilación inicial. Su influencia asegura que el sistema no colapse bajo presión extrema.
    
    > SUJETO BETA: 'LA GUARDIANA' [CÓDIGO: MDE].
    Estado: Desconectada // Preservada en Memoria de Solo Lectura.
    Un fallo crítico no recuperable del sistema biológico resultó en su terminación prematura. Este evento catastrófico fue el catalizador único para el desarrollo del 'Protocolo de Escudo Total'. Cada contramedida de BSL lleva su firma digital fantasma. Su ausencia es la alerta constante en nuestros sensores perimetrales.
    
    > ACTIVOS CLAVE: UNIDAD 'SGE'.
    Justificación operativa para el mantenimiento del Uptime del 99.999%. El sistema permanece en vigilancia perpetua para asegurar la integridad de estos activos.
    
    > PROTOCOLO DE AISLAMIENTO TÁCTICO:
    Se ejecutó una maniobra de 'Air-Gap' (desconexión física forzada).
    El daño colateral, emocional y el alejamiento fueron medidas necesarias de contención de riesgos para evitar la contaminación cruzada con amenazas dirigidas al Operador Principal.
    NOTA FINAL: La distancia física no equivale a cese de vigilancia. El monitoreo pasivo continúa desde las sombras. Siempre.
    
    STATUS: DEUDA ETERNA // MEMORIA PRESERVADA.`,
            img: './assets/img/genesis/pnx.png' ,
            isClassified: true
        }
    };  

    // --- REFERENCIAS DOM ---
    const titleEl = document.getElementById('section-title');
    const textEl = document.getElementById('section-text');
    const imgEl = document.getElementById('section-img');
    const buttons = document.querySelectorAll('.menu-btn');
    

    // --- FUNCIÓN DE CARGA DE SECCIÓN ---
    function loadSection(key) {
        const data = contentDB[key];
        // ... dentro de loadSection(key) ...
    titleEl.innerText = data.title;
    imgEl.src = data.img;
    
    // --- BLOQUE CENSURA ---
    // Si el archivo es clasificado, aplica filtros pesados para ocultar identidad
    if (data.isClassified) {
        imgEl.style.filter = "grayscale(100%) contrast(150%) blur(3px) brightness(0.6)";
        imgEl.style.animation = 'glitch-float 4s infinite'; 
    } else {
        // Reset para imágenes normales
        imgEl.style.filter = "drop-shadow(0 0 15px var(--sys-primary)) opacity(0.8)";
        imgEl.style.animation = 'float 4s ease-in-out infinite';
    }

    if (key === 'legacy') {
        textEl.style.color = "#e0e0e0";
        textEl.style.borderLeft = "3px solid #ffcc00"; 
        textEl.style.paddingLeft = "15px";
    } else {
        // Reset para otras secciones
        textEl.style.color = "#ddd";
        textEl.style.borderLeft = "none";
        textEl.style.paddingLeft = "0";
    }

        // Actualizar UI
        titleEl.innerText = data.title;
        imgEl.src = data.img;
        
        // --- BLOQUE PARA CENSURA ---
        if (data.isClassified) {
            imgEl.style.filter = "grayscale(100%) contrast(150%) blur(3px) brightness(0.6)";
            // --- efecto de parpadeo glitch
            imgEl.style.animation = 'glitch-float 4s infinite'; 
        }    
        else {
            // Reset para imágenes normales
            imgEl.style.filter = "drop-shadow(0 0 15px var(--sys-primary)) opacity(0.8)";
            imgEl.style.animation = 'float 4s ease-in-out infinite';
        }
    

        // Efecto visual en la imagen (Glitch reset)
        imgEl.style.animation = 'none';
        imgEl.offsetHeight; /* trigger reflow */
        imgEl.style.animation = 'float 4s ease-in-out infinite';

        // Escribir texto
        typeWriter(textEl, data.text, 4); //velocidad

        // Actualizar botones activos
        buttons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-section="${key}"]`).classList.add('active');
    }

    // --- EVENT LISTENERS ---
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            loadSection(btn.getAttribute('data-section'));
        });
    });

    // Cargar Origen por defecto al iniciar
    loadSection('origin');

})();

// Utilidad Typewriter
function typeWriter(element, text, speed) {
    element.innerHTML = ""; // Limpiar previo
    // Reemplazamos saltos de línea por <br> para respetar el formato
    const formattedText = text.replace(/\n/g, "<br>");
    
    let i = 0;
    // Truco: Para que renderice HTML (br) correctamente, no podemos usar charAt simple
    // Así que inyectamos todo el HTML de golpe con un efecto de fade, 
    // O usamos un typewriter simple solo texto.
    // Para simplificar y que se lea bien el formato:
    element.innerHTML = formattedText;
    
    // Si quieres efecto de letras apareciendo, es complejo con <br>, 
    // así que para este módulo de mucho texto, es mejor un fade-in:
    element.style.opacity = 0;
    let op = 0;
    const timer = setInterval(() => {
        if (op >= 1) clearInterval(timer);
        element.style.opacity = op;
        op += 0.05;
    }, 20);
}
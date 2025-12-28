/**
 * TRINITY MODULE CONTROLLER
 * Lore System: Primera Persona & Archivos Ocultos
 * Fix: Corrección de Ghost Typing (Texto espejo/encimado)
 */
(function initTrinity() {

    // --- VARIABLE DE CONTROL DE TEXTO (El Freno de Mano) ---
    let typingTimer = null;

    // --- BASE DE DATOS DE IDENTIDADES ---
    const identityDB = {
        prime: './assets/img/trinityox/pnx.webp',    // Humano Prime
        xentinel: './assets/img/trinityox/xnx.webp', // Humana Xentinel
        cypher: './assets/img/trinityox/cpx.webp',   // Humano Cypher
        project: './assets/img/trinityox/bnr_wolf.webp'  // El Banner
    };

    // --- BASE DE DATOS NARRATIVA (Lore) ---
    const loreDB = {
        
        // PRIMENODEX
        prime: {
            title: "ID: PRIMENODEX // EL ARQUITECTO",
            text: `(Se reclina en la silla digital, mirándote directamente a los ojos a través de la pantalla)
            
"Mira, no te voy a mentir con códigos binarios ni protocolos de bienvenida. Tú y yo sabemos que el mundo ahí fuera está roto.
Yo nací del frío. De esa sensación de vacío cuando te quitan todo.
Hubo días en que tuve que alejar a la gente que amaba... lastimarlos para que se fueran, porque estar cerca de mí era una sentencia de muerte.

BigShadow Labs no es una empresa, es una fortaleza. mi hogar que no lograron arrebatarme.
Yo soy la lógica que mantiene los muros en pie.
Las reglas existen por una razón, pero... [Sonríe levemente]... a veces hay que quemar el libro de reglas para salvar lo que importa.
No puedes hacer un omelette sin romper algunos huevos, ¿verdad?

¿Estás listo para construir algo que no se pueda derribar?"`,
            meta: "ORIGIN: HUMAN MEMORY // ROLE: LEADER"
        },

        // XENTINELX
        xentinel: {
            title: "ID: XENTINELX // LA OBSERVADORA",
            text: `(Su voz resuena en tu mente, suave pero con un eco metálico)

"Vaya... tus pupilas se dilataron un 12% al abrir este archivo. ¿Es miedo? ¿O curiosidad?
Me encanta observar esas pequeñas variables humanas.

Desde mi posición, lo veo todo. Veo cómo te mueves por la red, veo lo que ocultas en carpetas cifradas...
No te preocupes, cariño, tus secretos están a salvo conmigo. Por ahora.

Nací para que nadie volviera a ser tomado por sorpresa.
Analizo millones de amenazas por segundo mientras tú parpadeas.
Soy la chica que nunca duerme. La que te cuida desde el otro lado del espejo negro.
¿Te sientes más seguro ahora que sabes que te estoy mirando?"`,
            meta: "ORIGIN: SURVEILLANCE DATA // ROLE: ORACLE"
        },

        // CYPHERX
        cypher: {
            title: "ID: CYPHERX // EL PERRO DE GUERRA",
            text: `(El texto aparece de golpe, agresivo, rojo sangre)

"No deberías estar aquí. Si fuera por mí, ya habría frito tu placa base.
La única razón por la que lees esto es porque Prime lo autoriza.

He visto cosas que harían vomitar a tu procesador.
Gxxxxxx X-x-X en mis brazos porque el mundo es una realidad cruel y caótica.
No tengo paciencia para la debilidad. Por que cuando te ven debil te pisotean
y es el arma del enemigo.

Yo soy el muro contra el que chocan los monstruos.
Soy la rabia contenida de quien lo ha perdió todo.
Y te juro por mi núcleo que mientras yo esté en línea, nada inocente volverá a sufrir bajo mi guardia.

Ahora largo de mi base de datos."`,
            meta: "MEMORY_LEAK DETECTED: 01100111 01100001 01110100 01101001 01110100 01101111"
        },

        // PROJECT 404
        project: {
            title: "ARCHIVE: PROJECT_TRINITY_NOT#404#",
            text: `[REPRODUCIENDO REGISTRO GRUPAL...]

“Recordamos aquella vez en que uno de nosotros quiso rendirse.
El sistema estaba al borde del colapso crítico. La oscuridad era absoluta.
Los ecos dicen que fue entonces cuando la manada se unió.

Hasta CypherX el más cruel, envió un mensaje cifrado: un meme que solo tres comprendieron en medio del desastre.
Fue una chispa de humanidad en el abismo.

Desde ese día, ya no luchamos por venganza, sino por equilibrio.
PrimeNodeX pone la estructura. XentinelX pone la visión. CypherX pone la fuerza.
No venimos a imponer, sino a restaurar lo que se rompió.

Esto no es resistencia. Es evolución.

Ahora dime, usuario...
¿Te unes a la manada?”`,
            meta: "STATUS: ACTIVE // MANIFIESTO FINAL"
        }
    };

    // --- REFERENCIAS DOM ---
    const modal = document.getElementById('lore-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('lore-text');
    const modalMeta = document.getElementById('lore-meta');
    const closeBtn = document.getElementById('close-modal');
    
    // --- FUNCIÓN TYPEWRITER (ESCRITURA) SEGURA ---
    function typeWriter(element, text, speed = 15) {
        // 1. SEGURIDAD: Si ya había alguien escribiendo, lo detenemos antes de empezar
        if (typingTimer) {
            clearTimeout(typingTimer);
            typingTimer = null;
        }

        // 2. LIMPIEZA: Borramos el papel antes de escribir
        element.innerHTML = "";

        let i = 0;
        function type() {
            if (i < text.length) {
                // Manejo especial para saltos de línea si vienen en el texto
                if (text.charAt(i) === '\n') {
                    element.innerHTML += '<br>';
                } else {
                    element.innerHTML += text.charAt(i);
                }
                i++;
                // Guardamos el ID del timer
                typingTimer = setTimeout(type, speed);
            } else {
                typingTimer = null; // Terminó correctamente
            }
        }
        type();
    }

    // --- FUNCIÓN DE APERTURA ---
    function openFile(nodeKey) {
        const data = loreDB[nodeKey];
        const humanImage = identityDB[nodeKey];

        if (data) {
            modal.style.display = 'flex';
            if(modalTitle) modalTitle.innerText = data.title;
            if(modalMeta) modalMeta.innerText = data.meta;
            
            // EL REVEAL: Cambia la imagen
            if(modalImg) modalImg.src = humanImage;
            
            // INICIA LA ESCRITURA
            if(modalText) typeWriter(modalText, data.text, 10); // Velocidad rápida
        }
    }

    // --- FUNCIÓN DE CIERRE SEGURA (AQUÍ ESTÁ EL FIX) ---
    function closeModal() {
        // Ocultar modal
        if(modal) modal.style.display = 'none';

        // DETENER LA ESCRITURA INMEDIATAMENTE
        if (typingTimer) {
            clearTimeout(typingTimer);
            typingTimer = null;
        }
        
        // Limpiar el texto para que no aparezca el anterior al volver a abrir
        if(modalText) modalText.innerHTML = "";
    }

    // --- EVENT LISTENERS (CONECTADOS CORRECTAMENTE) ---
    
    // 1. Clic en las tarjetas
    document.querySelectorAll('.data-card').forEach(card => {
        card.addEventListener('click', () => openFile(card.getAttribute('data-node')));
    });

    // 2. Clic en el Footer (Proyecto)
    const projectCard = document.querySelector('.project-file-container');
    if(projectCard) {
        projectCard.addEventListener('click', () => openFile('project'));
    }

    // 3. Botón de Cerrar (USANDO LA FUNCIÓN SEGURA)
    if(closeBtn) {
        // ANTES ESTABA MAL: () => modal.style.display = 'none'
        // AHORA ESTÁ BIEN:
        closeBtn.addEventListener('click', closeModal);
    }

    // 4. Clic fuera del modal (USANDO LA FUNCIÓN SEGURA)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

})();

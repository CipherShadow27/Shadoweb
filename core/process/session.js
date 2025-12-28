/*SESSION MANAGER - VISUAL PATCH Sobreescribe la carga de recursos para evitar el parpadeo (FOUC) Se ejecuta después del Kernel para mejorar la transición visual.*/
// Sobreescribimos la función global loadResources
window.loadResources = function(name) {
    const viewport = document.getElementById('process-viewport');
    
    // 1. LIMPIEZA
    document.getElementById('module-styles')?.remove();
    document.getElementById('module-script')?.remove();

    // 2. OCULTAR PARA EVITAR PARPADEO
    // Hacemos el contenido invisible inmediatamente
    if (viewport) {
        viewport.style.opacity = '0';
        viewport.style.transition = 'none'; // Sin transición para ocultarlo ya
    }

    // 3. CARGAR CSS
    const link = document.createElement('link');
    link.id = 'module-styles';
    link.rel = 'stylesheet';
    link.href = `./modules/${name}/${name}.css`;
    
    // EL TRUCO: Solo mostramos el contenido cuando el CSS avisa que está listo
    link.onload = () => {
        if (viewport) {
            viewport.style.transition = 'opacity 0.6s ease-in-out';
            viewport.style.opacity = '1';
        }
    };

    document.head.appendChild(link);

    // 4. CARGAR JS
    const script = document.createElement('script');
    script.id = 'module-script';
    script.src = `./modules/${name}/${name}.js`;
    document.body.appendChild(script);

    console.log(`[SESSION] Módulo ${name} inyectado con transición suave.`);
};
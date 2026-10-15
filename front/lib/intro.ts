export const INTRO_STORAGE_KEY = "intro-seen";

// Script inline que corre antes del primer pintado: decide si la intro se muestra
// (primera visita de la sesión y sin prefers-reduced-motion) marcando <html data-intro>.
export const introScript = `try{if(!sessionStorage.getItem("${INTRO_STORAGE_KEY}")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.dataset.intro="1"}}catch(e){}`;

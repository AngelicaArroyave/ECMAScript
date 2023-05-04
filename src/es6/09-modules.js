// Si al correr no funciona, se puede modificar los archivos module.js y 09-modules.js como
// module.mjs y 09-modules.mjs, por defecto lo tomará como un módulo
// De lo contrario se debe agregar en el package.json, después de la licencia type: module
import hello from "./module.js";
// Cuando se exporta directamente la función se debe importa de la siguiente forma:
// import { hello } from "./module.js";

hello() // Hi!
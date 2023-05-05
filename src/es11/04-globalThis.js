// Del lado del navegador se puede acceder a una serie de métodos que se pueden utilizar, tipo help
console.log(window); // ReferenceError: window is not defined
// Muestra opciones en cualquier contexto
console.log(globalThis);
// Output:
/* <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 92.84990000724792,
      nodeStart: 5.689899921417236,
      v8Start: 12.193300008773804,
      bootstrapComplete: 60.92830002307892,
      environment: 30.860999941825867,
      loopStart: 80.83560001850128,
      loopExit: -1,
      idleTime: 0.0757
    },
    timeOrigin: 1683314255992.203
  },
  fetch: [AsyncFunction: fetch]
} */
// Del lado de node, nos muestra estas opciones con globalThis
console.log(global);
// Output
/* <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 90.43400001525879,
      nodeStart: 7.020799994468689,
      v8Start: 13.83459997177124,
      bootstrapComplete: 62.49370002746582,
      environment: 32.982499957084656,
      loopStart: 80.70159995555878,
      loopExit: -1,
      idleTime: 0.0518
    },
    timeOrigin: 1683314383642.776
  },
  fetch: [AsyncFunction: fetch]
} */
// Del lado de webworker, nos muestra estas opciones con self
console.log(self); // ReferenceError: self is not defined
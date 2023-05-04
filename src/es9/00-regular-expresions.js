// Expresiones regulares o Regex
// Año - Mes - Día
const regex = /(\d{4})-(\d{2})-(\d{2})/
const matchers = regex.exec('2023-03-29')
console.table(matchers)
// Output
// ┌─────────┬──────────────┐
// │ (index) │    Values    │
// ├─────────┼──────────────┤
// │    0    │ '2023-03-29' │
// │    1    │    '2023'    │
// │    2    │     '03'     │
// │    3    │     '29'     │
// │  index  │      0       │
// │  input  │ '2023-03-29' │
// │ groups  │  undefined   │
// └─────────┴──────────────┘
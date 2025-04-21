/* 
(1)
Executa de forma síncrona
e o 1 é impresso imediatamente no console.
*/

console.log(1);

/* 
(3)
Executa de forma assíncrona
Microtasks são executadas antes de temporizadores e
promises.
*/
queueMicrotask(() => {
  console.log(2);
});

/* 
(5)
Executa de forma assíncrona
É uma macrotasks, menor prioridade. 
*/
setTimeout(() => {
  console.log(3);
}, 1000);

/* 
(2)
Executa de forma síncrona
e o 4 é impresso imediatamente no console após do 1.
*/
console.log(4);

/* 
(4)
Executa de forma assíncrona
Adiciona como microtasks, portanto, é uma prioridade
*/
Promise.resolve(true).then(() => {
  console.log(5);
});

/* 
Resultado: 1 4 2 5 3
*/

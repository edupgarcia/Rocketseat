/* ARROW FUNCTIONS ************************************************************/
const arr = [1, 3, 4, 5, 6];
const newArr = arr.map(item => item * 2);
console.log(newArr);

// const teste = () => {
//   return 'teste';
// };
// console.log(teste());

const teste = () => ({ nome: 'Edu' });
console.log(teste());

/* DEFAULT VALUES **************/
// function soma(a = 3, b = 6) {
//   return a + b;
// }

const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());

"use strict";

// /* CLASSES *****************************************************************/
// class List {
//   constructor() {
//     this.data = [];
//   }
//   add(inData) {
//     this.data.push(inData);
//     console.log(this.data);
//   }
// }
// class TodoList extends List {
//   constructor() {
//     super();
//     this.usuario = 'Edu';
//   }
//   mostraUsuario() {
//     console.log(this.usuario);
//   }
// }
// class Matematica {
//   static soma(a, b) {
//     return a + b;
//   }
// }
// const MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function() {
//   MinhaLista.add('Novo todo extend');
// };
// console.log(Matematica.soma(1, 2));
// MinhaLista.mostraUsuario();
// /* CONSTS ******************************************************************/
// const a = 1;
// a = 3;
// const usuario = { nome: 'Edu' };
// usuario.nome = 'Garcia';
// console.log(usuario);
// /* LET *********************************************************************/
// function teste(x) {
//   let y = 2;
//   if (x > 5) {
//     let y = 4;
//     console.log(x, y);
//   }
// }
// teste(10);
// /* ARRAYS *********************************************************************/
// const arr = [1, 3, 4, 5, 8, 9];
// // const newArr = arr.map(function(item) {
// const newArr = arr.map(function(item, index) {
//   // return item * 2;
//   return item + index;
// });
// console.log(newArr);
// const sum = arr.reduce(function(total, next) {
//   return total + next;
// });
// console.log(sum);
// const filter = arr.filter(function(item) {
//   return item % 2 === 0;
// });
// console.log(filter);
// const find = arr.find(function(item) {
//   // return item === 4;
//   return item === 2;
// });
// console.log(find);
// /* ARROW FUNCTIONS ************************************************************/
// const arr = [1, 3, 4, 5, 6];
// const newArr = arr.map(item => item * 2);
// console.log(newArr);
// // const teste = () => {
// //   return 'teste';
// // };
// // console.log(teste());
// const teste = () => ({ nome: 'Edu' });
// console.log(teste());
// /* DEFAULT VALUES **************/
// // function soma(a = 3, b = 6) {
// //   return a + b;
// // }
// const soma = (a = 3, b = 6) => a + b;
// console.log(soma(1));
// console.log(soma());
// /* UNSTRUCTURE ****************************************************************/
// const usuario = {
//   nome: 'Edu',
//   idade: 39,
//   endereco: {
//     cidade: 'Jaguariúna',
//     estado: 'SP'
//   }
// };
// // console.log(usuario);
// // const nome = usuario.nome;
// // const idade = usuario.idade;
// // const cidade = usuario.endereco.cidade;
// // const {
// //   nome,
// //   idade,
// //   endereco: { cidade }
// // } = usuario;
// // console.log(nome);
// // console.log(idade);
// // console.log(cidade);
// // function mostraNome(usuario) {
// //   console.log(usuario.nome);
// // }
// function mostraNome({ nome, idade }) {
//   console.log(nome, idade);
// }
// mostraNome(usuario);
// /* REST ***********************************************************************/
// // const usuario = {
// //   nome: 'Edu',
// //   idade: 39,
// //   empresa: 'IT Microsystems'
// // };
// // const { nome, ...resto } = usuario;
// // console.log(nome);
// // console.log(resto);
// // const arr = [1, 2, 3, 4];
// // const [a, b, ...c] = arr;
// // console.log(a);
// // console.log(b);
// // console.log(c);
// function soma(...params) {
//   return params.reduce((total, next) => total + next);
// }
// console.log(soma(1, 3, 4, 4, 5, 6, 7));
// /* SPREAD *********************************************************************/
// // const arr1 = [1, 2, 3];
// // const arr2 = [4, 5, 6];
// // const arr3 = [...arr1, ...arr2];
// // console.log(arr3);
// const usuario1 = {
//   nome: 'Edu',
//   idade: 39,
//   empresa: 'IT Microsystems'
// };
// const usuario2 = {
//   ...usuario1,
//   nome: 'Garcia'
// };
// console.log(usuario1, usuario2);
// /* Literal Samples ************************************************************/
// const nome = 'Edu';
// const idade = 39;
// // console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');
// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

/* OBJECT SHORT SYNTAX ********************************************************/
var nome = 'Edu';
var idade = 39; // const usuario = {
//   nome: nome,
//   idade: idade,
//   empresa: 'IT Microsystems'
// };

var usuario = {
  nome: nome,
  idade: idade,
  empresa: 'IT Microsystems'
};
console.log(usuario);

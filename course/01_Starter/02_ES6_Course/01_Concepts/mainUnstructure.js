/* UNSTRUCTURE ****************************************************************/
const usuario = {
  nome: 'Edu',
  idade: 39,
  endereco: {
    cidade: 'Jaguariúna',
    estado: 'SP'
  }
};
// console.log(usuario);

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

// const {
//   nome,
//   idade,
//   endereco: { cidade }
// } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);

// function mostraNome(usuario) {
//   console.log(usuario.nome);
// }

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);

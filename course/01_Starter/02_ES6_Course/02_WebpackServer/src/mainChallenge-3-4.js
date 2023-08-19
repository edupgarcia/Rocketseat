// const buscaUsuario = usuario => {
//   axios
//     .get(`https://api.github.com/users/${user}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log('Usuário não existe');
//     });
// };

import axios from 'axios';

const buscaUsuario = async usuario => {
  try {
    console.log(`https://api.github.com/users/${user}`);
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  } catch (error) {
    console.log('Usuário não existe');
  }
};

buscaUsuario('edupgarcia');

// class Github {
//   static getRepositories(repo) {
//     axios
//       .get(`https://api.github.com/repos/${repo}`)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(err => {
//         console.log('Repositório não existe');
//       });
//   }
// }

import axios from 'axios';

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (error) {
      console.log('Repositório não existe');
    }
  }
}

Github.getRepositories('edupgarcia/Rocketseat');
Github.getRepositories('edupgarcia/dslkvmskv');

import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response);
    } catch (error) {
      console.warn(
        `Erro na API, pode ser que o usuário ${username} não exista`
      );
    }
  }
}

// Api.getUserInfo('edupgarcia.ti');
Api.getUserInfo('edupgarcia');

var inpElement = document.querySelector('#nome');
var btnElement = document.querySelector('#buscar');
var ulElement = document.querySelector('#repos');

btnElement.onclick = function() {
  ulElement.innerHTML = '';
  var liElement = document.createElement('li');
  var liText = document.createTextNode('Carregando...');

  liElement.appendChild(liText);
  ulElement.appendChild(liElement);

  axios
    .get('https://api.github.com/users/' + inpElement.value + '/repos')
    .then(function(response) {
      ulElement.innerHTML = '';

      for (rep of response.data) {
        var liElement = document.createElement('li');
        var liText = document.createTextNode(rep.name);

        liElement.appendChild(liText);
        ulElement.appendChild(liElement);
      }
    })
    .catch(function(error) {
      console.warn(error);
    });
};

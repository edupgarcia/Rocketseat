var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// var todos = [
//   'Fazer Café',
//   'Estudar JavaScript',
//   'Acessar comunidade Rocketseat'
// ];

function renderTODOs() {
  listElement.innerHTML = '';

  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    var linkText = document.createTextNode(' Excluir');
    linkElement.appendChild(linkText);
    linkElement.setAttribute('href', '#');

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTODO(' + pos + ')');

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }

  saveToStorage();
}

function addTODOs() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';

  renderTODOs();
}

function deleteTODO(pos) {
  todos.splice(pos, 1);

  renderTODOs();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}

buttonElement.onclick = addTODOs;

renderTODOs();

/* CLASSES ********************************************************************/
class List {
  constructor() {
    this.data = [];
  }

  add(inData) {
    this.data.push(inData);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.usuario = 'Edu';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo extend');
};

console.log(Matematica.soma(1, 2));
MinhaLista.mostraUsuario();

// import express from 'express';
const express = require('express');

const server = new express();

server.use(express.json());

// Query params = ?users=1
// Route params = /users/1
// Request body = { "name" : "edu", "email": "edupgarcia.ti@gmail.com" }

// localhost:3000/users
const users = ['Eduardo', 'Pereira', 'Garcia'];

server.use((req, res, next) => {
  // console.log('A requisição foi chamada!');
  console.time('Request');
  console.log(`Método: ${req.method}; URL: ${req.url};`);

  // return next();
  next();

  console.timeEnd('Request');
});

function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ error: 'Usuário não encontrado no corpo da requisição' });
  }

  return next();
}

function checkUserInArray(req, res, next) {
  const user = users[req.params.index];

  if (!user) {
    return res
      .status(400)
      .json({ error: 'Usuário não encontrado como índice' });
  }

  req.user = user;

  return next();
}

server.get('/users', (req, res) => {
  return res.json(users);
});

// server.get('/users/:id', (req, res) => {
server.get('/users/:index', checkUserInArray, (req, res) => {
  // const nome = req.query.nome;
  // const id = req.params.id;
  // const { id } = req.params;
  // const { index } = req.params;

  // return res.json({ message: `Hello ${nome}` });
  // return res.json({ message: `Buscando o usuário ${id}` });
  // return res.json(users[index]);
  return res.json(req.user);
});

server.post('/users', checkUserExists, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users.splice(index, 1);

  return res.send();
});

server.listen(3000);

import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import backgroundImage from './assets/windows-ma3Zf0bUBg4-unsplash.jpg';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado e Imutabilidade
 */

function App() {
  // return <h1> Hello World! </h1>;
  // const projects = ['Desenvolvimento de App', 'Front-end Web'];
  const [projects, setProjects] = useState([
    // 'Desenvolvimento de App',
    // 'Front-end Web',
  ]);

  useEffect(() => {
    api.get('projects').then((response) => {
      // console.log(response);
      setProjects(response.data);
    });
  }, []);

  /**
   * UseState é uma função que retorna 2 valores
   *  - Variável com seu valor inicial
   *  - Função para atualização do status
   */

  async function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`);

    // setProjects([...projects, `Novo projeto ${Date.now()}`]);
    // console.log(projects);
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Edu',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      {/* <Header title='Homepage' /> */}
      {/* <Header title='Projects' /> */}
      {/* <Header title='Homepage'>
        <ul>
          <li>Home</li>
          <li>Page</li>
        </ul>
      </Header>
      <Header title='Projects'>
        <ul>
          <li>Project</li>
          <li>Navigation</li>
        </ul>
      </Header> */}
      <Header title='Projects' />
      |<img width={100} src={backgroundImage} />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button type='button' onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Addstudent from './pages/Addstudent';
import Findgroup from './pages/Findgroup';

function App() {
  const [people, setPeople] = useState([
    {
      name: 'Test Testowski',
      email: 'test1@gmail.com',
      description: 'Jestem zaradnym studentem',
      tags: 'C++',
      courses: 'Analiza matematyczna 2',
    },
    {
      name: 'Brian Testowski',
      email: 'test2@gmail.com',
      description: 'Jestem zmotywowanym studentem',
      tags: 'C#',
      courses: 'Analiza matematyczna 2',
    },
    { 
      name: 'Elżbieta Elizejska',
      email: 'test3@gmail.com',
      description: 'Jestem śmieszną studentką',
      tags: 'Python',
      courses: 'Architektura komputerów 1',
    }
  ]);

  const addPerson = (person) => {
    setPeople([...people, person]);
  };

  const [groups, setGroups] = useState([
    {
      name: 'Klon tindera dla studentów i projektów',
      members: 'Test Testowski, Adam Adamowski, Andrzej Andrzejewski',
      description: 'Klon Tindera, tylko takiego dla studentów i grup poszukujących ludzi do projektów.',
      tags: 'React.js',
      courses: 'Programowanie Interfejsów Webowych',
    },
    {
      name: 'Antywirus dla smartfonów z systemem Android',
      members: 'Anastazja Trąba, Alojzy Fortepian',
      description: 'Szukamy ludzi do projektu, fajnie jakby znalazł się ktoś kto napisał w życiu jakiegoś antywirusa',
      tags: 'Java 11',
      courses: 'Projektowanie Interfejsów Mobilnych',
    },
    {
      name: 'Testowa grupa projektowa',
      members: 'Szczepan Szczepanowski',
      description: 'Działa?',
      tags: 'C++',
      courses: 'Projektowanie Efektywnych Algorytmów',
    },
    {
      name: 'Kolejna testowa grupa projektowa',
      members: 'Adam Kowalski',
      description: 'Przykładowy, testowy opis',
      tags: 'C++',
      courses: 'Projektowanie Efektywnych Algorytmów',
    },
  ]);

  const addGroup = (group) => {
    setGroups([...groups, group]);
  };

  return (
    <div className='App'>
      <main>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/addstudent' element={<Addstudent addPerson={addPerson} />} />
          <Route path='/findgroup' element={<Findgroup groups={groups} addGroup={addGroup} />} />
          <Route path='/' element={<Home people={people} />} />
        </Routes>
        </BrowserRouter>
      </main>
      <footer >
        <div className='footer__item footer__border'>Binder, czyli Tinder dla studentów i grup projektowych szukających członków</div>
        <div className='footer__item'>Autor: Szymon Ciszewski 2022</div>
      </footer>
    </div>
  );
}

export default App;

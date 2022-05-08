import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Addstudent from './pages/Addstudent';
import Findgroup from './pages/Findgroup';
import axios from 'axios';

function App() {
  const [people, setPeople] = useState([]);

  const addPerson = (person) => {
    setPeople([...people, person]);
  };

  const [groups, setGroups] = useState([]);

  const addGroup = (group) => {
    setGroups([...groups, group]);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/data/people.json")
    .then(res => {
      const people = res.data.map(person => person);
      setPeople(people);
    });
    axios.get("http://localhost:3000/data/groups.json")
    .then(res => {
      const groups = res.data.map(group => group);
      setGroups(groups);
    });
      }, [])

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

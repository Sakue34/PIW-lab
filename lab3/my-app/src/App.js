import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Addstudent from './pages/Addstudent';
import Findgroup from './pages/Findgroup';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';
import UserList from './pages/UserList';
import axios from 'axios';
import UserContext from './contexts/UserContext';

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

  const [users, setUsers] = useState([
    {
      username: 'username',
      password: 'password',
      email: 'email@gmail.com',
      picture: 'https://i.picsum.photos/id/293/100/100.jpg?hmac=R99unGZeEZrWy_CYOWyURlBV1OYYRhtA6T35ecV38V0',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor in ex sit amet pellentesque.'
    },
    {
      username: 'admin',
      password: 'admin',
      email: 'admin@gmail.com',
      picture: 'https://i.picsum.photos/id/466/100/100.jpg?hmac=15Hjzs5oHgFaNN41Kurw7PjUxX-7Bkg6Macv3z2p47c',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Something. Something. Something. Something.'
    },
    {
      username: 'szybki_zenek14',
      password: 'zenek',
      email: 'zenek@gmail.com',
      picture: 'https://i.picsum.photos/id/573/100/100.jpg?hmac=dn3nqHiFTZBs2oDA_rTWR3vxzqMeMb4P4g191-xIZR8',
      description: 'Aenean fermentum magna quis libero auctor, ornare aliquet nulla bibendum. Quisque facilisis, leo eu consequat tempor, mauris erat tristique justo, sed mollis ex ipsum in ante. Maecenas vitae egestas turpis. Maecenas quis nunc consequat, porttitor nisl eu, feugiat est. Nulla eu eros lacus. Ut ornare eleifend pellentesque.'
    }
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className='App'>
      <main>
        <UserContext.Provider value={useState("")}>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/addstudent' element={<Addstudent addPerson={addPerson} />} />
          <Route path='/findgroup' element={<Findgroup groups={groups} addGroup={addGroup} />} />
          <Route path='/login' element={<Login users={users} />} />
          <Route path='/register' element={<Register users={users} addUser={addUser}/>} />
          <Route path='/userlist' element={<UserList users={users}/>} />
          <Route path='/user' element={<User users={users}/>} />
          <Route path='/' element={<Home people={people} />} />
        </Routes>
        </BrowserRouter>
        <Footer/>
        </UserContext.Provider>
      </main>
      
    </div>
  );
}

export default App;

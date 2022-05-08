import React from 'react';
import './User.css';
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useLocation } from 'react-router-dom';


const User = (props) => {
    //const [userName, setUserName] = useContext(UserContext);

    const {users} = props;
    const username = useLocation().search.slice(1);

    //const [user, setUser] = useState([]);
    const user = users.filter(x => x.username === username)[0];

    console.log(user);

    return (
        <div className='User'>
            <h3>{user.username}</h3>
            <img src={user.picture} alt='user' />
            <p>{user.description}</p>
        </div>
    )
}

export default User;
import React from 'react';
import './UserList.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';


const UserList = (props) => {
    const [user, setUser] = useContext(UserContext);
    const {users} = props;

    return (
        <div className='UserList'>
            <div className='userlist__list'>
                {users.map(u => (
                    <div key={u.username} className='item'>
                        <Link to={{pathname: '/user', search: u.username}} users={users}><h3>{u.username}</h3></Link>
                        <img src={u.picture} alt='user' />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;
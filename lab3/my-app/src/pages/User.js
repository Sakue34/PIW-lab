import React from 'react';
import './User.css';
import { useLocation } from 'react-router-dom';


const User = (props) => {
    const {users} = props;
    const username = useLocation().search.slice(1);

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
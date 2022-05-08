import React from 'react';
import './Login.css';
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';

const Login = (props) => {
    const [user, setUser] = useContext(UserContext);

    const [inputUsername, setInputUserName] = useState();
    const [inputPassword, setInputPassword] = useState();

    const {users} = props;

    const handleSubmit = e => {
        e.preventDefault();
        const foundUser = users.filter(x => x.username === inputUsername);
        if (foundUser[0].password === inputPassword) {
            setUser(foundUser[0]);
            alert('Logowanie poprawne');
        } else {
            alert('Wystąpił błąd podczas logowania');
        }
    }

    const handleLogout = e => {
        if (!user) {
            alert('Nie jesteś zalogowany!');
            return;
        }
        setUser(0);
        alert('Wylogowanie poprawne');
    }

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit}>
                <div className='form__items'>
                    <label>Nazwa użytkownika
                        <input type="text" onChange={e => setInputUserName(e.target.value)}/>
                    </label>
                </div>
                <div className='form__items'>
                    <label>Hasło
                        <input type="password" onChange={e => setInputPassword(e.target.value)}/>
                    </label>
                </div>
                <div className='form__items'>
                    <button type='submit'>Zaloguj się</button>
                </div>
            </form>
            <br/>
            <div className='form__items'>
                <button onClick={handleLogout}>Wyloguj się</button>
            </div>
        </div>
    )
}

export default Login;
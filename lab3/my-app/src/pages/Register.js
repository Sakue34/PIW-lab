import React from 'react';
import './Register.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Register = (props) => {
    const {addUser} = props;

    const [newUser, setNewUser] = useState("");
    const [picsumURL, setPicsumURL] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewUser(values => ({...values, [name]: value}))
    }

    useEffect(() => {
        axios.get("http://picsum.photos/100/100")
        .then(res => {
            const id = res.headers['picsum-id']
            setPicsumURL('https://picsum.photos/100/100?image=' + id);
        });
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        newUser.picture = picsumURL;
        addUser(newUser);
        alert('Utworzono nowego użytkownika, możesz się teraz zalogować');
        setNewUser('');
    }

    return (
        <div className='Register'>
            <div className='form__items'>
                <p>Zarejestruj się</p>
            </div>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div className='form__items'>
                    <label>Nazwa użytkownika
                        <input 
                            type="text" 
                            name="username"
                            value={newUser.username || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='form__items'>
                    <label>Hasło
                        <input 
                            type="password" 
                            name="password"
                            value={newUser.password || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='form__items'>
                    <label>E-mail
                        <input 
                            type="text" 
                            name="email"
                            value={newUser.email || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='form__items'>
                    <label>Opis
                        <input 
                            type="text" 
                            name="description"
                            value={newUser.description || ""}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='form__items'>
                    <button type='submit'>Utwórz konto</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
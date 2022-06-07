import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/init";
import { logInWithGoogle } from "../firebase/auth";
import { logInWithGithub } from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import UserContext from '../contexts/UserContext';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user_new, loading, error] = useAuthState(auth);
    const [user, setUser] = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (loading)
            return
        if (user_new) {
            setUser({
                username: user_new.displayName,
                password: 'password',
                email: 'test@gmail.com',
                picture: 'null',
                description: 'Firebase login user description'
              });
              console.log(user_new.displayName);
              console.log(user_new);
            navigate("/");
        }
        if(error)
            console.error({error});
        }, [user_new, loading]);

    return (
    <div className="login">

        <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
        />
        <br/>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <br/>
        <button
            //onClick={() => logInWithEmailAndPassword(email, password)}
        >
            Login
        </button>
        <br/>
        <button onClick={logInWithGoogle}>
            Login with Google
        </button>
        <button onClick={logInWithGithub}>
            Login with Github
        </button>
        <br/>
        <div>
            Don't have an account? <Link to="/register">Register</Link> now.
        </div>

    </div>
    );
}
export default Login;

// Wcześniejsza wersja strony, bez firebase
/*import React from 'react';
import './Login.css';
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { logInWithGoogle } from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

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
           <button onClick={logInWithGoogle}>
               Login with Google
           </button>
           <br/>
           <div className='form__items'>
               <button onClick={handleLogout}>Wyloguj się</button>
           </div>
       </div>
   )
}

export default Login;*/
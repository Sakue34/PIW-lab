import React from 'react'
import './Header.css';
import logo from '../images/binder-logo.png';
import { NavLink } from 'react-router-dom';

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase/init';
import { logout } from '../firebase/auth';


function Header() {
    const [user] = useAuthState(auth);

    return (
        <div className='header'>
            <NavLink to="/"><img className='header__logo' src={logo} alt='tinder logo'/></NavLink>
            <NavLink to="/addstudent"><div className='header__item'>Dodaj swoje ogłoszenie</div></NavLink>
            <NavLink to="/findgroup"><div className='header__item'>Szukaj grupy</div></NavLink>
            <NavLink to="/userlist"><div className='header__item'>Lista użytkowników</div></NavLink>
            { user && <button onClick={logout}> Wyloguj {user.displayName}</button> || <NavLink to="/login">Zaloguj</NavLink> }
            
            <NavLink to="/register"><div className='header__item'>Rejestracja</div></NavLink>
        </div>
    );
}

//<NavLink to="/login"><div className='header__item'>Logowanie</div></NavLink>

export default Header;
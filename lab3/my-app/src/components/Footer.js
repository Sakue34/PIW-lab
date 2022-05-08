import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import './Footer.css';

const Footer = () => {
    const [user] = useContext(UserContext);
    return (
        <footer>
            <div className='footer__item footer__border'>Binder, czyli Tinder dla studentów i grup projektowych szukających członków</div>
            <div className='footer__item'>Jesteś zalogowany jako: {user.username}</div>
            <div className='footer__item'>Autor: Szymon Ciszewski 2022</div>
        </footer>
    )
    
}

export default Footer;
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext';

export default function Header() {
    const {isAuthenticated} = useContext (AuthContext);
return (
    <header>
    <h1><Link className="home" to="/">Коли</Link></h1>
    <nav>
        
        {isAuthenticated
        ?(<div id="user">
            <Link to="/games">Всички коли</Link>
            <Link to="/games/create">Нова кола</Link>
            <Link to="/logaut">Изход</Link>
        </div>)
        :(
            <div id="guest">
            <Link to="/login">Вход</Link>
            <Link to="/register">Регистрация</Link>
        </div>
        )
    }
              
    </nav>
</header>
);

}
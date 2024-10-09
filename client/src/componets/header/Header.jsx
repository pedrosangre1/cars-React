import {Link} from 'react-router-dom'
import { useAuthContext } from '../../contexts/authContext';

export default function Header() {
    const {isAuthenticated} = useAuthContext();
return (
    <header>
    <h1><Link className="home" to="/">Коли</Link></h1>
    <nav>
        
        {isAuthenticated
        ?(<div id="user">
            <Link to="/cars">Всички коли</Link>
            <Link to="/cars/create">Нова кола</Link>
            <Link to="/references">Справки</Link>
            <Link to="/logout">Изход</Link>
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
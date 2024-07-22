import {Link} from 'react-router-dom'

export default function Header() {
return (
    <header>
    <h1><Link className="home" to="/">Коли</Link></h1>
    <nav>
        <Link to="/games">Всички коли</Link>
        <div id="user">
            <Link to="/games/create">Нова кола</Link>
            <Link to="/logaut">Изход</Link>
        </div>
        <div id="guest">
            <Link to="/login">Вход</Link>
            <Link to="/register">Регистрация</Link>
        </div>
    </nav>
</header>
);

}
import {Link} from 'react-router-dom'

export default function Header() {
return (
    <header>
    <h1><Link className="home" to="/">Cars</Link></h1>
    <nav>
        <Link to="/games">All cars</Link>
        <div id="user">
            <Link to="/games/create">New Car</Link>
            <Link to="/logaut">Logout</Link>
        </div>
        <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </nav>
</header>
);

}
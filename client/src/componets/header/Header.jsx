export default function Header() {
return (
    <header>
    <h1><a className="home" href="#">Cars</a></h1>
    <nav>
        <a href="#">All cars</a>
        <div id="user">
            <a href="#">New Car</a>
            <a href="#">Logout</a>
        </div>
        <div id="guest">
            <a href="#">Login</a>
            <a href="#">Register</a>
        </div>
    </nav>
</header>
);

}
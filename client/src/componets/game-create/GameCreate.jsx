export default function GameCreate() {
    return (
<section id="create-page" className="auth">
<form id="create">
    <div className="container">

        <h1>Нов автомобил</h1>
        <label htmlFor="leg-title">Марка:</label>
        <input type="text" id="title" name="title" placeholder="Enter game title..."/>

        <label htmlFor="category">Модел</label>
        <input type="text" id="category" name="category" placeholder="Enter game category..."/>

        <label htmlFor="levels">Регистрационен Номер:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1"/>

        <label htmlFor="game-img">Картинка:</label>
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>

        <label htmlFor="summary">Описание:</label>
        <textarea name="summary" id="summary"></textarea>
        <input className="btn submit" type="submit" value="Create Game"/>
    </div>
</form>
</section>
    );
}
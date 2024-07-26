export default function GameCreate() {
    return (
<section id="create-page" className="auth">
<form id="create">
    <div className="container">

        <h1>Нов автомобил</h1>
        <label htmlFor="leg-title">Марка:</label>
        <select htmlFor="model" id="cars" name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
        </select>
        <label htmlFor="Model">Модел</label>
        <input type="text" id="category" name="category" placeholder="Въведете модел"/>

        <label htmlFor="levels">Регистрационен Номер:</label>
        <input type="text" id="maxLevel" name="maxLevel" min="1" placeholder="Въведете регистрацонен номер"/>

        <label htmlFor="game-img">Картинка:</label>
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Някаква картинка..."/>

        <label htmlFor="summary">Описание:</label>
        <textarea name="summary" id="summary"></textarea>
        <input className="btn submit" type="submit" value="Create Game"/>
    </div>
</form>
</section>
    );
}
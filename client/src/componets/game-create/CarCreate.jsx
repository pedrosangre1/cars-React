import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useCreateCar } from "../../hooks/useGames";


const initialValues = {
    cars: '',
    model: '',
    regno: '',
    photo: '',
    summary: '',

};
export default function CarCreate() {
    const navigate = useNavigate();
    const createCar = useCreateCar();

   const createCarHandler = async (values) => {
    try {
        const {_id: carId} = await createCar(values);

        navigate(`/games/${carId}/details`);
    } catch (err){
        console.log(err.message);
    }
   };
   
    const {
values,
changeHandler,
submitHandler,
    } = useForm(initialValues, createCarHandler)
    
    return (
<section id="create-page" className="auth">
<form id="create" onSubmit={submitHandler}>
    <div className="container">

        <h1>Нов автомобил</h1>
        <label htmlFor="leg-title">Марка:</label>
        <select htmlFor="model" id="cars" name="marka" defaultValue = {values.cars} onChange={changeHandler}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
        </select>
        <label htmlFor="Model">Модел</label>
        <input type="text" id="model" name="model" value = {values.model} onChange={changeHandler} placeholder="Въведете модел"/>

        <label htmlFor="levels">Регистрационен Номер:</label>
        <input type="text" id="maxLevelregno" name="regno" value = {values.regno} onChange={changeHandler} placeholder="Въведете регистрацонен номер"/>

        <label htmlFor="game-img">Картинка:</label>
        <input type="text" id="photo" name="photo" value = {values.photo} onChange={changeHandler} placeholder="Някаква картинка..."/>

        <label htmlFor="summary">Описание:</label>
        <textarea name="summary" value = {values.summary} onChange={changeHandler} id="summary"></textarea>
        <input className="btn submit" type="submit" value="ДОБАВЯНЕ НА КОЛА"/>
    </div>
</form>
</section>
    );
}
import {useEffect, useState } from "react";
import carsAPI from "../../api/carsapi";
import { useParams } from "react-router-dom";

export default function GameDetails() {
    const[car, setCar] = useState({});
    const{carsId} = useParams();
    
    useEffect( () => { const fetchCarDetails = async ( ) => {
        try { const result = await carsAPI. getOne(carsId); setCar(result); } 
        catch (error) { console. error( "Error fetching car details:", error); } }; 
        fetchCarDetails(); }, [carsId]); 
        if (!car) { return <p>Loading...</p>; } 
    return (
        <section id="game-details">
        <h1>Car Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={car.photo} />
                <h1>{car.marka}  {car.model}</h1>
                <span className="levels">Регистрационен номер:{car.regno}</span>
                 <p className="type">Въведена на:{car.datetime}</p>
            </div>

            <p className="text"> {car.summary} </p>

            {/* <!-- Bonus ( for Guests and Users ) --> */}
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {/* <!-- list all comments for current game (If any) --> */}
                    <li className="comment">
                        <p>Content: I rate this one quite highly.</p>
                    </li>
                    <li className="comment">
                        <p>Content: The best game.</p>
                    </li>
                </ul>
                {/* <!-- Display paragraph: If there are no games in the database --> */}
                <p className="no-comment">No comments.</p>
            </div>

            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div>
        </div>

        {/* <!-- Bonus --> */}
        {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment"/>
            </form>
        </article>

    </section>
    );
}
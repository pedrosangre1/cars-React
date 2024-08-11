import { useState } from "react";
import { useParams } from "react-router-dom";
import UserSection from "./user-section/UserSection";
import { useGetOneCars } from "../../hooks/useGames";
import { useForm } from "../../hooks/useForm";
import {formatDate } from "./utils/dateUtils"

const initialValues = {

}

export default function CarDetails() {
    const {carsId} =useParams ()
    const[car, setCar] = useGetOneCars(carsId); 

    
    return (
        <section id="game-details">
        <h1>Подробности</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={car.photo} />
                <h1>{car.marka}  {car.model}</h1>
                <span className="levels">Регистрационен номер:{car.regno}</span>
                 <p className="type">Въведена на:{car.datetime}{formatDate(car._createdOn)}</p>
            </div>

            <p className="text"> {car.summary} </p>

            {/* <!-- Bonus ( for Guests and Users ) -->
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                     <!-- list all comments for current game (If any) --> 
                    <li className="comment">
                        <p>Content: I rate this one quite highly.</p>
                    </li>
                    <li className="comment">
                        <p>Content: The best game.</p>
                    </li>
                </ul>
             <!-- Display paragraph: If there are no games in the database --> 
                <p className="no-comment">No comments.</p>
            </div> */}

            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
            {/* <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div> */}
            
               <UserSection />    
       
       
        </div>
              
       
             
        {/* <!-- Bonus --> */}
        {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        {/* <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment"/>
            </form>
        </article> */}

 

    </section>
    );
}
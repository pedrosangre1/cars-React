import { useEffect, useState } from "react";
import * as gamesAPI from '../../api/gamesapi';

export default function GameList() {
    const [games, setGames] = useState([]);
    useEffect(()=>{
gamesAPI.getAll()
.then(result => setGames(result));
    },[]);
    
    return (
<section id="catalog-page">
<h1>All Cars</h1>
{/* <!-- Display div: with information about every game (if any) --> */}
<div className="allGames">
    <div className="allGames-info">
        <img src="./images/car_1.jpg"/>
        <h6>Action</h6>
        <h2>Cover Fire</h2>
        <a href="#" className="details-button">Details</a>
    </div>

</div>
<div className="allGames">
    <div className="allGames-info">
        <img src="./images/car_1.jpg"/>
        <h6>Action</h6>
        <h2>Zombie lang</h2>
        <a href="#" className="details-button">Details</a>
    </div>

</div>
<div className="allGames">
    <div className="allGames-info">
        <img src="./images/car_1.jpg"/>
        <h6>Action</h6>
        <h2>MineCraft</h2>
        <a href="#" className="details-button">Details</a>
    </div>
</div>

{/* <!-- Display paragraph: If there is no games  --> */}
<h3 className="no-articles">No articles yet</h3>
</section>
    );
}
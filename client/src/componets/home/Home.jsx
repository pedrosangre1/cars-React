import { useEffect,useState } from "react";
import carsAPI from "../../api/carsapi";
import LastedCars from "./lastedCar/LastedCars";


export default function Home() {
const [lastedCars, setLastedCars] = useState([]);
    useEffect (() => {
(async () =>{
    const result = await carsAPI.getAll();
//    console.log(result);
    setLastedCars(result.reverse().slice(0, 3));
})();
    }, [])

    return (
            <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero"/>

            <div id="home-page">
                <h1>Latest Cars</h1>

{lastedCars.length > 0
    ? lastedCars.map(cars => <LastedCars key ={cars._id} {...cars}/>)
    : <p className="no-articles">No games yet</p>
}
              </div>
            </section>
);
}
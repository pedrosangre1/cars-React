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
                <h2>ВСИЧКИ МОИ КОЛИ</h2>
                <h3></h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero"/>

            <div id="home-page">
                <h1>ПОСЛЕДНО ДОБАВЕНИ</h1>

{lastedCars.length > 0
    ? lastedCars.map(cars => <LastedCars key ={cars._id} {...cars}/>)
    : <p className="no-articles">ОЩЕ НЯМА ИГРИ</p>
}
              </div>
            </section>
);
}
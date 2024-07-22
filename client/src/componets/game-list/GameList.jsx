import { useEffect, useState } from "react";
import * as carsAPI from '../../api/carsapi';
import CarListItem from "./car-list-item/CarListItem";

export default function GameList() {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
carsAPI.getAll()
.then(result => setCars(result));
    },[]);
    
    return (
<section id="catalog-page">
<h1>Всички коли </h1>
{/* <!-- Display div: with information about every game (if any) --> */}
{cars.map(game => <CarListItem key= {game._id} {...game}/>)}
{/* <!-- Display paragraph: If there is no games  --> */}
<h3 className="no-articles">No articles yet</h3>
</section>
    );
}
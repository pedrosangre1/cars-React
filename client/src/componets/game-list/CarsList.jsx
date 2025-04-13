import { useGetAllGames } from "../../hooks/useGames";
import CarListItem from "./car-list-item/CarListItem";

export default function CarsList() {
   const [cars] = useGetAllGames ();
    
    return (
<section id="catalog-page">
<h1>Всички коли </h1>
{/* <!-- Display div: with information about every game (if any) --> */}
{ cars.length > 0 
? cars.map(cars => <CarListItem key= {cars._id} {...cars}/>)
:<h3 className="no-articles">Няма никакви коли</h3>
}
{/* <!-- Display paragraph: If there is no games  --> */}

</section>
    );
}
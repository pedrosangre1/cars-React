import React from 'react';
import { useParams } from "react-router-dom";

import { useGetOneCars } from "../../hooks/useGames";
import {GameList} from '../game-list/GameList';
import { formatDate } from '../game-details/utils/dateUtils';

export default function CarsRecord() {
  const {carsId} =useParams ()
  const[car, setCar] = useGetOneCars(carsId); 
  
  return (
    
    <div> 
            <GameList/> 
          <img className="game-img" src={car.photo} />
          <h1>{car.marka}  {car.model}</h1>
          <span className="levels">Регистрационен номер:{car.regno}</span>
          <p className="type">Въведена на:{car.datetime}{formatDate(car._createdOn)}</p>
    </div>
  );
}
